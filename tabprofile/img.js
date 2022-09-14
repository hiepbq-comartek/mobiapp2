import React from 'react';
import {
  Text,
  Image,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

export default function Img({navigation, route}) {
  console.log(route);
  return (
    <SafeAreaView style={{backgroundColor: 'black', height: 900}}>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => navigation.goBack()}
        style={{top: 0, left: 8, width: 360}}>
        {/* <Ionicons name="arrow-back" size={24} color="white" /> */}
      </TouchableOpacity>
      <View>
        <Image
          style={{
            width: 400,
            height: 200,
            top: 200,
          }}
          source={{
            uri: route.params.img,
          }}
        />
      </View>
    </SafeAreaView>
  );
}
