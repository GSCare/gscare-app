import { Box, Flex, Heading } from "native-base";

interface Props {
  title: String
}

export function DescPageHeader({title}: Props) {
  return (
    <Flex direction="row" alignItems="center" pt={5}>
      <Box flex={1} borderBottomWidth={2} borderBottomColor="blue.300" ml={2} />
      <Heading mx={2} fontFamily="heading" fontSize="2xl" color='blue.400' maxWidth={264} noOfLines={1}>
        {title}
      </Heading> {/** definir um maximo de 20 caracteres */}
      <Box flex={4} borderBottomWidth={2} borderBottomColor="blue.300" mr={2} />
    </Flex>
  )
}