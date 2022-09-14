import React, { useState, useReducer } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
  SafeAreaView,
  ScrollView,
  Image
} from "react-native";
function Notification(){
    return(
        <View style={{marginTop:20,marginBottom:8,height:100,zIndex:10,marginLeft:8,flexDirection:'row'}}>
            <Text style={{color:'#0ef08c',margin:4}}>Thông báo:</Text>
                <ScrollView>
                <View style={{width:'72%',flexDirection:'row'}}>
                    <View style={{width:232,flexDirection:'row',backgroundColor:'#000',height:20,paddingLeft:10,borderRadius:20}}>
                     <Image style={{width:20,height:20,borderRadius:20}} source={require('../../accset/img/39013954-f5091c3a-43e6-11e8-9cac-37cf8e8c8e4e.jpeg')}/>   
                     <Text style={{color:'#0ef08c',margin:2}}>Nganng đã thích ảnh của bạn</Text>
                    </View>
                </View>
                </ScrollView>
        </View>
    )
}
export default Notification