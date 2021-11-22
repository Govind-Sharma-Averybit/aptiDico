import React, { useEffect, useState } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { Input, Item, Label, Icon } from "native-base";
import styles from './style'
import { ValidationLibrary, VALIDATE_PASSWORD } from '../../utilities/Constants/validationconstants'

const InputText = ({ label, labelAccessory, disabled, placeholder, inputAccessory, transparentBackgroundwithBorder, transparentBackground, defaultKeyboard, keyboardType, value, onChangeText, required, secureTextEntry, showErrorText, validationType, requiredMessage, placeholderTextColor }) => {
    const [passwordeye, setPasswordEye] = useState(true)
    const [focus, setFocus] = useState(false)
    const [errorText, setErrorText] = useState("")

    useEffect(() => {
        if (showErrorText) {
            if (value === "" || value === null || value === undefined) {
                setErrorText(ValidationLibrary[requiredMessage].message)
            }
            else if (validationType !== undefined) {

                if (ValidationLibrary[validationType].regex === undefined || !ValidationLibrary[validationType].regex.test(value)) {
                    //show regex error error
                    setErrorText(ValidationLibrary[validationType].message)
                }
                else {
                    setErrorText("")
                }
            }
            else {
                setErrorText("")
            }
        }
        else {
            setErrorText("")
        }
    });

    return (
        <View style={styles.inputView}>
            <Item stackedLabel style={{ borderColor: 'transparent' }} >
                <Label style={styles.labelText}><Text style={styles.labelAccessory}>{labelAccessory !== undefined ? labelAccessory + ' ' : null}</Text>{label}</Label>

                <Input
                    style={transparentBackgroundwithBorder ? styles.textInputtransparentwithBorder : disabled ? styles.notEditableTextInputStyle: transparentBackground ? styles.textInputtransparent : focus ? [styles.textInputFocus, errorText !== "" ? { borderColor: 'red' } : {}] : [styles.textInput, errorText !== "" ? { borderColor: 'red' } : {}]}
                    onChangeText={onChangeText}
                    onFocus={() => setFocus(true)}
                    onBlur={() => setFocus(false)}
                    value={value}
                    placeholder={placeholder}
                    placeholderTextColor={placeholderTextColor !== undefined ? placeholderTextColor : "#C3C5CD"}
                    keyboardType={keyboardType}
                    required={required}
                    secureTextEntry={secureTextEntry ? passwordeye : false}
                    autoFocus={defaultKeyboard}
                    maxLength={500}
                    autoCorrect={false}
                    disabled={disabled === 'true' ? true : false}
                />
            </Item>
            {secureTextEntry && <TouchableOpacity
                style={styles.passwordEyeContainer}
                onPress={() => setPasswordEye(!passwordeye)}>
                <Icon
                    name={passwordeye ? "eye-outline" : "md-eye-off-outline"}
                    type="Ionicons"
                    style={styles.passwordEyeIcon}
                />
            </TouchableOpacity>}
            {errorText !== "" &&
                <Text style={styles.errorText}>
                    {errorText}
                </Text>
            }
            {inputAccessory !== undefined &&
                inputAccessory()
            }
        </View>
    )

}

export default InputText;