import React from 'react';
import PropTypes from 'prop-types';
import {View, Image, TouchableOpacity} from 'react-native';
import styles, {colors} from '../../../style/StyleSheet';
import TextInputFocusable from '../../../components/TextInputFocusable';
import sendIcon from '../../../../assets/images/icon-send.png';
import paperClipIcon from '../../../../assets/images/icon-paper-clip.png';
import ImagePicker from '../../../lib/ImagePicker';
import {addAction} from '../../../lib/actions/Report';

const propTypes = {
    // A method to call when the form is submitted
    onSubmit: PropTypes.func.isRequired,

    // The ID of the report actions will be created for
    reportID: PropTypes.number.isRequired,
};

class ReportActionCompose extends React.Component {
    constructor(props) {
        super(props);

        this.updateComment = this.updateComment.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.triggerSubmitShortcut = this.triggerSubmitShortcut.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.onAttachmentButtonTapped = this.onAttachmentButtonTapped.bind(this);

        this.state = {
            comment: '',
        };
    }

    /**
     * Handle the attachment icon being tapped
     *
     * @param {SyntheticEvent} [e]
     */
    onAttachmentButtonTapped(e) {
        e.preventDefault();

        const options = {
            storageOptions: {
                skipBackup: true,
            },
        };

        ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {
                return;
            }

            if (response.error) {
                console.error(`Error occurred picking image: ${response.error}`);
                return;
            }

            addAction(this.props.reportID, '', ImagePicker.getDataForUpload(response));
        });
    }

    /**
     * Listens for the keyboard shortcut and submits
     * the form when we have enter
     *
     * @param {Object} e
     */
    triggerSubmitShortcut(e) {
        if (e && e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            this.submitForm();
        }
    }

    /**
     * Add a new comment to this chat
     *
     * @param {SyntheticEvent} [e]
     */
    submitForm(e) {
        if (e) {
            e.preventDefault();
        }

        const trimmedComment = this.state.comment.trim();

        // Don't submit empty comments
        // @TODO show an error in the UI
        if (!trimmedComment) {
            return;
        }

        this.props.onSubmit(trimmedComment);
        this.setState({
            comment: '',
        });
    }

    /**
     * Update the value of the comment input in the state
     *
     * @param {string} newComment
     */
    updateComment(newComment) {
        this.setState({
            comment: newComment,
        });
    }

    render() {
        return (
            <View style={[styles.chatItemCompose]}>
                <View style={[styles.chatItemComposeBox, styles.flexRow]}>
                    <TouchableOpacity
                        onPress={this.onAttachmentButtonTapped}
                        style={[styles.chatItemAttachButton]}
                        underlayColor={colors.componentBG}
                    >
                        <Image
                            style={[styles.chatItemSubmitButtonIcon]}
                            resizeMode="contain"
                            source={paperClipIcon}
                        />
                    </TouchableOpacity>
                    <TextInputFocusable
                        multiline
                        textAlignVertical="top"
                        placeholder="Write something..."
                        placeholderTextColor={colors.textSupporting}
                        onChangeText={this.updateComment}
                        onKeyPress={this.triggerSubmitShortcut}
                        style={[styles.textInput, styles.textInputCompose, styles.flex4]}
                        value={this.state.comment}
                        maxLines={16} // This is the same that slack has
                    />
                    <TouchableOpacity
                        style={[styles.chatItemSubmitButton, styles.buttonSuccess]}
                        onPress={this.submitForm}
                        underlayColor={colors.componentBG}
                    >
                        <Image
                            resizeMode="contain"
                            style={[styles.chatItemSubmitButtonIcon]}
                            source={sendIcon}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
ReportActionCompose.propTypes = propTypes;

export default ReportActionCompose;
