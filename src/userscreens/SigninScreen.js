import React from 'react'
import { Text,View,Button } from 'react-native';

const SigninScreen = ({navigation}) => {
  
  return (
    <View>
      <Button onPress={()=>{navigation.navigate('BookAPickup')}} title="Book A Pickup" />
    </View>
  );

};
export default SigninScreen