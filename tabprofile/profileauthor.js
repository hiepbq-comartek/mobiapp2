import React from 'react';
import {
  Text,
  Image,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';

import Img from './img';

import {stylehome} from '../style/stylehome';

export default function Profileauthor({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{paddingBottom: 280}}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => navigation.goBack()}
          style={{top: 0, left: 8, width: 360}}>
          {/* <Ionicons name="arrow-back" size={24} color="black" /> */}
        </TouchableOpacity>
        <View>
          <View style={{alignItems: 'center', marginBottom: 40}}>
            <Image
              style={{height: 200, width: 376}}
              source={{
                uri: 'https://photo-cms-kienthuc.zadn.vn/zoom/800/uploaded/ctvquansu/2021_01_10/vn/khau-sung-thay-the-cho-tieu-lien-ak-huyen-thoai-cua-viet-nam-hinh-4.jpg',
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              position: 'absolute',
              top: 160,
              left: 140,
            }}>
            <Image
              style={{width: 80, height: 80, borderRadius: 40, margin: 10}}
              source={require('../accset/img/39013954-f5091c3a-43e6-11e8-9cac-37cf8e8c8e4e.jpeg')}
            />
          </View>
        </View>
        <View style={{alignItems: 'center'}}>
          <View style={{alignItems: 'center', top: 20, marginBottom: 20}}>
            <Text>Quang Hiệp</Text>
          </View>
        </View>
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            paddingLeft: 100,
          }}>
          <TouchableOpacity style={{fontSize: 20}}>
            <Text>Tất cả bài viết</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{padding: 12, paddingLeft: 40}}>
            {/* <SimpleLineIcons name="user-unfollow" size={18} color="black" /> */}
          </TouchableOpacity>
        </View>

        <View style={{alignItems: 'center'}}>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => navigation.navigate('postuser')}>
            <View
              style={{
                width: 360,
                backgroundColor: '#ccc',
                marginLeft: 8,
                borderRadius: 16,
                marginBottom: 12,
              }}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  style={{
                    maxWidth: 40,
                    maxHeight: 40,
                    borderRadius: 40,
                    margin: 10,
                  }}
                  source={require('../accset/img/39013954-f5091c3a-43e6-11e8-9cac-37cf8e8c8e4e.jpeg')}
                />
                <TouchableOpacity
                  activeOpacity={0.2}
                  onPress={() => navigation.navigate('Proauthor')}>
                  <Text style={{top: 10, fontSize: 16, left: 6, zIndex: 2}}>
                    Quang Hiệp
                  </Text>
                </TouchableOpacity>
                <Text style={{top: 32, left: -80, fontSize: 12}}>
                  Đã đăng 5 giờ trước
                </Text>
              </View>
              <View>
                <Text style={{left: 12}}>Luật giang hồ a chơi mã tấu</Text>
              </View>
              <TouchableOpacity
                activeOpacity={0.95}
                onPress={() => navigation.navigate('img')}>
                <Image
                  style={{
                    width: 340,
                    height: 220,
                    marginTop: 10,
                    marginLeft: 10,
                    marginRight: 10,
                  }}
                  source={{
                    uri: 'http://imgs.vietnamnet.vn/Images/vnn/2015/07/03/15/20150703150753-ak47.jpg',
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
                <Text style={{marginLeft: 10, marginRight: 10}}>
                  2{/* <Foundation name="heart" size={20} color="red" /> */}
                </Text>
                <Text style={{}}>
                  10
                  {/* <FontAwesome name="comment" size={20} color="red" /> */}
                </Text>
              </View>
              <View style={stylehome.boderpostbottom}></View>
              <View
                style={{
                  flexDirection: 'row',
                  width: 320,
                  marginLeft: 20,
                  marginRight: 20,
                  top: 12,
                }}>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={{marginLeft: 20, marginRight: 10}}>
                  {/* <AntDesign name="hearto" size={20} color="black" /> */}
                </TouchableOpacity>
              </View>
              <View
                style={{
                  marginBottom: 16,
                  marginTop: 20,
                  flexDirection: 'row',
                  marginLeft: 24,
                }}>
                <TextInput
                  style={{
                    backgroundColor: '#fff',
                    width: 260,
                    fontSize: 16,
                    height: 24,
                    borderRadius: 40,
                    paddingLeft: 16,
                    marginLeft: 4,
                  }}
                  placeholder="Bình luận của bạn"
                />
                <TouchableOpacity activeOpacity={0.8}>
                  <Text style={{marginLeft: 8, marginTop: 0}}>
                    {/* <Ionicons
                      name="add-circle-outline"
                      size={24}
                      color="black"
                    /> */}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
