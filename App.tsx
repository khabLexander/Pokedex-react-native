import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native'
import { TapaNavigation } from './src/navigation/TapaNavigation'
import { PokedexScreen } from './src/screen/PokedexScreen'

export const App = () => {
  return (

      <View style={styles.fondo}>
        <StatusBar backgroundColor='#cf324a' barStyle='light-content'/>
          <NavigationContainer>
            <TapaNavigation/>
          </NavigationContainer>
      </View >


    // <SafeAreaView style={styles.fondo}>
    //   <StatusBar backgroundColor='#f72d3d' barStyle='light-content'/>
    //   <PokedexScreen/>
    // </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    fondo:{
      flex:1,
      borderRadius:20,
    }
});
