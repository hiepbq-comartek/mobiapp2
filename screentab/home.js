import React, {useReducer} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import {useState} from 'react';
import Startblock from './action/commentstart';
import Startmin from './action/commentstartmin';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import Reduce from '../reducer/reduce';
import {init} from '../reducer/init';
import {datas} from '../server/data';
import Commentuser from './action/commentuser';
import {faComment, faHeart} from '@fortawesome/free-regular-svg-icons';
import {style} from '../style/stylehome';
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
  const [post, setpost] = useState(false);
  const [filedata, setfiledata] = useState([]);
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
        {headerShown && <Startblock setpost={setpost} post={post} />}
        {!headerShown && (
          <Startmin
            setpost={setpost}
            post={post}
            setfiledata={setfiledata}
            filedata={filedata}
          />
        )}
        <ScrollView
          keyboardDismissMode={'on-drag'}
          onScroll={event => {
            const scrolling = event.nativeEvent.contentOffset.y;
            scrolling > 12 ? setHeaderShown(false) : setHeaderShown(true);
          }}>
          {datas ? (
            datas.map(data => (
              <ScrollView horizontal={true}>
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
                  <View style={style.container}>
                    <View style={style.view}>
                      <Image
                        style={style.avatar}
                        source={require('../accset/img/39013954-f5091c3a-43e6-11e8-9cac-37cf8e8c8e4e.jpeg')}
                      />
                      <View style={{marginTop: 8}}>
                        <TouchableOpacity
                          style={{width: 200}}
                          activeOpacity={0.2}
                          onPress={() => navigation.navigate('proauthor')}>
                          <Text style={style.nameuser}>{data.name}</Text>
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
                      onPress={() =>
                        navigation.navigate('img', {img: data.Img})
                      }>
                      <Image style={style.imgpost} source={{uri: data.Img}} />
                    </TouchableOpacity>
                    <View style={style.viewhandle}>
                      <TouchableOpacity>
                        <Text style={style.numberlike}>
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
                    <View style={style.viewspear}></View>
                    <Commentuser />
                  </View>
                </TouchableOpacity>
              </ScrollView>
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
