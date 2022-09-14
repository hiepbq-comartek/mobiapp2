import * as React from 'react';
import {
  Button,
  Text,
  TextInput,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {dataauthor} from '../server/dataauthor';

function FriendsStackScreen() {
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
          Tác giả đã theo dõi
        </Text>
      </View>
      <ScrollView>
        {dataauthor.map(data => (
          <View
            style={{
              height: 60,
              backgroundColor: '#161a1f',
              borderRadius: 16,
              marginTop: 8,
              marginLeft: 12,
              marginRight: 12,
              flexDirection: 'row',
            }}>
            <Image
              style={{width: 40, height: 40, borderRadius: 40, margin: 12}}
              source={require('../accset/img/39013954-f5091c3a-43e6-11e8-9cac-37cf8e8c8e4e.jpeg')}
            />
            <View style={{marginRight: 12, marginBottom: 12, marginTop: 12}}>
              <Text style={{color: '#0ef08c', fontSize: 16}}>{data.name}</Text>
              <Text style={{color: '#0ef08c', fontSize: 12}}>
                Đang hoạt động
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
const style = StyleSheet.create({
  friends: {
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 10,
    fontSize: 16,
  },
  blockfrend: {
    backgroundColor: '#ccc',
    marginBottom: 4,
    marginLeft: 20,
    marginRight: 20,
    height: 60,
    borderRadius: 8,
  },
  namefriend: {
    position: 'absolute',
    left: 40,
    fontSize: 16,
  },
  status: {
    position: 'absolute',
    left: 40,
    top: 16,
    fontSize: 12,
  },
});
export default FriendsStackScreen;
