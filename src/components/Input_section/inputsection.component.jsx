import Location from '../../assets/location.svg';
import { InputBox, Info } from "./inputsection.style"
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.components"
export default function InputSection({ ...otherProps }) {
    return (
        <InputBox {...otherProps}>
            <Info>
                <img
                    src={Location}
                    alt=""
                />
                <input
                    type="text"
                    placeholder="Where’s your house?"
                />
            </Info>
            <Button buttonType={BUTTON_TYPE_CLASSES.register}>Location</Button>
        </InputBox>
    )
}
