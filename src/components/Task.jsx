import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import {
  FormControl,
  FormErrorMessage,
  Switch,
  VStack,
  Editable,
  EditableInput,
  EditablePreview,
  Textarea,
  IconButton
} from "@chakra-ui/react"
import { DeleteIcon } from "@chakra-ui/icons"

const Task = props => {
  const {id, onDelete, onEdit} = props
  const {
    register,
    handleSubmit,
    watch,
    trigger,
    formState: { errors }
  } = useForm(
    {
      defaultValues: {
        state: props.state,
        name: props.name,
        desc: props.desc
      }
    }
  )
  const [focused, setFocused] = useState(false)
  const name = watch("name") ?? props.name
  const desc = watch("desc") ?? props.desc
  const state = watch("state")
  const any_error = Object.keys(errors).length !== 0
  useEffect(() => {
    (async () => {
      await trigger()
      !any_error && onEdit(id, name, desc, state)
    })()
  }, [name, desc, state])
  const handleDelete = () => onDelete(id)
  return(
    <FormControl as="form"
      onSubmit={handleSubmit(handleDelete)}
      isInvalid={errors.name}
      display="flex"
      justifyContent="space-around"
      alignItems="center"
      width="500px"
      minHeight="180px"
      h="180px"
      backgroundColor="gray.100"
      m="20px"
      rounded="20px"
      bg={any_error?"red.100":state?"green.100":focused?"yellow.100":"gray.100"}
    >
      <Switch {...register("state")}/>
      <VStack w="300px">
        <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
        <Editable 
          placeholder="" 
          defaultValue={name} 
          isDisabled={state}
          bg={state ? "green.100" : "white"}
          textAlign="center"
          rounded="10px"
          w="100%"
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        >
          <EditablePreview w="100%" h="24px" 
            textDecoration={state ? "line-through" : "none"}
          />
          <EditableInput
            {...register("name", {
              required: "Nombre requerido",
              minLength: {
                value: 3,
                message: "Nombre mínimo 3 caracteres"
              }
            })}
          />
        </Editable>
        <Textarea 
          {...register("desc", {disabled: state})}
          bg={state ? "gray.100" : "white"}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}     
          textDecoration={state ? "line-through" : "none"}     
        />
      </VStack>
      <IconButton 
        type="submit" icon={<DeleteIcon/>} colorScheme="red"
        size="lg"
      />
    </FormControl>
  )
}

export default Task