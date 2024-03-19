import React, { useState } from 'react';
import { Modal, Text, View, Button, TouchableWithoutFeedback, TextInput, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
export const AddModal = ({ visible, onClose, color }: any) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };
  const handleBackgroundPress = () => {
    setIsModalVisible(false);
  };

  const handleModalPress = () => {
    // Faz nada, apenas nao deixa o modal fechar
  };

  return (
    <View>

      <Modal
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => {
          toggleModal();
        }}
      >
        <TouchableWithoutFeedback onPress={handleBackgroundPress}>
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
            <TouchableWithoutFeedback onPress={handleModalPress}>
              <View style={{ backgroundColor: "white", padding: 20, borderRadius: 8, width: 300 }}>
                <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>Contact Us</Text>

                <View style={{ marginBottom: 10 }}>
                  <Text style={{ fontSize: 16 }}>Name</Text>
                  <TextInput style={{ borderWidth: 1, borderColor: "#ccc", borderRadius: 4, padding: 8 }} />
                </View>

                <View style={{ marginBottom: 10 }}>
                  <Text style={{ fontSize: 16 }}>Email</Text>
                  <TextInput style={{ borderWidth: 1, borderColor: "#ccc", borderRadius: 4, padding: 8 }} />
                </View>

                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                  <TouchableOpacity onPress={onClose}>
                    <Text style={{ color: "blue" }}>Cancel</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={onClose}>
                    <Text style={{ color: "blue" }}>Save</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <MaterialIcons
        name="add"
        size={32}
        color={color}
        onPress={toggleModal}
      />
    </View>
  );
};