import { Text, VStack, Heading} from "@chakra-ui/react"

export default function Home() {
  return(
    <VStack direction="column" align="center" justify="center" h="90vh">
      <Heading size="4xl">my-react-task-list</Heading><br />
      <Text fontSize="3xl">Bienvenidos a mi aplicacion de lista de tareas</Text>
      <Heading size="2xl">Luisa Cortés</Heading>
    </VStack>
  )
}