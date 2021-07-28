import React from 'react'
import { View, Text, TouchableNativeFeedback, Image } from 'react-native';
import { styles } from '../theme/pokeDexTheme';
import { Sprites } from '../interfaces/pokemonInterface';
import { PokeImage } from './PokeImage';
import Carousel from 'react-native-snap-carousel';
import { useEffect, useState } from 'react';

interface Props{
    sprites: Sprites,
    buscar: boolean,
    nombre: string
}


export const ContenidoCentro = ({sprites,buscar, nombre}:Props) => {

    const uri = 'https://upload.wikimedia.org/wikipedia/commons/5/51/Pokebola-pokeball-png-0.png';
    const [pooo, setpooo]  = useState([]);
    const [name, setName] = useState('');
    const photos:any = [];
    const filtro:any = [];
    useEffect(() => {
        if(sprites){
            guardarImagenes();
        }   
    }, [sprites])
    const guardarImagenes = async()=>{
        photos[2]= sprites.back_default || uri,
        photos[4]= sprites.back_female || uri,
        photos[6]= sprites.back_shiny || uri,
        photos[8]= sprites.back_shiny_female || uri,
        photos[1]= sprites.front_default || uri,
        photos[3]= sprites.front_female || uri,
        photos[4]= sprites.front_shiny || uri,
        photos[6]= sprites.front_shiny_female || uri,
        photos[0]= sprites.other?.['official-artwork'].front_default || uri
        for(let i = 0; i<photos.length;i++){
            if(photos[i]!==uri && photos[i]!=undefined){
                filtro.push(photos[i])
            }
        }
        setpooo(filtro);
        setName(nombre)
    }
    return (
        <View style={styles.contenidoCentro}>
        <View style={styles.photoBorder}>
            <View style={styles.photo}>
            <Carousel
                // layout={'tinder'}
                layoutCardOffset={100}
                data={pooo}
                renderItem={({item}:any)=><PokeImage image={item}/>}
                sliderWidth={270}
                itemWidth={250}
                inactiveSlideOpacity={2.5}
            />
            </View>
        </View>
        <View style={styles.butonsAction}>
            <View style={styles.joyStickBig}>
                <View style={styles.joyStickCenter}></View>
            </View>
            <Image
                style={styles.arrowJoystick}
                source={require('../../assests/joystick.png')}
            />
            <View style={styles.namePokemon}>
                <Text style={styles.namePokemonText}>{name.toUpperCase()}</Text>
            </View>
            <View>
                <View style={{left:-5, flexDirection:'row', justifyContent:'center', marginBottom:10, top:22}}>
                    <View style={styles.startTopLeft}/>
                    <View style={styles.start}/>
                    <View style={styles.start}/>
                    <View style={styles.startTopRight}/>
                </View>
                <View style={{left:-5, flexDirection:'row', justifyContent:'center', marginBottom:5}}>
                    <View style={styles.startBottomLeft}/>
                    <View style={styles.start}/>
                    <View style={styles.start}/>
                    <View style={styles.startBottomRight}/>
                </View>
            </View>

        </View>
    </View>
    )
}
