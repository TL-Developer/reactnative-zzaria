import React, {Component} from 'react';
import { Modal, Text, TouchableHighlight, View, Alert } from 'react-native';

class ModalExample extends Component {
  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <View style={{marginTop: 22}}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={false}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={{marginTop: 22}}>
            <Text>Hello World!</Text>
          </View>
        </Modal>
      </View>
    );
  }
}

export default Modal;
