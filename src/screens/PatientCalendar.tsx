import { Button as ButtonComp } from "@components/Button";
import { useState } from "react";

import { TodaysPatientInfo } from "@components/TodaysPatientInfo";
import { NextDayOfServiceAndPatient } from "@components/NextDayOfServiceAndPatient";
import { PageHeader } from "@components/PageHeader";
import { DescPageHeader } from "@components/DescPageHeader";
import { Modal, ScrollView, Text, TextInput, TouchableOpacity, View, TouchableWithoutFeedback  } from "react-native";

export function PatientCalendar() {
  const [showModal, setShowModal] = useState(false);

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
        {/* !!!  o modal fecha qunado clica em qualquer parte do modal, isso tem que ser corrigido
          permitir apenas que feche quando clique no backgroud do modal
         */}
          <TouchableWithoutFeedback onPress={() => setShowModal(false)}>

        {/* <View className="absolute top-0 bottom-0 left-0 right-0 bg-opacity-50 flex justify-center items-center"> */}
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0, 0, 0, 0.5)" }}>

          <View className="bg-white p-4 w-80 rounded-md">
            <Text className="text-lg font-bold mb-2">Contact Us</Text>

            <View className="mb-4">
              <Text className="text-sm">Name</Text>
              <TextInput className="border border-gray-300 p-2 rounded" />
            </View>

            <View className="mb-4">
              <Text className="text-sm">Email</Text>
              <TextInput className="border border-gray-300 p-2 rounded" />
            </View>

            <View className="flex-direction: row; justify-content: space-between">
              <TouchableOpacity onPress={() => setShowModal(false)}>
                <Text className="text-blue-500">Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setShowModal(false)}>
                <Text className="text-blue-500">Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        </TouchableWithoutFeedback>
        </Modal>
      )}
    </View>
  )
}