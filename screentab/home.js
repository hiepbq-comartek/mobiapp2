import React, {useReducer} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
  SafeAreaView,
  TextInput,
  Modal,
} from 'react-native';
import {useState} from 'react';
import Startblock from './action/commentstart';
import Startmin from './action/commentstartmin';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import Reduce from '../reducer/reduce';
import {init} from '../reducer/init';
import {datas} from '../server/data';
import Commentuser from './action/commentuser';
import Search from './action/search';
import {faComment, faHeart} from '@fortawesome/free-regular-svg-icons';

function HomeStackScreen({navigation}) {
  const img =
    '../accset/img/39013954-f5091c3a-43e6-11e8-9cac-37cf8e8c8e4e.jpeg';
  const alert = text => {
    return Alert.alert(text);
  };
  const log = text => {
    return console.log(text);
  };
  const [headerShown, setHeaderShown] = useState(true);
  const [addpost, Setaddpost] = useState(false);
  const [state, dispatch] = useReducer(Reduce, init);
  const {checklike, setcomment} = state;
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        width: '100%',
        paddingBottom: 20,
        backgroundColor: '#000',
      }}>
      <View style={{position: 'relative', zIndex: -10}}>
        {headerShown && (
          <Startblock Setaddpost={Setaddpost} addpost={addpost} />
        )}
        {!headerShown && <Startmin Setaddpost={Setaddpost} addpost={addpost} />}
        <ScrollView
          onScroll={event => {
            const scrolling = event.nativeEvent.contentOffset.y;
            scrolling > 12 ? setHeaderShown(false) : setHeaderShown(true);
          }}>
          {datas ? (
            datas.map(data => (
              <TouchableOpacity
                key={data.id}
                activeOpacity={0.9}
                onPress={() =>
                  navigation.navigate('postuser', {
                    name: data.name,
                    titile: data.titile,
                    img: data.Img,
                  })
                }>
                <View
                  style={{
                    backgroundColor: '#161a1f',
                    borderRadius: 16,
                    marginBottom: 12,
                    marginLeft: 20,
                    marginRight: 20,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginLeft: 10,
                      marginRight: 10,
                      flexWrap: 'wrap',
                    }}>
                    <Image
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: 40,
                        margin: 8,
                      }}
                      source={require('../accset/img/39013954-f5091c3a-43e6-11e8-9cac-37cf8e8c8e4e.jpeg')}
                    />
                    <View style={{marginTop: 8}}>
                      <TouchableOpacity
                        style={{width: 200}}
                        activeOpacity={0.2}
                        onPress={() => navigation.navigate('proauthor')}>
                        <Text
                          style={{
                            fontSize: 20,
                            marginBottom: 4,
                            color: '#0ef08c',
                          }}>
                          {data.name}
                        </Text>
                      </TouchableOpacity>
                      <Text style={{fontSize: 12, color: '#0ef08c'}}>
                        Đã đăng {data.time} giờ trước
                      </Text>
                    </View>
                  </View>
                  <View>
                    <Text style={{left: 12, color: '#0ef08c'}}>
                      {data.titile}
                    </Text>
                  </View>
                  <TouchableOpacity
                    activeOpacity={0.95}
                    onPress={() => navigation.navigate('img', {img: data.Img})}>
                    <Image
                      style={{
                        width: 340,
                        height: 220,
                        marginTop: 10,
                        marginLeft: 10,
                        marginRight: 10,
                      }}
                      source={{
                        uri: data.Img,
                      }}
                    />
                  </TouchableOpacity>
                  <View
                    style={{
                      flexDirection: 'row',
                      width: 320,
                      marginLeft: 20,
                      marginRight: 20,
                      top: 12,
                    }}>
                    <TouchableOpacity>
                      <Text
                        style={{
                          marginLeft: 10,
                          marginRight: 10,
                          fontSize: 20,
                          color: '#0ef08c',
                        }}>
                        {data.numlike}{' '}
                        <FontAwesomeIcon
                          icon={faHeart}
                          size={16}
                          color="#0ef08c"
                        />
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Text style={{fontSize: 20, color: '#0ef08c'}}>
                        10{' '}
                        <FontAwesomeIcon
                          icon={faComment}
                          size={16}
                          color="#0ef08c"
                        />
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      marginBottom: 16,
                      marginTop: 20,
                      flexDirection: 'row',
                      marginLeft: 24,
                    }}></View>
                  <Commentuser />
                </View>
              </TouchableOpacity>
            ))
          ) : (
            <View></View>
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

export default HomeStackScreen;
