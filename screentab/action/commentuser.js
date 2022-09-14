import * as React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
// import { AntDesign } from "@expo/vector-icons";

export default function Commentuser() {
  return (
    <>
      <View
        style={{
          maxHeight: 200,
          marginBottom: 40,
          marginLeft: 8,
          marginRight: 8,
        }}>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#000',
            borderRadius: 12,
          }}>
          <View>
            <Image
              style={{
                width: 40,
                height: 40,
                borderRadius: 40,
                margin: 10,
              }}
              source={require('../../accset/img/39013954-f5091c3a-43e6-11e8-9cac-37cf8e8c8e4e.jpeg')}
            />
          </View>
          <View>
            <Text style={{top: 10, fontSize: 16, color: '#0ef08c'}}>
              Quang Lam
            </Text>
            <View style={{top: 16}}>
              <Text style={{fontSize: 12, color: '#0ef08c'}}>Very Good</Text>
            </View>
            <TouchableOpacity
              activeOpacity={0.9}
              style={{right: -220, top: -16}}>
              {/* <AntDesign name="hearto" size={24} color="#0ef08c" /> */}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}
