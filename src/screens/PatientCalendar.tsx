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

      <View className="flex-col px-10">
        <TodaysPatientInfo />
        <View className="flex-col">
          <Text className="pl-1 text-orange-400"> Próximos 6 dias: </Text>
          <View className="h-[400px]">
            <ScrollView className="h-full" showsVerticalScrollIndicator={false}>
              <NextDayOfServiceAndPatient />
              <NextDayOfServiceAndPatient />
              <NextDayOfServiceAndPatient />
              <NextDayOfServiceAndPatient />
              <NextDayOfServiceAndPatient />
              <NextDayOfServiceAndPatient />
              <NextDayOfServiceAndPatient />
              <NextDayOfServiceAndPatient />
              <NextDayOfServiceAndPatient />
              <NextDayOfServiceAndPatient />
              <NextDayOfServiceAndPatient />
              <NextDayOfServiceAndPatient />
              <NextDayOfServiceAndPatient />
              <NextDayOfServiceAndPatient />
              <NextDayOfServiceAndPatient />
              <NextDayOfServiceAndPatient />
            </ScrollView>
          </View>
        </View>


        <View className="flex-col mt-12 mb-9">
          <TouchableOpacity onPress={() => setShowModal(true)}>
            <ButtonComp
              title="Definir Agenda de Atendimento"
            />
          </TouchableOpacity>
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
            <View className="flex flex-col justify-center items-center h-full bg-indigo-600 bg-opacity-50">
              <TouchableWithoutFeedback onPress={handleModalPress}>
                <View className="bg-white p-6 rounded-lg w-11/12 md:w-3/4 lg:w-1/2">
                  <Text className="text-lg font-bold mb-4">Contact Us</Text>

                  <View className="mb-4">
                    <Text className="text-lg">Name</Text>
                    <TextInput className="border border-gray-300 rounded p-2" />
                  </View>

                  <View className="mb-4">
                    <Text className="text-lg">Email</Text>
                    <TextInput className="border border-gray-300 rounded p-2" />
                  </View>

                  <View className="flex justify-end">
                    <TouchableOpacity onPress={() => setShowModal(false)}>
                      <Text className="text-blue-500 mr-4">Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setShowModal(false)}>
                      <Text className="text-blue-500">Save</Text>
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