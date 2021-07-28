import React, { useEffect } from 'react';
import { useState } from 'react'
import { pokeApi } from '../api/pokeApi';
import { PokemonDetail } from '../interfaces/pokemonInterface';

export const usePokemon = (pokemonName:string) => {

    const [isLoading, setIsLoading] = useState(true);
    const [pokemonData, setPokemonData] = useState<PokemonDetail>();

    const getPokemon = async() =>{
        const pokemonResponse = await pokeApi.get(`/${pokemonName}`);
        console.log(pokemonResponse.data.name)
        setPokemonData(pokemonResponse.data);
        setIsLoading(false)
    }

    useEffect(() => {
        getPokemon();
    }, [])

    return{
        isLoading,
        pokemonData
    }

}
