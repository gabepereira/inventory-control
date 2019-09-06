import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const Input = props => {
    return (
        <TextInput
            style={props.style ? props.style : {}}
            onFocus={props.onFocus ? props.onFocus : () => null}
            onChangeText={props.onChange ? props.onChange : () => null}
            autoCorrect={props.autoCorrect ? props.autoCorrect : false}
            spellCheck={props.spellCheck ? props.spellCheck : false}
            placeholder={props.placeholder ? props.placeholder.text : ''}
            placeholderTextColor={props.placeholder ? props.placeholder.color : '#ffffff'}
            editable={props.editable ? props.editable : true}
            textContentType={props.type ? props.type : 'none'}>
        </TextInput>
    )
};

export default Input;