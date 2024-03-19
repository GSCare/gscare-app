import { Button as ButtonComp } from "@components/Button";
import { useState } from "react";

import { TodaysPatientInfo } from "@components/TodaysPatientInfo";
import { NextDayOfServiceAndPatient } from "@components/NextDayOfServiceAndPatient";
import { PageHeader } from "@components/PageHeader";
import { DescPageHeader } from "@components/DescPageHeader";
import { Modal, ScrollView, Text, TextInput, TouchableOpacity, View, TouchableWithoutFeedback } from "react-native";

export function PatientCalendar() {
  const [showModal, setShowModal] = useState(false);
  const handleBackgroundPress = () => {
    setShowModal(false);
  };

  const handleModalPress = () => {
    // Faz nada, apenas nao deixa o modal fechar
  };

  return (
    <View className="flex-col flex-1">
      <PageHeader title='Agenda de trabalho' />

      <DescPageHeader title="Pacientes da semana" />

      <View className="flex-col justify-around px-10">
        <TodaysPatientInfo />
        <View className="flex-col">
          <Text className="pl-1 text-orange-400"> Próximos 6 dias: </Text>
          <ScrollView className="h-56" showsVerticalScrollIndicator={false}>
            <NextDayOfServiceAndPatient />
            <NextDayOfServiceAndPatient />
            <NextDayOfServiceAndPatient />
            <NextDayOfServiceAndPatient />
            <NextDayOfServiceAndPatient />
            <NextDayOfServiceAndPatient />
          </ScrollView>
        </View>


        <View className="flex-col mt-12 mb-9">
          <ButtonComp
            title="Definir Agenda de Atendimento"
          />

          <View className="flex: 1; justifyContent: center; alignItems: center">
            <TouchableOpacity onPress={() => setShowModal(true)}>
              <Text className="text-blue-500">Open Modal</Text>
            </TouchableOpacity>
          </View>

          {/* Modal */}
        </View>
      </View>

      {showModal && (
        <Modal
          transparent={true}
          visible={showModal}
          onRequestClose={() => setShowModal(false)}
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
                    <TouchableOpacity onPress={() => setShowModal(false)}>
                      <Text style={{ color: "blue" }}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setShowModal(false)}>
                      <Text style={{ color: "blue" }}>Save</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      )}
    </View>
  )
}