import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-elements";
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "react-native-vector-icons/AntDesign";
import ErrorMessage from "./FormErrorMessage";

const DropdownComponent = ({ label, data, onSelect,isValid=true }) => {
  const [value, setValue] = useState(null);
  // const [isFocus, setIsFocus] = useState(false);

  // const renderLabel = () => {
  //   if (value || isFocus) {
  //     return (
  //       <Text style={[styles.label, isFocus && { color: 'blue' }]}>
  //         {label}
  //       </Text>
  //     );
  //   }
  //   return null;
  // };
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
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search={false}
        maxHeight={180}
        labelField="label"
        valueField="value"
        placeholder={`Select ${label}`}
        searchPlaceholder="Search..."
        value={value}
        // onFocus={() => setIsFocus(true)}
        // onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          setValue(item.value);
          onSelect(item.value);
          //setIsFocus(false);
        }}
        renderLeftIcon={() => (
          <AntDesign
            style={styles.icon}
            // color={isFocus ? 'blue' : 'black'}
            name="Safety"
            size={18}
          />
        )}
      />
      {ErrorMsg()}
    </View>
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    margin: 10,
  },
  dropdown: {
    height: 36,
    borderColor: '#0a6e3f',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 25,
    top: -10,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 13,
    color:'#0a6e3f'
  },
  placeholderStyle: {
    fontSize: 13,
  },
  selectedTextStyle: {
    fontSize: 11,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 13,
  },
});
