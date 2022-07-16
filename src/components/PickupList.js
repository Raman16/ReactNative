import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import PickupCard from "./PickupCard";
import Spacer from "./Spacer";

const PickupList = ({ pickup_list, title }) => {
  
  //{navigation}
  return (
    <View>
      <Spacer>
        <Text style={styles.title}>{title}</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={pickup_list}
          keyExtractor={(results) => results.pick_id}
          renderItem={({ item }) => {
            return <PickupCard item={item} />;
          }}
        />
      </Spacer>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 15,
    fontWeight: "bold",
    margin: 2,
  },
});

export default PickupList;
