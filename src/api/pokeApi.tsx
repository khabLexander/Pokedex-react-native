import axios from 'axios';

export const pokeApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2'
});

export const pokeApiSpecies = axios.create({
    baseURL: ''
})

