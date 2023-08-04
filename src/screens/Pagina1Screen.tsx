import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { TouchableOpacity } from 'react-native-gesture-handler'



interface Props extends StackScreenProps <any, any>{

}



const Pagina1Screen = ({navigation}: Props) => {




  return (
    <View style={styles.globalMargin}>


        <Text style={styles.title}> Pagina1screen</Text>


        <Button
          title= "Ir pagina 2"
          onPress={() => navigation.navigate('Pagina2Screen')}
        />


        <Text>Navegar con argumentos</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('PersonaScreen')}
        >
          <Text>Pedro</Text>

        </TouchableOpacity>
    </View>
  )
}

export default Pagina1Screen
