import { StyleSheet, View } from 'react-native';
import { Modal, Button, ScrollView, Text, Center } from 'native-base';
import React, { useEffect } from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

const ModalSuccess = ({ message }) => {
  //Modal
  const [modalVisible, setModalVisible] = React.useState(false);
  useEffect(() => {
    console.log(message);
    if (message) {
      setModalVisible(true);
    } else {
      setModalVisible(false);
    }
  }, [message]);
  //Modal
  return (
    <View>
      <Modal isOpen={modalVisible} onClose={setModalVisible} size={'md'}>
        <Modal.Content maxH="212">
          <Modal.CloseButton />
          <Modal.Header>
            <Center>
              <Icon color={'green'} size={80} name="checkcircle" />
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
                variant="ghost"
                colorScheme="blueGray"
                onPress={() => {
                  setModalVisible(false);
                }}>
                HOME
              </Button>
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

export default ModalSuccess;

const styles = StyleSheet.create({});
