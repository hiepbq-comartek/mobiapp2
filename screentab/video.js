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
import Searchauthor from '../component/searchauthor';
import Reduce from '../reducer/reduce';
import {init} from '../reducer/init';
import {SetAuthor} from '../reducer/output';
export default function Search() {
  const alert = newtext => {
    return Alert.alert(newtext);
  };
  const [authorsearch, setauthorsearch] = useState(false);
  const [state, dispatch] = useReducer(Reduce, init);
  const {setauthor} = state;
  return (
    <SafeAreaView
      style={{
        flex: 1,
        width: '100%',
        paddingBottom: 20,
        backgroundColor: '#000',
      }}>
      <View
        style={{
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: '#0ef08c',
            fontSize: 20,
          }}>
          Video
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 12,
          marginBottom: 20,
        }}>
        <TouchableOpacity>
          <Text
            style={{
              color: '#0ef08c',
              marginLeft: 24,
              marginRight: 24,
              fontSize: 16,
            }}>
            Video đề xuất
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={{
              color: '#0ef08c',
              marginLeft: 120,
              marginRight: 20,
              fontSize: 16,
            }}>
            Video bạn bè
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView></ScrollView>
    </SafeAreaView>
  );
}
const style = StyleSheet.create({
  styleInput: {
    backgroundColor: '#ccc',
    width: 370,
    height: 32,
    borderRadius: 8,
    paddingLeft: 16,
    top: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  handlesearh: {
    width: 60,
    top: 28,
    left: 152,
    marginLeft: 10,
  },
});
