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
function Search(){
    return(
        <View style={{marginTop:20,marginBottom:8,height:24,zIndex:10,marginLeft:8,flexDirection:'row'}}>
            <TextInput style={{backgroundColor:'#161a1f',width:'70%',color:'#0ef08c',paddingLeft:16,height:24,borderRadius:16}} />
            <TouchableOpacity><Text style={{color:'#0ef08c',margin:4}}>Tìm kiếm</Text></TouchableOpacity>
        </View>
    )
}
export default Search