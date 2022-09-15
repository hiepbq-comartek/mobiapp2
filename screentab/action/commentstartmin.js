import * as React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
  SafeAreaView,
  TextInput,
} from 'react-native';
import {useState} from 'react';
import Search from '../Homescreeen/search';
import Notification from '../Homescreeen/Notification';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBell, faPlus, faSearch} from '@fortawesome/free-solid-svg-icons';
import Post from '../Homescreeen/Post';
function Startmin({setpost, post, setfiledata, filedata}) {
  const [search, Setsearch] = useState(false);
  const [checkNotification, setcheckNotification] = useState(false);

  return (
    <View
      style={{
        marginBottom: 8,
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: '#161a1f',
        borderRadius: 16,
      }}>
      <View style={{width: '100%'}}>
        <View
          style={{
            backgroundColor: '#161a1f',
            borderRadius: 16,
            width: '100%',
            height: 48,
          }}>
          <View style={{flexDirection: 'row', left: 8, padding: 4}}>
            <Image
              style={{width: 40, height: 40, borderRadius: 40}}
              source={require('../../accset/img/39013954-f5091c3a-43e6-11e8-9cac-37cf8e8c8e4e.jpeg')}
            />
            <View style={{width: '48%', marginLeft: 10, height: 40}}>
              <View>
                <TouchableOpacity
                  onPress={() => setchecksearch(!checksearch)}
                  activeOpacity={0.8}></TouchableOpacity>
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={{margin: 8}}
                onPress={() => Setsearch(!search)}>
                <FontAwesomeIcon icon={faSearch} size={20} color="#0ef08c" />
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.8}
                style={{margin: 8}}
                onPress={() => {
                  setcheckNotification(!checkNotification);
                }}>
                <FontAwesomeIcon icon={faBell} size={20} color="#0ef08c" />
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.8}
                style={{
                  backgroundColor: '#0ef08c',
                  width: 28,
                  height: 28,
                  padding: 2,
                  margin: 6,
                }}
                onPress={() => setpost(!post)}>
                <FontAwesomeIcon icon={faPlus} size={24} color="#000" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      {search && <Search Setsearch={Setsearch} />}
      {checkNotification && (
        <Notification setcheckNotification={setcheckNotification} />
      )}
      {post && (
        <Post setpost={setpost} setfiledata={setfiledata} filedata={filedata} />
      )}
    </View>
  );
}
export default Startmin;
