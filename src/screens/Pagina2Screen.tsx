import React from 'react'
import { Button, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { styles } from '../theme/appTheme'

const Pagina2Screen = () => {


  const navigator = useNavigation()






  return (
    <View style={styles.globalMargin}>
        <Text> Pagina2screen</Text>

        <Button 
          title='Ir pagina 3'
          onPress={() => navigator.navigate('Pagina3Screen')}
        
        />
    </View>
  )
}

export default Pagina2Screen
