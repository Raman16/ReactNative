import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

import SigninScreen from "./src/userscreens/SigninScreen";
import BookAPickupScreen from "./src/userscreens/BookAPickupScreen";
import PickupListScreen from "./src/userscreens/PickupListScreen";
import PickupDetails from "./src/components/PickupDetails";

const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    signup: SigninScreen,
  }),
  mainFlow: createBottomTabNavigator({
    BookAPickup: createStackNavigator({
      BookAPickup:BookAPickupScreen
    }),
    PickupList: createStackNavigator({
      PickupList:PickupListScreen,
      PickupDetails:PickupDetails
    }),
  }),
});
export default createAppContainer(switchNavigator);
