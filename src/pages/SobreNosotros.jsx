import { Text } from "@chakra-ui/react"

export default function SobreNosotros() {
  return (
    <Text p="100px 20vw" fontSize={["1xl","2xl"]} align="justify">
      Esta pagina fue creada por Luisa Cortes,
      construida con tecnologia de ReactJS.
      Contiene una muy util aplicacion para administrar una lista
      de tareas, en donde se pueden crear con un nombre y una descripcion,
      se pueden editar y eliminar. Ademas, se pueden marcar como completadas
      y se almacenan en el dispositivo desde donde se accede a la aplicacion.
      Por lo que las notas se mantienen aun despues de cerrar la pagina.
      <br /><br />
      Se usa Vite y CSS puro para el empaquetamiento y la apariencia
      de la aplicacion respectivamente.
    </Text>
  )
}