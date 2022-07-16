import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Spacer from "./Spacer";
import { withNavigation } from "react-navigation";

const PickupCard = ({ item, navigation }) => {
  return (
    <View style={styles.card}>
      <Spacer>
        <View>
          <Text
            style={
              item.status != "Completed" ? styles.status : styles.completed
            }
          >
            {item.status}
          </Text>
          <Image
            source={{
              uri: item.image,
            }}
            style={styles.image}
          />
        </View>

        <View style={styles.subcard}>
          <Text style={styles.subcard_heading}>Pickup Scheduled</Text>
          <Text style={styles.subcard_content}>
            {item.pickup_date}, {item.pickup_time}
          </Text>
        </View>
        <View style={styles.subcard}>
          <Text style={styles.subcard_heading}>Pickup Address</Text>
          <Text style={styles.subcard_content}>
            {item.address.address}, {item.address.landmark}
            {"\n"}
            {item.address.city},{item.address.state}, {"\n"}
            {item.address.pincode}.
          </Text>
        </View>
        <View style={styles.subcard}>
          <Text style={styles.subcard_heading}>Pickup Agent</Text>
          <Text style={styles.subcard_content}>
            {item.agent.first_name} {item.agent.last_name},
            {item.agent.phone_number}
          </Text>
        </View>
        <View style={styles.buttonsView}>
          <TouchableOpacity style={styles.danger}>
            <Text style={styles.btnText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.success}
            onPress={() =>
              navigation.navigate("PickupDetails", { id: item })
            }
          >
            <Text style={styles.btnText}>View</Text>
          </TouchableOpacity>
        </View>
      </Spacer>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    border: 1,
    borderColor: "#0a6e3f",
    borderWidth: 1,
    margin: 2,
    borderRadius: 4,
  },
  image: {
    height: 180,
    aspectRatio: 1,
    marginBottom: 5,
  },
  subcard: {
    marginTop: 10,
    border: 1,
    borderColor: "grey",
    borderWidth: 1,
    padding: 4,
    borderRadius: 4,
    width: 180,
  },
  subcard_heading: {
    top: -11,
    left: 18,
    zIndex: 999,
    backgroundColor: "#fff",
    position: "absolute",
    fontWeight: "bold",
    fontSize: 12,
    color: "#0a6e3f",
  },
  subcard_content: {
    fontSize: 11,
    padding: 1,
  },
  status: {
    bottom: 0,
    right: 0,
    zIndex: 999,
    backgroundColor: "#FF5B5C",
    position: "absolute",
    fontWeight: "bold",
    fontSize: 12,
    color: "#FFF",
    padding: 4,
  },
  completed: {
    bottom: 0,
    right: 0,
    zIndex: 999,
    backgroundColor: "#0a6e3f",
    position: "absolute",
    fontWeight: "bold",
    fontSize: 12,
    color: "#FFF",
    padding: 4,
  },
  buttonsView: {
    flex: 1,
    flexDirection: "row",
  },
  danger: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FF5B5C",
    padding: 1,
    margin: 1,
  },
  success: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#006837",
    padding: 1,
    margin: 1,
  },
  btnText: {
    color: "#fff",
  },
});

export default withNavigation(PickupCard); //injecting directly navigation to child component
