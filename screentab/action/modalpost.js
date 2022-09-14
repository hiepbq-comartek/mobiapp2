import React, {useState} from 'react';
import {useReducer} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  SafeAreaView,
  Modal,
} from 'react-native';
import Reduce from '../reducer/reduce';
import {init} from '../reducer/init';
import {SetPost, AddPostuse, AddImg} from '../reducer/output';
function modalpost({Setaddpost, addpost}) {
  const [state, dispatch] = useReducer(Reduce, init);
  return (
    <SafeAreaView>
      <Modal>
        <View></View>
      </Modal>
    </SafeAreaView>
  );
}
const style = StyleSheet.create({
  addpostblock: {
    position: 'absolute',
    backgroundColor: '#ccc',
    height: 1000,
    width: 390,
    zIndex: 9999,
  },
  textaddpost: {
    textAlign: 'center',
    marginTop: 60,
    marginBottom: 10,
    fontSize: 24,
  },
  buttonaddpost: {
    position: 'absolute',
    right: 20,
    top: 60,
    backgroundColor: '#fff',
    width: 52,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1da1f2',
    borderRadius: 4,
  },
  buttonaddposts: {
    position: 'absolute',
    left: 4,
    top: 60,
    width: 52,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  inputuser: {
    marginRight: 10,
    marginLeft: 10,
    width: 370,
    height: 32,
    paddingLeft: 10,
  },
  handleuser: {
    alignItems: 'center',
    width: 390,
  },
});
export default modalpost;
