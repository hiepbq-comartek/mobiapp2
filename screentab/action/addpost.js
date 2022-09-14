import React, {useState, useReducer} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faImages} from '@fortawesome/free-solid-svg-icons';
function Addpost() {
  return (
    <View
      style={{
        marginTop: 20,
        marginBottom: 8,
        height: 200,
        zIndex: 10,
        marginLeft: 8,
        flexWrap: 'wrap',
      }}>
      <View style={{width: '100%', height: 32}}>
        <TextInput
          style={{
            fontSize: 20,
            marginTop: 4,
            paddingLeft: 16,
            borderRadius: 16,
          }}
        />
      </View>
      <View style={{width: '100%', height: 168, flexDirection: 'row'}}>
        <View
          style={{
            width: '90%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity>
            <Text style={{color: '#0ef08c'}}>
              <FontAwesomeIcon icon={faImages} size={16} color="#0ef08c" />
            </Text>
          </TouchableOpacity>
          <Image />
        </View>
        <View style={{flexWrap: 'wrap'}}>
          <TouchableOpacity
            style={{
              width: 32,
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: '#0ef08c'}}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
export default Addpost;
