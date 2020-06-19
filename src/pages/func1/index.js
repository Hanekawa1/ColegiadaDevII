import React, { useState } from 'react';
import Camera from '../../components/camera';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { View, ImageBackground, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles';

function Func1() {
  const [isCameraVisible, setIsCameraVisible] = useState(false);
  const [photo, setPhoto] = useState(null);

  function onChangePhoto(newPhoto) {
    setPhoto(newPhoto);
    setIsCameraVisible(false);
  }

  function onCloseCamera() {
    setIsCameraVisible(false);
  }

  function limparFoto() {
    setPhoto(null);
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.containerTexto}>
          <Text style={styles.texto}>
            Tire uma foto apertando o botão da câmera. Se não gostar, apague a
            foto com o botão da setinha. Envie por email pelo botão do
            aviãozinho.
          </Text>
        </View>

        <View style={styles.photo}>
          <ImageBackground
            style={{ width: '100%', height: '100%' }}
            source={{ uri: photo }}
          />
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setIsCameraVisible(true);
            }}>
            <Icon name="camera-alt" size={40} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              limparFoto();
            }}>
            <Icon name="undo" size={40} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              limparFoto();
            }}>
            <Icon name="send" size={40} />
          </TouchableOpacity>
          <Camera
            isVisible={isCameraVisible}
            onCloseCamera={onCloseCamera}
            onChangePhoto={onChangePhoto}
          />
        </View>
      </View>
    </>
  );
}

export default Func1;
