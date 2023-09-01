/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import {
    BaseButton,
    Register,
    InvertedButton,
} from './button.style';

export const BUTTON_TYPE_CLASSES = {
    base: 'base',
    register: 'register',
    inverted: 'inverted',
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.register]: Register,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
}[buttonType]);

const Button = ({ children, buttonType, ...otherProps }) => {
    const CustomButton = getButton(buttonType);
    return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default Button;