import React, {memo, PureComponent} from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import {Document, Page} from 'react-pdf/dist/esm/entry.webpack';
import styles from '../../styles/styles';
import withWindowDimensions, {windowDimensionsPropTypes} from '../withWindowDimensions';
import variables from '../../styles/variables';

const propTypes = {
    // URL to full-sized image
    sourceURL: PropTypes.string,

    ...windowDimensionsPropTypes,

    // Any additional styles to apply
    // eslint-disable-next-line react/forbid-prop-types
    style: PropTypes.any,
};

const defaultProps = {
    sourceURL: '',
    style: {},
};

/**
 * On web, we use this pointed to a pdf renderer
 *
 * @class PDFView
 * @extends {PureComponent}
 */
class PDFView extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            numPages: null,
        };
        this.onDocumentLoadSuccess = this.onDocumentLoadSuccess.bind(this);
        console.debug(props);
    }

    onDocumentLoadSuccess = ({numPages}) => {
        this.setState({numPages});
    }

    render() {
        const {isSmallScreenWidth, windowWidth} = this.props;
        const pageWidth = isSmallScreenWidth ? windowWidth - 30 : variables.pdfPageWidth;
        return (
            <View
                style={[styles.PDFView, this.props.style]}
            >
                <Document
                    file={this.props.sourceURL}
                    options={{
                        cMapUrl: 'cmaps/',
                        cMapPacked: true,

                    }}
                    externalLinkTarget="_blank"
                    onLoadSuccess={this.onDocumentLoadSuccess}
                >
                    {
                        Array.from(
                            new Array(this.state.numPages),
                            (el, index) => (
                                <Page
                                    width={pageWidth}
                                    key={`page_${index + 1}`}
                                    pageNumber={index + 1}
                                />
                            ),
                        )
                    }
                </Document>
            </View>
        );
    }
}

PDFView.propTypes = propTypes;
PDFView.defaultProps = defaultProps;
PDFView.displayName = 'PDFView';

export default withWindowDimensions(memo(PDFView));
