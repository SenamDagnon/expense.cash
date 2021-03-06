const core = require('@actions/core');
const {context} = require('@actions/github');
const ActionUtils = require('../../libs/ActionUtils');
const GithubUtils = require('../../libs/GithubUtils');


const prList = ActionUtils.getJSONInput('PR_LIST', {required: true});
const isProd = ActionUtils.getJSONInput('IS_PRODUCTION_DEPLOY', {required: true});
const isCP = ActionUtils.getJSONInput('IS_CHERRY_PICK', {required: false}, false);
const version = core.getInput('DEPLOY_VERSION', {required: true});


/**
 * Return a nicely formatted message for the table based on the result of the GitHub action job
 *
 * @param {string} platformResult
 * @returns {string}
 */
function getDeployTableMessage(platformResult) {
    switch (platformResult) {
        case 'success':
            return `${platformResult} ā`;
        case 'cancelled':
            return `${platformResult} šŖ`;
        case 'skipped':
            return `${platformResult} š«`;
        case 'failure':
        default:
            return `${platformResult} ā`;
    }
}

const androidResult = getDeployTableMessage(core.getInput('ANDROID', {required: true}));
const desktopResult = getDeployTableMessage(core.getInput('DESKTOP', {required: true}));
const iOSResult = getDeployTableMessage(core.getInput('IOS', {required: true}));
const webResult = getDeployTableMessage(core.getInput('WEB', {required: true}));

const workflowURL = `${process.env.GITHUB_SERVER_URL}/${process.env.GITHUB_REPOSITORY}`
    + `/actions/runs/${process.env.GITHUB_RUN_ID}`;
const deployVerb = isCP ? 'Cherry-picked' : 'Deployed';

let message = `š [${deployVerb}](${workflowURL}) to ${isProd ? 'production' : 'staging'} in version: ${version}š`;
message += `\n\n platform | result \n ---|--- \nš¤ android š¤|${androidResult} \nš„ desktop š„|${desktopResult}`;
message += `\nš iOS š|${iOSResult} \nšø web šø|${webResult}`;

/**
 * Comment Single PR
 *
 * @param {Number} pr
 * @returns {Promise<void>}
 */
function commentPR(pr) {
    return GithubUtils.createComment(context.repo.repo, pr, message)
        .then(() => {
            console.log(`Comment created on #${pr} successfully š`);
        })
        .catch((err) => {
            console.log(`Unable to write comment on #${pr} š`);
            core.setFailed(err.message);
        });
}

/**
 * Create comment on each pull request
 */
prList.reduce((promise, pr) => promise.then(() => commentPR(pr)), Promise.resolve());
