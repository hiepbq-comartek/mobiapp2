import React, {useReducer} from 'react';
import {View, ScrollView, Alert, SafeAreaView} from 'react-native';
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
import Newsfeeduser from './Homescreeen/newsfeeduser';

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
          <Newsfeeduser />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

export default HomeStackScreen;
