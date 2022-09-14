import React from 'react';
import {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
// import { SimpleLineIcons } from "@expo/vector-icons";
import {dataauthor} from '../server/dataauthor';
export default function Searchauthor({setauthor}) {
  return (
    <View style={style.authors}>
      <ScrollView>
        {dataauthor
          .map(data => data.name)
          .filter(function checkAdult(setauthor) {
            return setauthor;
          })
          .map(data => {
            <View
              style={{
                flexDirection: 'row',
                width: 356,
                backgroundColor: '#ccc',
                borderRadius: 4,
              }}>
              <TouchableOpacity style={{paddingLeft: 40}}>
                <Text>{data.name}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{left: 200}}>
                {/* <SimpleLineIcons name="user-follow" size={16} color="black" /> */}
              </TouchableOpacity>
            </View>;
          })}
      </ScrollView>
    </View>
  );
}
const style = StyleSheet.create({
  textcheckmail: {
    marginLeft: 32,
    color: 'red',
  },
  authors: {
    marginTop: 32,
    width: 360,
    marginLeft: 16,
    height: 160,
    borderRadius: 8,
  },
});
