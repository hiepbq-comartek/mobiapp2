import React, {useReducer} from 'react';
import {Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {datas} from '../../server/data';
import Commentuser from '../action/commentuser';
import {faComment, faHeart} from '@fortawesome/free-regular-svg-icons';
import {style} from '../../style/stylehome';
import {useNavigation} from '@react-navigation/native';
import Newsfeeduser from './newsfeeduser';
export default Newsfeed = () => {
  const navigation = useNavigation();
  return (
    <>
      {datas ? (
        datas.map(data =>
          data.checkfollow ? (
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
                      source={require('../../accset/img/39013954-f5091c3a-43e6-11e8-9cac-37cf8e8c8e4e.jpeg')}
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
                    onPress={() => navigation.navigate('img', {img: data.Img})}>
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
          ) : (
            <></>
          ),
        )
      ) : (
        <View></View>
      )}
    </>
  );
};
