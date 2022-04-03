import { StyleSheet, View } from 'react-native';
import { Modal, Button, ScrollView, VStack, Text, Center } from 'native-base';
import React, { useEffect } from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

const ModalError = ({ message }) => {
  //Modal
  const [modalVisible, setModalVisible] = React.useState(false);
  const [size, setSize] = React.useState('md');
  useEffect(() => {
    console.log(message);
    if (message) {
      setModalVisible(true);
    } else {
      setModalVisible(false);
    }
  }, [message]);
  const handleSizeClick = newSize => {
    setSize(newSize);
    setModalVisible(!modalVisible);
  };
  //Modal
  return (
    <View>
      <Modal isOpen={modalVisible} onClose={setModalVisible} size={size}>
        <Modal.Content maxH="212">
          <Modal.CloseButton />
          <Modal.Header>
            <Center>
              <Icon color={'red'} size={80} name="closecircle" />
            </Center>
          </Modal.Header>
          <Modal.Body>
            <ScrollView>
              <Center>
                <Text fontSize={'xl'} style={styles.message}>
                  {message}
                </Text>
              </Center>
            </ScrollView>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                onPress={() => {
                  setModalVisible(false);
                }}>
                OK
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </View>
  );
};

export default ModalError;

const styles = StyleSheet.create({
  message: {},
});
