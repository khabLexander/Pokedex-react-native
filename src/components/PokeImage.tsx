import React from 'react'
import { Image, View } from 'react-native';
import { styles } from '../theme/pokeDexTheme';

export const PokeImage = ({image}:any) => {
    return (
        <View>
        <Image 
            style={styles.pokephoto}
            source={{uri:image}}
        />
        </View>
    )
}
