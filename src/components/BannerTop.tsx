import React from 'react'
import { Text, View, TouchableNativeFeedback, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { styles } from '../theme/pokeDexTheme';

interface Props{
    pokemonName:string,
    setPokemonName:any,
    buscarPokemon:any
}

export const BannerTop = ({pokemonName,setPokemonName,buscarPokemon}:Props) => {
    return (
        <View style={styles.bannerTop}>
        <View style={styles.circuloBlanco}>
            <View style={styles.circuloCeleste}>
                <View style={styles.circuloCelesteClaro}>
                    <View style={styles.puntoBlanco}/>
                </View>
            </View>
        </View>
        <View style={styles.btnRow}>
            <View style={styles.redCircleBig}>
                <View style={styles.redCircle}>
                    <View style={styles.redCircleLight}>
                    </View>
                </View>
            </View>
            <View style={styles.yellowCircleBig}>
                <View style={styles.yellowCircle}>
                    <View style={styles.yellowCircleLight}>
                    </View>
                </View>
            </View>
            <View style={styles.yellowCircleBig}>
                <View style={styles.yellowCircle}>
                    <View style={styles.yellowCircleLight}>
                    </View>
                </View>
            </View>
        </View>
        <View  style={styles.inputBox}>
                <TextInput
                    placeholder='Ingresa un pokemon'
                    value={pokemonName}
                    onChangeText={(text)=>setPokemonName(text)}
                    autoCorrect={false}
                    keyboardAppearance='dark'
                />
        </View>
        <TouchableNativeFeedback
                    background={TouchableNativeFeedback.Ripple('blue',true,30)}
                    onPress={buscarPokemon}
                >
                    <View style={styles.fab}>
                        <Text style={styles.fabText}>BUSCAR</Text>
                    </View>
        </TouchableNativeFeedback> 
    </View>

    )
}
