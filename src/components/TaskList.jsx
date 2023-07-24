import { useTaskList } from "../hooks/useTaskList"
import { useForm } from "react-hook-form"
import { 
  HStack,
  VStack,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  IconButton,
  Flex,
  useColorModeValue
} from "@chakra-ui/react"
import { AddIcon } from "@chakra-ui/icons"

import Task from "./Task"

function TaskContainer(props){
  const cards_bg = useColorModeValue("gray.100", "gray.700")
  return(
    <VStack
      p="10px"
      m="10px"
      borderRadius="10px"
      bg={cards_bg}
    >
      {props.children}
    </VStack>
  )
}

const TaskList = () => {
  const [tasks, addTask, deleteTask, editTask] = useTaskList()
  const {
    register,
    handleSubmit,
    reset,
    formState: {errors}
  } = useForm()
  const handleAdd = data => {
    addTask(data)
    reset()
  }
  let components = []
  for(let i = 0; i < tasks.length; i++) components.push(
    <Task 
      key={tasks[i].id} 
      id={tasks[i].id} 
      name={tasks[i].name}
      desc={tasks[i].desc} 
      state={tasks[i].state} 
      onDelete={deleteTask}
      onEdit={editTask}
  />)
  return(
    <HStack>
      <FormControl as="form" 
        onSubmit={handleSubmit(handleAdd)}
        isInvalid={errors.name}
        w="fit-content"
        h="90vh"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <TaskContainer>
          <FormLabel>Nombre</FormLabel>
          <Input 
            {...register("name", {
              required: "Nombre requerido",
              minLength: {
                value: 3,
                message: "Nombre mínimo 3 caracteres"
              }
            })}        
            placeholder="Nombre"
            bg="white"
            color="black"
            _placeholder={{color: "grey"}}
          />
          <FormHelperText>Nombre de la tarea</FormHelperText>
        </TaskContainer>
        <TaskContainer>
          <FormLabel>Descripción</FormLabel>
          <Input 
            {...register("desc")}
            placeholder="Descripción"
            color="bg"
            bg="white"
            _placeholder={{color: "grey"}}
          />
          <FormHelperText>Descripción de la tarea</FormHelperText>
        </TaskContainer>
        <IconButton 
          type="submit" icon={<AddIcon/>}
          colorScheme="blue"
          size="lg"
        />
        <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
      </FormControl>
      <Flex h="90vh" w="100%" align="start" 
        overflowY="scroll"
        flexDirection="column"
        justifyContent="flex-start"
      >
        {components}
      </Flex>
    </HStack>
  )
}

export default TaskList