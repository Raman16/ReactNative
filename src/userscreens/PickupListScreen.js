import React from "react";
import { SafeAreaView } from "react-navigation";
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Text,
} from "react-native";
import Spacer from "../components/Spacer";
import PickupList from "../components/PickupList";
const user_pickups = {
  pickup_list: [
    {
      pick_id: 1,
      material_type_id: "2",
      material_name: "Computers and telecommunications equipment",
      message: "old laptop screen broken",
      pickup_date: "20-06-2022",
      pickup_time: "11:06 am",
      status: "InProgress",
      address: {
        address_id: 1,
        address: "#531, Mylargadda",
        land_mark: "Bank Of Baroda",
        city: "Secunderbad",
        country_id: "1",
        country: "India",
        state: "Andhra Pradesh",
        state_id: "1",
        pincode: "500061",
        address_type: "1",
      },
      agent: {
        id: 6,
        username: null,
        first_name: "Sharan",
        last_name: "Kumar",
        email: null,
        emailVerifiedAt: null,
        phone_number: "9849944622",
        country_code: "+91",
        image: "",
        status: "1",
        role: [
          {
            role_id: 3,
            role: "agent",
          },
        ],
        createdAt: "3 weeks ago",
      },
      image:
        "https://ew-pot.com/scrap_collector/public/storage/user_scraps/SCRAP1_1655618855.png",
      created_at: "2022-06-19 06:07:34",
    },
    {
      pick_id: 2,
      material_type_id: "1",
      material_name: "Fridges, freezers and other cooling equipment",
      message: "old fridge",
      pickup_date: "20-06-2022",
      pickup_time: "12:06 pm",
      status: "Completed",
      address: {
        address_id: 2,
        address: "#428",
        land_mark: "Near P.S",
        city: "Hyderabad",
        country_id: "1",
        country: "India",
        state: "Telangana",
        state_id: "4",
        pincode: "506001",
        address_type: "1",
      },
      agent: {
        id: 6,
        username: null,
        first_name: "Sharan",
        last_name: "Kumar",
        email: null,
        emailVerifiedAt: null,
        phone_number: "9849944622",
        image: "",
        country_code: "+91",
        status: "1",
        role: [
          {
            role_id: 3,
            role: "agent",
          },
        ],
        createdAt: "3 weeks ago",
      },
      image:
        "https://www.allianceplast.com/wp-content/uploads/no-image-1024x1024.png",
      created_at: "2022-06-19 06:08:36",
    },
  ],
};
const PickupListScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.subcontainer}>
          <PickupList
            pickup_list={user_pickups.pickup_list}
            title="Fridges, freezers and other cooling equipments"
          />
        </View>
        <View style={styles.subcontainer}>
          <PickupList
            pickup_list={user_pickups.pickup_list}
            title="Computers and telecommunications equipment"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
  },
  subcontainer: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    width: 160,
    height: 140,
    borderRadius: 4,
    marginBottom: 5,
  },
  name: {
    fontWeight: "bold",
  },
});
export default PickupListScreen;
