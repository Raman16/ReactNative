import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Button,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Text,
} from "react-native";
import { SafeAreaView } from "react-navigation";
import DropdownComponent from "../components/DropdownComponent";
import * as ImagePicker from "expo-image-picker";
import CInput from "../components/InputComponent";
import CButton from "../components/ButtonComponent";
import CMultilineInput from "../components/MultilineInputComponent";

const materials = [
  { label: "Fridges, freezers and other cooling equipment", value: "1" },
  { label: "Computers and telecommunications equipment", value: "2" },
  { label: "Consumer electronic devices and solar panels", value: "3" },
  { label: "TVs, monitors and screens", value: "4" },
  { label: "LED bulbs", value: "5" },
  { label: "Vending machines", value: "6" },
];
const Country = [{ label: "India", value: "1" }];
const State = [
  { label: "Telangana", value: "1" },
  { label: "Andhra Pradesh", value: "2" },
];

const BookAPickupScreen = ({ initialValues }) => {
  const [values, setValues] = useState({ ...initialValues });

  const [formIsValid, setFormIsValid] = useState(true);

  const pick = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
      base64: true,
    });
    setValues((prevState) => {
      let prevStateValues = { ...prevState };
      prevStateValues.image.value = `data:image/png;base64,${result.base64}`;
      return { ...prevStateValues };
    });
  };

  const formValidate = () => {
    if (
      !values.material_id.isValid ||
      !values.description.isValid ||
      !values.address.isValid ||
      !values.landmark.isValid ||
      !values.state.isValid ||
      !values.city.isValid ||
      !values.pincode.isValid
    ) {
      setFormIsValid(false);
      return false;
    } else {
      setFormIsValid(true);
      return true;
    }
  };
  const inputValidate = (label) => {
    if (formIsValid && values[label].isValid == false) {
      return true;
    } else if (!formIsValid && values[label].isValid == false) {
      return false;
    } else {
      return true;
    }
  };

  const onSubmit = async () => {
    const validation = await formValidate();
    if (validation) {
      const formValues = {
        material_id: values.material_id.value,
        image: values.image.value,
        description: values.description.value,
        address: values.address.value,
        landmark: values.landmark.value,
        country: values.country.value,
        state: values.state.value,
        city: values.city.value,
        pincode: values.pincode.value,
      };
      console.log(formValues);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <SafeAreaView>
        <ScrollView>
          <DropdownComponent
            data={materials}
            label="Material"
            onSelect={(value) => {
              setValues((prevState) => {
                let prevStateValues = { ...prevState };
                prevStateValues.material_id.value = value;
                prevStateValues.material_id.isValid = value != 0 && true;
                return { ...prevStateValues };
              });
              setFormIsValid(true);
            }}
            isValid={inputValidate("material_id")}
          />

          <View style={styles.viewStyle}>
            <View style={styles.imageContainer}>
              <Image
                source={{ uri: values.image.value }}
                style={styles.image}
              />
            </View>
            <View style={styles.imageContainer}>
              <Button
                title="Choose Image"
                style={styles.imageBtn}
                onPress={pick}
              />
            </View>
          </View>

          <CMultilineInput
            label="Description"
            onChangeText={(value) => {
              setValues((prevState) => {
                let prevStateValues = { ...prevState };
                prevStateValues.description.value = value;
                prevStateValues.description.isValid = value != "" && true;
                return { ...prevStateValues };
              });
              setFormIsValid(true);
            }}
            isValid={inputValidate("description")}
          />
          <CMultilineInput
            label="Address"
            onChangeText={(value) => {
              setValues((prevState) => {
                let prevStateValues = { ...prevState };
                prevStateValues.address.value = value;
                prevStateValues.address.isValid = value != "" && true;
                return { ...prevStateValues };
              });
              setFormIsValid(true);
            }}
            isValid={inputValidate("address")}
          />
          <CMultilineInput
            label="Landmark"
            onChangeText={(value) => {
              setValues((prevState) => {
                let prevStateValues = { ...prevState };
                prevStateValues.landmark.value = value;
                prevStateValues.landmark.isValid = value != "" && true;
                return { ...prevStateValues };
              });
              setFormIsValid(true);
            }}
            isValid={inputValidate("landmark")}
          />
          <DropdownComponent
            data={Country}
            label="Country"
            onSelect={(value) => {
              setValues((prevState) => {
                let prevStateValues = { ...prevState };
                prevStateValues.country.value = value;
                prevStateValues.country.isValid = true;
                return { ...prevStateValues };
              });
              setFormIsValid(true);
            }}
            isValid={inputValidate("country")}
          />

          <DropdownComponent
            data={State}
            label="State"
            onSelect={(value) => {
              setValues((prevState) => {
                let prevStateValues = { ...prevState };
                prevStateValues.state.value = value;
                prevStateValues.state.isValid = value != 0 && true;
                return { ...prevStateValues };
              });
              setFormIsValid(true);
            }}
            isValid={inputValidate("state")}
          />

          <CInput
            label="City"
            onChangeText={(value) => {
              setValues((prevState) => {
                let prevStateValues = { ...prevState };
                prevStateValues.city.value = value;
                prevStateValues.city.isValid = value != "" && true;
                return { ...prevStateValues };
              });
              setFormIsValid(true);
            }}
            isValid={inputValidate("city")}
          />
          <CInput
            label="Pincode"
            keyboardType="numeric"
            maxLength={6}
            onChangeText={(value) => {
              setValues((prevState) => {
                let prevStateValues = { ...prevState };
                prevStateValues.pincode.value = value;
                prevStateValues.pincode.isValid = value != "" && true;
                return { ...prevStateValues };
              });
              setFormIsValid(true);
            }}
            isValid={inputValidate("pincode")}
          />

          <CButton
            label="Submit"
            action={() => {
              onSubmit();
            }}
          />
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

BookAPickupScreen.defaultProps = {
  initialValues: {
    material_id: {
      isValid: false,
      value: 0,
    },
    image: {
      isValid: false,
      value:
        "https://www.allianceplast.com/wp-content/uploads/no-image-1024x1024.png",
      
    },
    description: {
      isValid: false,
      value: "",
    },
    address: {
      isValid: false,
      value: "",
    },
    landmark: {
      isValid: false,
      value: "",
    },
    country: {
      isValid: false,
      value: 1,
    },
    state: {
      isValid: false,
      value: 0,
    },
    city: {
      isValid: false,
      value: "",
    },
    pincode: {
      isValid: false,
      value: 0,
    },
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    // borderColor: "grey",
    // borderWidth: 1,
  },
  viewStyle: {
    height: 120,
    flexDirection: "row",
    margin: 10,
  },

  imageContainer: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
    aspectRatio: 1,
    alignSelf: "flex-start",
  },
  imageBtn:{
    backgroundColor: "#0a6e3f",
  },
  spacer: {
    margin: 10,
  },
});
export default BookAPickupScreen;
