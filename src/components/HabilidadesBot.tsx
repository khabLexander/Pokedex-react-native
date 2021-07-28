import React from 'react'
import { Text, View } from 'react-native';
import { styles } from '../theme/pokeDexTheme';
import { PokemonDetail, PokemonSpecies } from '../interfaces/pokemonInterface';
import Tts from 'react-native-tts';
import { useEffect, useState } from 'react';

interface Props{
    pokemonData: PokemonDetail,
    buscar:boolean,
    pokemonSpecies: PokemonSpecies
}
const Info = {
    hp:0,
    atk:0,
    def:0,
    speed:0,
    tipo:'',
    height:0,
    attack:0,
    defense:0,
    nombre:''
}


export const HabilidadesBot = ({pokemonData, buscar, pokemonSpecies}:Props) => {

    const [info, setInfo] = useState(Info)
    const [description, setDescription] = useState('')
    useEffect(() => {
            try{
                // setDescription(getFrase());
                setInfo({
                    hp:pokemonData.stats[0].base_stat,
                    atk:pokemonData.stats[1].base_stat,
                    def:pokemonData.stats[2].base_stat,
                    speed:pokemonData.stats[5].base_stat,

                    tipo: pokemonData.types.map(tipo=>tipo.type.name).join('; ').toUpperCase(),
                    height:pokemonData.height,
                    attack:pokemonData.stats[3].base_stat,
                    defense:pokemonData.stats[4].base_stat,
                    nombre:pokemonData.name.toUpperCase()
                })
                
                Tts.speak(`${pokemonData.name}`);
                // Tts.speak(`${description}`);
                Tts.speak(`es un pokemon de tipo ${pokemonData.types.map(tipo=>tipo.type.name)}
                sus habilidades son ${pokemonData.abilities.map(h=>`; ${h.ability.name}`)}
                tiene una altura de ${pokemonData.height*10} centimetros, 
                sus puntos de vida son ${pokemonData.stats[0].base_stat}, de ataque ${pokemonData.stats[1].base_stat}, de defensa ${pokemonData.stats[2].base_stat}
                su velocidad es de ${pokemonData.stats[5].base_stat} su peso es de ${pokemonData.weight/10} kilogramos`)
            }
            catch(err){
            }
    }, [pokemonData])

    const getFrase = ()=>{
        let i = 0
         for  (i; pokemonSpecies!.flavor_text_entries.length;i++){
                 if( pokemonSpecies!.flavor_text_entries[i].language.name==='es'){
                Tts.speak (pokemonSpecies!.flavor_text_entries[i].flavor_text)
                break;
            }
        }
        return  pokemonSpecies!.flavor_text_entries[i].language.name
    }
    return (
        
        <View style={styles.habilidades}>

        <View style={styles.data}>

            <View style={styles.stats}>
                <Text style={styles.textStats}>HP</Text>
                <Text style={styles.textStats}>ATK</Text>
                <Text style={styles.textStats}>DEF</Text>
                <Text style={styles.textStats}>SPEED</Text>
            </View>
            <View style={styles.statsRes}>
                <Text style={styles.textStatsRes}>{info.hp}</Text>
                <Text style={styles.textStatsRes}>{info.atk}</Text>
                <Text style={styles.textStatsRes}>{info.def}</Text>
                <Text style={styles.textStatsRes}>{info.speed}</Text>
            </View>
            <View style={styles.statsUpper}>
                <Text style={styles.textStatsUpper}>TIPO: {info.tipo}</Text>
                <Text style={styles.textStatsUpper}>HEIGHT:  {info.height*10} cm</Text>
                <Text style={styles.textStatsUpper}>SPECIAL ATTACK: {info.attack}</Text>
                <Text style={styles.textStatsUpper}>SPECIAL DEFENSE: {info.defense}</Text>
            </View>
            
        </View>

    </View>
    )
}
