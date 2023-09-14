import { HomeHeader } from "@components/HomeHeader";
import { UserPhoto } from "@components/UserPhoto";
import { Center, FormControl, HStack, Icon, Input, Modal, Text, VStack, Button, Heading, Flex, Box } from "native-base";
import { MaterialIcons } from '@expo/vector-icons'
import { Button as ButtonComp } from "@components/Button";
import { useState } from "react";

import { TodaysPatientInfo } from "@components/TodaysPatientInfo";

export function PatientCalendar() {
  const [showModal, setShowModal] = useState(false);

  return (
    <VStack flex={1}>
      <HomeHeader />
      <Flex direction="row" alignItems="center" pt={5}>
        <Box flex={1} borderBottomWidth={2} borderBottomColor="blue.300" ml={2} />
        <Heading mx={2} fontFamily="heading" fontSize="2xl" color='blue.400' maxWidth={264} noOfLines={1}>
          Agenda de trabalho
        </Heading> {/** definir um maximo de 20 caracteres */}
        <Box flex={4} borderBottomWidth={2} borderBottomColor="blue.300" mr={2} />
      </Flex>
      <VStack justifyContent="space-between" flex={1}>
        <TodaysPatientInfo />

        <VStack>
          <HStack mt={2} bg="blue.100" mx={10} borderRadius={4} p={2} justifyContent="space-between">
            <Text color="blue.500" borderColor="blue.300" px={2} borderRightWidth={2}>
              01/01
            </Text>

            <Text color="blue.500">
              sr. jose afonso
            </Text>
            {/* <MaterialIcons name="visibility" /> */}
            <Center>
              <Icon 
                as={MaterialIcons}
                name="visibility"
                color="blue.500"
                size={5}
                mr={1}
              />
            </Center>
          </HStack>
          
          <HStack mt={2} bg="blue.100" mx={10} borderRadius={4} p={2} justifyContent="space-between">
            <Text color="blue.500" borderColor="blue.300" px={2} borderRightWidth={2}>
              01/01
            </Text>

            <Text color="blue.500">
              sr. jose afonso
            </Text>
            {/* <MaterialIcons name="visibility" /> */}
            <Center>
              <Icon 
                as={MaterialIcons}
                name="visibility"
                color="blue.500"
                size={5}
                mr={1}
              />
            </Center>
          </HStack>
          
          <HStack mt={2} bg="blue.100" mx={10} borderRadius={4} p={2} justifyContent="space-between">
            <Text color="blue.500" borderColor="blue.300" px={2} borderRightWidth={2}>
              01/01
            </Text>

            <Text color="blue.500">
              sr. jose afonso
            </Text>
            {/* <MaterialIcons name="visibility" /> */}
            <Center>
              <Icon 
                as={MaterialIcons}
                name="visibility"
                color="blue.500"
                size={5}
                mr={1}
              />
            </Center>
          </HStack>
        </VStack>

        
        <VStack px={10} mt={12} mb={9}>
          <ButtonComp 
            title="Definir Agenda de Atendimento"
            onPress={() => setShowModal(true)}
          />
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