import React from 'react'
import {Button, Image, Text, TextInput, TouchableNativeFeedback, View } from 'react-native'
import { styles } from '../theme/pokeDexTheme';
import { pokeApi } from '../api/pokeApi';
import { BannerTop } from '../components/BannerTop';
import { ContenidoCentro } from '../components/ContenidoCentro';
import { HabilidadesBot } from '../components/HabilidadesBot';
import { useState, useEffect } from 'react';
import { PokemonDetail, PokemonSpecies } from '../interfaces/pokemonInterface';
import Tts from 'react-native-tts';

export const PokedexScreen = () => {
    

    const [pokemonName, setPokemonName] = useState('');
    const [pokemonData, setPokemonData] = useState<PokemonDetail>();
    const [buscar, setBuscar] = useState(false);
    const [pokemonSpecies, setPokemonSpecies] = useState<PokemonSpecies>();

    const buscarPokemon = ()=>{
        setBuscar(!buscar)
    }

    useEffect(() => {
        try{
            pokeApi.get<PokemonDetail>(`/pokemon/${pokemonName.toLowerCase()}`).then(resp=>{
                setPokemonData(resp.data)
                pokeApi.get<PokemonSpecies>(`/pokemon-species/${resp.data.id}`).then(r=>{
                    setPokemonSpecies(r.data)
                })
            }).catch(error=>{
                console.log('Pokemon no encntrado')
                Tts.speak(`No he podido encontrar ese Pokemon`)
            })
        }catch{
            console.log('Primera Cargada')
        }
    }, [buscar])

    return (
        <View style={styles.container}>

            {/* BANNER TOP */}
            <BannerTop pokemonName={pokemonName} setPokemonName={setPokemonName} buscarPokemon={buscarPokemon}/>
            {/* CENTRO */}                                                                                                                                   
            <ContenidoCentro sprites={pokemonData?.sprites!} buscar={buscar} nombre={pokemonData?.name!}/>
            {/* BANNER BOT */}
            <HabilidadesBot pokemonData={pokemonData!} buscar={buscar} pokemonSpecies={pokemonSpecies!}/>
        </View>
    )
}

