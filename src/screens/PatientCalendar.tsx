import { HomeHeader } from "@components/HomeHeader";
import { UserPhoto } from "@components/UserPhoto";
import { Center, FormControl, HStack, Icon, Input, Modal, Text, VStack, Button, Heading, Flex, Box, ScrollView } from "native-base";
import { MaterialIcons } from '@expo/vector-icons'
import { Button as ButtonComp } from "@components/Button";
import { useState } from "react";

import { TodaysPatientInfo } from "@components/TodaysPatientInfo";
import { NextDayOfServiceAndPatient } from "@components/NextDayOfServiceAndPatient";
import { PageHeader } from "@components/PageHeader";
import { DescPageHeader } from "@components/DescPageHeader";

export function PatientCalendar() {
  const [showModal, setShowModal] = useState(false);

  return (
    <VStack flex={1}>
      <PageHeader title='Agenda de trabalho'/>
      
      <DescPageHeader title="Pacientes da semana"/>

      <VStack justifyContent="space-around" flex={1}  px={10}>
        <TodaysPatientInfo />
        <VStack>
          <Text pl={1} color="orange.400"> Próximos 6 dias: </Text>
          <ScrollView showsVerticalScrollIndicator={false} h="40">
            <NextDayOfServiceAndPatient />
            <NextDayOfServiceAndPatient />
            <NextDayOfServiceAndPatient />
            <NextDayOfServiceAndPatient />
            <NextDayOfServiceAndPatient />
            <NextDayOfServiceAndPatient />
          </ScrollView>
        </VStack>

        
        <VStack mt={12} mb={9}> 
          <ButtonComp 
            title="Definir Agenda de Atendimento"
            onPress={() => setShowModal(true)}
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
        </VStack>
      </VStack>
      
    </VStack>
  )
}