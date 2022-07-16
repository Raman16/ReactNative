import React from "react";
import { StyleSheet, TextInput, View, Text } from "react-native";
import ErrorMessage from "./FormErrorMessage";
//Custom Input
const CMultilineInput = ({ label, onChangeText, isValid = true }) => {
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
        multiline
        numberOfLines={3} //Android
        textAlignVertical="top" //prevents center in Android
        onChangeText={onChangeText}
      ></TextInput>
      {ErrorMsg()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    margin: 10,
  },
  input: {
    padding: 5,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 8,
    fontSize: 13,
    height: 50,
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
export default CMultilineInput;
