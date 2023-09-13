import { HomeHeader } from "@components/HomeHeader";
import { UserPhoto } from "@components/UserPhoto";
import { Center, FormControl, HStack, Icon, Input, Modal, Text, VStack, Button } from "native-base";
import { MaterialIcons } from '@expo/vector-icons'
import { Button as ButtonComp } from "@components/Button";
import { useState } from "react";

import cartoonHomem from '@assets/cartoonHomen.png'
import cartoonMulher from '@assets/cartoonMulher.png'

export function PatientCalendar() {
  const [showModal, setShowModal] = useState(false);

  return (
    <VStack flex={1}>
      <HomeHeader />
      <VStack justifyContent="space-between" flex={1}>
        <HStack py={4}>
          <Center flex={1}>
            <Text py={2} color="blue.400" fontWeight="bold" fontSize="lg">
              Data: 01/12
            </Text>
            <UserPhoto 
              size={33} 
              source={cartoonHomem}
              alt="Imagem do usuário ou empresa"
              borderWidth={1}
              borderColor="blue.200"
            />
            <VStack alignItems="center">
              <Text color="blue.400" fontSize="md" fontFamily="mono">
                Nome do paciente
              </Text>
              <Text color="blue.400" fontSize="md" fontFamily="mono">
                idade
              </Text>
              <Text color="blue.400" fontSize="md" fontFamily="mono">
                endereco
              </Text>
            </VStack>
          </Center>
        </HStack>

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