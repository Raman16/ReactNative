import React, { useState } from "react";
import { StyleSheet, TextInput, Text, View } from "react-native";
import ErrorMessage from "./FormErrorMessage";
//Custom Input
const CInput = ({
  label,
  keyboardType = "default",
  maxLength = 100,
  onChangeText,
  isValid = true,
}) => {
  //   const [value, setValue] = useState(null);
  //   const [isFocus, setIsFocus] = useState(false);

  //  const renderLabel = () => {
  //       if (value || isFocus) {
  //         return (
  //           <Text style={[styles.label, isFocus && { color: 'blue' }]}>
  //             {label}
  //           </Text>
  //         );
  //       }
  //       return null;
  //     };

  const renderLabel = () => {
    return <Text style={styles.label}>{label}</Text>;
  };
  const ErrorMsg= ()=>{
    if(!isValid)
      return <ErrorMessage label={label} />
  }

  return (
    <View style={styles.container}>
      {renderLabel()}
      <TextInput
        label={label}
        style={styles.input}
        placeholder={`Enter ${label}`}
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType={keyboardType}
        maxLength={maxLength}
        returnKeyType="next"
        onChangeText={onChangeText}
        // onFocus={() => setIsFocus(true)}
        // onBlur={() => setIsFocus(false)}
        // onChange={(item) => {
        //   setValue(item.value);
        //   setIsFocus(false);
        // }}
      ></TextInput>
      {ErrorMsg()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    margin:10
  },
  input: {
    padding: 5,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 8,
    fontSize: 13,
    height: 36,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 25,
    top: -8,
    zIndex: 999,
    fontSize: 13,
  },
});
export default CInput;
