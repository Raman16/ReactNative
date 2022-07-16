import React from "react";
import { Text, StyleSheet, View } from "react-native";
const ErrorMessage = ({ label }) => {
  return (
      <Text style={styles.errorStyle}>{`Please Enter ${label}`}</Text>
  );
};

const styles = StyleSheet.create({
  errorStyle: {
    fontSize: 12,
    color: "red",
  },
});
export default ErrorMessage;
