import React, { useState } from 'react';
import { View, StyleSheet, Modal, TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 


export default function ModaWindow({ Icon, Component } ){
 
  const [modalVisible, setModalVisible] = useState(false);

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {setModalVisible(true)}}
        style={{ flexDirection: 'row', alignItems: 'center' }}
      >
      <Text> {Icon} </Text>
      </TouchableOpacity>
      <Modal
        animationType='fade'
        transparent={true}
        visible={modalVisible}
        onDismiss={closeModal}
      >
        <View style={styles.modalWrapper}>
          <View style={styles.modalContainer}>
            <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
              <Ionicons name="close" size={30} color="white" />
            </TouchableOpacity>
            { Component }
          </View>
          <TouchableOpacity
            onPress={closeModal}
            style={styles.overlay}
          />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 55,
  },
  modalWrapper: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
    alignItems: 'flex-end',
  },
  modalContainer: {
    position: 'absolute',
    top: '40%',
    alignSelf:'center',
    justifyContent: 'center',
    width: '40%',
    backgroundColor: 'transparent',
    alignItems: 'center',
    paddingTop: 50,
    zIndex: 2,
    },
  closeButton: {
    position: 'absolute',
     top: 10,
     right: -15,
     alignSelf: 'flex-end',
  },
  overlay: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  },
});
