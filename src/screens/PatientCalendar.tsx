import { FormControl, Input, Modal, Button } from "native-base";
import { Button as ButtonComp } from "@components/Button";
import { useState } from "react";

import { TodaysPatientInfo } from "@components/TodaysPatientInfo";
import { NextDayOfServiceAndPatient } from "@components/NextDayOfServiceAndPatient";
import { PageHeader } from "@components/PageHeader";
import { DescPageHeader } from "@components/DescPageHeader";
import { ScrollView, Text, View } from "react-native";

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
          {/* Modal */}
          <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
            <Modal.Content maxWidth="400px">
              <Modal.CloseButton />
              <Modal.Header>Contact Us</Modal.Header>
              <Modal.Body>
                <FormControl>
                  <FormControl.Label>Name</FormControl.Label>
                  <Input />
                </FormControl>
                <FormControl mt="3">
                  <FormControl.Label>Email</FormControl.Label>
                  <Input />
                </FormControl>
              </Modal.Body>
              <Modal.Footer>
                <Button.Group space={2}>
                  <Button variant="ghost" colorScheme="blueGray" onPress={() => {
                    setShowModal(false);
                  }}>
                    Cancel
                  </Button>
                  <Button onPress={() => {
                    setShowModal(false);
                  }}>
                    Save
                  </Button>
                </Button.Group>
              </Modal.Footer>
            </Modal.Content>
          </Modal>
        </View>
      </View>

    </View>
  )
}