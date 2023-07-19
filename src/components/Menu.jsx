import { Link } from 'react-router-dom'
import { ButtonGroup, Button } from '@chakra-ui/react'

function CustomButton(props) {
  return(
    <Button 
      as={Link} to={props.to}
      h="100%"
      w="140px"
      rounded="0"
      bg="transparent"
    >
      {props.children}
    </Button>
  )
}

export default function Menu() {
  return(
    <ButtonGroup 
      borderBottom="2px"
      borderColor="gray.300"
      w="100vw"
      h="10vh"
      p="0 10px"
    >
      <CustomButton to="/">Home</CustomButton>
      <CustomButton to="/tasks">Tareas</CustomButton>
      <CustomButton to="/about">Sobre Nosotros</CustomButton>
    </ButtonGroup>
  )
}