import React from "react";
import { StyleSheet, TouchableOpacity,Text } from "react-native";
//Custom Button
const CButton = ({ label, action = {} }) => {
  return (
    <TouchableOpacity style={styles.btnStyle} onPress={action}>
      <Text style={styles.textStyle}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnStyle: {
    margin: 10,
    padding: 1,
    backgroundColor: "green",
    borderWidth: 1,
    borderRadius: 8,
    fontSize: 13,
    height: 36,
    flex:1,
    justifyContent: 'center', 
    alignItems: 'center'
  },
  textStyle:{
    color: '#fff',
  }
});
export default CButton;
