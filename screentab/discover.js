import React, {useReducer, useEffect, useState} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
  SafeAreaView,
  Button,
} from 'react-native';
import {stylelike} from '../style/stylediscover';
import Reduce from '../reducer/reduce';
import {init} from '../reducer/init';
import {Checkfollow} from '../reducer/output';
import axios from 'axios';

function LikeStackScreen() {
  const [state, dispatch] = useReducer(Reduce, init);
  const {checkFollow} = state;
  const [data, setdata] = useState('');

  // const res = axios.get(
  //   'https://6323f15bbb2321cba9215166.mockapi.io/api/dicover',
  // );

  // console.log(res);
  const handle = () => {};

  useEffect(() => {
    fetch('https://6323f15bbb2321cba9215166.mockapi.io/api/dicover')
      .then(data => data.json())
      .then(data => setdata(data));
  }, []);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        width: '100%',
        paddingBottom: 20,
        backgroundColor: '#000',
      }}>
      <ScrollView>
        {data.length > 0 ? (
          data.map(data =>
            !data.checkfollow ? (
              <ScrollView>
                <View key={data.id} style={stylelike.view}>
                  <Image
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 40,
                      margin: 10,
                    }}
                    source={{uri: data.avatar}}
                  />
                  <Text style={stylelike.textname}>{data.name}</Text>
                  <Text style={{color: '#0ef08c'}}>{data.comment}</Text>
                  <View style={{top: -10, left: 280}}>
                    <TouchableOpacity
                      onPress={() => {
                        dispatch(Checkfollow(!checkFollow));
                      }}
                      activeOpacity={0.8}
                      style={stylelike.handlelike}></TouchableOpacity>
                  </View>
                  <Text style={stylelike.textstatus}>Đã đăng 5 giờ trước</Text>
                  <Text style={stylelike.textstatus_Block}>{data.titile}</Text>
                  <Image
                    style={{
                      height: 220,
                      marginTop: 10,
                      marginLeft: 10,
                      marginRight: 10,
                    }}
                    source={{uri: data.img}}
                  />
                </View>
              </ScrollView>
            ) : (
              <></>
            ),
          )
        ) : (
          <Text style={{color: 'red', marginTop: 100}}>Test</Text>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
export default LikeStackScreen;
