import * as React from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
  SafeAreaView,
  TextInput,
} from "react-native";
import { stylehome } from "../../style/stylehome";
import { useState } from "react";
function  Startblock({Setaddpost,addpost}){
    return(
      <>
        <View style={{flexDirection:'row',width:320,left:28,paddingBottom:4} }>
           <View style={{backgroundColor:'#161a1f',borderRadius:16,width:320,height:160}}>
           <View style={stylehome.projectuse}>
           <Image
            style={{ width: 60, height: 60, borderRadius: 40 }}
            source={require("../../accset/img/39013954-f5091c3a-43e6-11e8-9cac-37cf8e8c8e4e.jpeg")}
           />
           <View style={{top:-49,left:80}}>
           <Text style={{color:'#0ef08c'}}>Xin Chào Quang Hiệp</Text>
           <Text style={{top:12,color:'#0ef08c'}}>Hôm nay có 2 bài viết mới</Text>
        </View>
      </View>
           <View style={{top:-36}}>
           <TouchableOpacity
            activeOpacity={0.8}
            style={stylehome.addporst}
            onPress={()=>Setaddpost(!addpost)}
            >
            <Text style={{color:'#0ef08c'}}>Bạn đang nghĩ gì ?</Text>
           </TouchableOpacity>
           </View>
        </View>
        </View>
</>
    )
}
export default Startblock