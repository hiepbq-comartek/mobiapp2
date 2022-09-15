import React, {useState, useReducer} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  Modal,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import {style} from '../../style/styleaddpost';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {fa0, faComment, faXmark} from '@fortawesome/free-solid-svg-icons';
import {faImages} from '@fortawesome/free-regular-svg-icons';
import {init} from '../reducerscreentab/init';
import {reduce} from '../reducerscreentab/reduce';
import {AddPost, SetImg, SetChangtext} from '../reducerscreentab/action';
import FilePiker from 'react-native-document-picker';
import {types} from '@babel/core';
function Post({setpost, setfiledata, filedata}) {
  // const [Textinput, setTextinput] = useState(false);
  const [state, dispath] = useReducer(reduce, init);
  const handleFilePicker = async () => {
    try {
      const response = await FilePiker.pick({
        // type: [DocumentPicker.types.images],
        presentationStyle: 'fullScreen',
        allowMultiSelection: true,
      });
      setfiledata(response);
    } catch (error) {}
  };
  const handleadd = () => {
    dispath(AddPost);
    SetChangtext('');
  };
  return (
    <Modal animationType="slide" transparent={true} onRequestClose={() => {}}>
      <View style={style.container}>
        <View>
          <TouchableOpacity
            onPress={() => setpost(false)}
            style={{marginTop: 40, marginLeft: 20}}
            activeOpacity={0.9}>
            <FontAwesomeIcon icon={faXmark} size={24} color="#0ef08c" />
          </TouchableOpacity>
        </View>
        <View style={style.TextView}>
          <View style={{flexDirection: 'row', marginTop: 20}}>
            <Text style={{color: '#0ef08c', fontSize: 28}}>Đăng bài</Text>
          </View>
          <TouchableOpacity onPress={() => setpost(false)}>
            <View style={style.view}>
              {/* {Textinput && <Text style={style.checforcus}>Đăng bài</Text>} */}
            </View>
          </TouchableOpacity>
          <TextInput
            // onFocus={!Textinput}
            style={style.Textuser}
            onChangeText={item => dispath(SetChangtext(item))}
          />

          <TouchableOpacity
            onPress={() => handleFilePicker()}
            style={style.imageuser}>
            <View>
              <View>
                <FontAwesomeIcon
                  style={{
                    height: 320,
                    width: 480,
                  }}
                  icon={faImages}
                  size={24}
                  color="#0ef08c"
                />
              </View>
            </View>
            {filedata ? (
              filedata.map((file, index) => (
                <Image style={{}} source={{uri: file.uri}} />
              ))
            ) : (
              <></>
            )}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleadd()}
            activeOpacity={0.9}
            style={style.buttonadd}>
            <Text style={{color: '#0ef08c'}}>Đăng bài</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

export default Post;
