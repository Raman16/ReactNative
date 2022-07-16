import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Spacer from "./Spacer";

const PickupDetails = ({ navigation }) => {
  const id = navigation.getParam("id");
  const item = id;

  return (
    <View style={styles.card}>
      <Text style={styles.title}>
        Computers and telecommunications equipment
      </Text>
      <View>
        <Text
          style={item.status != "Completed" ? styles.status : styles.completed}
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
        <Text style={styles.subcard_heading}>Customer Message</Text>
        <Text style={styles.subcard_content}>{item.message}</Text>
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
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    border: 4,
    borderColor: "#0a6e3f",
    borderWidth: 1,
    margin: 10,
    borderRadius: 4,
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    backgroundColor:"green",
    color:"#fff",
    padding:2
  },
  image: {
    height: 300,
    marginBottom: 5,
  },
  subcard: {
    margin: 10,
    border: 1,
    borderColor: "grey",
    borderWidth: 1,
    padding: 4,
    borderRadius: 4,
  },
  subcard_heading: {
    top: -11,
    left: 18,
    zIndex: 999,
    backgroundColor: "#fff",
    position: "absolute",
    fontWeight: "bold",
    fontSize: 11,
    color: "#0a6e3f",
    borderRadius: 4,
    padding: 1,
  },
  subcard_content: {
    fontSize: 12,
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
});

export default PickupDetails;
