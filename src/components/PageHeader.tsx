import { Heading, VStack } from "native-base";

interface Props {
  title: String
}

export function PageHeader({title}: Props) {
  return (
    <VStack bg="blue.500" pt={16} pb={5} alignItems="center">
      <Heading color="gray.100" fontSize="lg">
        {title}
      </Heading>
    </VStack>
  )
}