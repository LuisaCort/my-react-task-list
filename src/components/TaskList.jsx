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
  Flex
} from "@chakra-ui/react"
import { AddIcon } from "@chakra-ui/icons"

import Task from "./Task"

function TaskContainer(props){
  return(
    <VStack
      p="10px"
      m="10px"
      borderRadius="20px"
      bg="gray.100"
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
            />
            <FormHelperText>Nombre de la tarea</FormHelperText>
        </TaskContainer>
        <TaskContainer>
          <FormLabel>Descripción</FormLabel>
          <Input 
            {...register("desc")}
            placeholder="Descripción"
            bg="white"
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
      <Flex h="90vh" w="70vw" align="start" 
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