import React, {useState, useReducer} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import Reduce from '../reducer/reduce';
import {init} from '../reducer/init';
import {SetAuthor} from '../reducer/output';
import {style} from '../style/stylevideo';
import Videofriend from './Videoscreen/Videofriend';
import Videooffer from './Videoscreen/videoOffer';
export default function Search() {
  const alert = newtext => {
    return Alert.alert(newtext);
  };
  const [videooffer, setvideooffer] = useState(true);
  const [authorsearch, setauthorsearch] = useState(false);
  const [state, dispatch] = useReducer(Reduce, init);
  const {setauthor} = state;
  return (
    <SafeAreaView style={style.View}>
      <View style={style.handlevideo}>
        <TouchableOpacity onPress={() => setvideooffer(true)}>
          <Text style={style.handleoffe}>Video đề xuất</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setvideooffer(false)}>
          <Text style={style.handlefiend}>Video bạn bè</Text>
        </TouchableOpacity>
        <Videofriend />
        <Videooffer />
      </View>
    </SafeAreaView>
  );
}
