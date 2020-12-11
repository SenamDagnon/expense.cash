import React from 'react';
import PropTypes from 'prop-types';
import {Link} from '../../libs/Router';
import {colors} from '../../styles/StyleSheet';

/**
 * On the native layers, we need to convert the onClick prop to onPress for react-router-native
 */
const propTypes = {
    // Toggles the hamburger menu open and closed
    onClick: PropTypes.func.isRequired,
};

// eslint-disable-next-line react/jsx-props-no-spreading
const PressableLink = props => (
    <Link
        onPress={props.onClick}
        {...props}
        underlayColor={colors.transparent}
    />
);
PressableLink.propTypes = propTypes;
export default PressableLink;
