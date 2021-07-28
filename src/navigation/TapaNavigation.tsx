import React from 'react'
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentOptions } from '@react-navigation/drawer';
import { StyleSheet, View,Text, Image } from 'react-native';
import { PokedexScreen } from '../screen/PokedexScreen';
import { styles } from '../theme/pokeDexTheme';

const Drawer = createDrawerNavigator();

export const TapaNavigation = () => {
    return (
        <Drawer.Navigator
            drawerStyle={{width:'100%',borderRadius:20, overflow:'hidden'}}
            drawerContent={(props)=><CajaInterna {...props}/ >}
        >
            <Drawer.Screen name="PokedexScreen"component={PokedexScreen} />
        </Drawer.Navigator>
    )
}
const CajaInterna =(props:DrawerContentComponentProps<DrawerContentOptions>)=>{
    return (
        <View style={stilacho.tapa}>
            <View style={stilacho.top}>
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
            </View>
            <View style={stilacho.all}>
                    <View style={stilacho.triangulo}/>
                    <View style={stilacho.rectangulo}/>
                    <Text style={stilacho.pokeletras}> POKEDEX </Text>
                    <Text style={stilacho.author}> Kevin  Alexander G M </Text>
                    <Text style={stilacho.authorAl}> @KhaAlbito </Text> 
                    <Image 
                        style={stilacho.pokephoto}
                        source={{uri:'https://upload.wikimedia.org/wikipedia/commons/5/51/Pokebola-pokeball-png-0.png'}}
                    />
            </View>
        </View>
    )
}
const stilacho = StyleSheet.create({
    tapa:{
        borderRadius:20,
        borderWidth:2,
        borderColor:'black',
        flex:1,
        flexDirection:'column',
        backgroundColor:'#968f90'
    },
    top:{
        backgroundColor:'#cf324a',
        flex: 1.9,
        borderRadius:20,
        borderWidth:2,
        borderColor:'black',
    },
    all:{
        backgroundColor:'#cf324a',

        flex:7,
        borderRadius:20,
        borderWidth:2,
        borderColor:'black',
    },
    circuloCeleste:{
        borderWidth: 5,
        borderColor:'black',
        position:"absolute",
        top:50,
        left:30,
        borderRadius:100,
        width:75,
        height:75,
        backgroundColor: '#1d93c2'
    },
    circuloCelesteClaro:{
        top:3,
        left:2,
        position:"absolute",
        borderRadius:100,
        width:60,
        height:60,
        backgroundColor: '#4db8e3'
    },
    puntoBlanco:{
        top:10,
        left:20,
        borderRadius:100,
        width:15,
        height:15,
        backgroundColor: '#bbeafc'
    },
    botones:{
        flexDirection:'row',
        alignContent:'space-between',
        top:50,
        left:60
    },
    Btnrojo:{
        marginHorizontal:5,
        borderWidth:2,
        borderColor:'black',
        borderRadius:100,
        backgroundColor:'red',
        left:100,
        width:28,
        height:28
    },
    BtnAmarillo:{
        marginHorizontal:5,
        borderWidth:2,
        borderColor:'black',
        borderRadius:100,
        backgroundColor:'yellow',
        left:100,
        width:28,
        height:28
    },    
    BtnVerde:{
        marginHorizontal:5,
        borderWidth:2,
        borderColor:'black',
        borderRadius:100,
        backgroundColor:'green',
        left:100,
        width:28,
        height:28
    },
    triangulo:{
        top:175,
        left:328,
        width: 0,
        height: 0,
        backgroundColor: "transparent",
        borderStyle: "solid",
        borderLeftWidth: 50,
        borderRightWidth: 50,
        borderBottomWidth: 50,
        borderLeftColor: "transparent",
        borderRightColor: "transparent",
        borderBottomColor: "yellow",
        transform: [{ rotate: "-90deg" }],
    },
    rectangulo:{        
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
        width: 120,
        height: 20,
        borderWidth:2,
        borderColor:'black',
        top:340,
        left:150,
        borderRadius: 3
    },
    pokeletras:{
        
        fontSize:30,
        fontWeight:'bold',
        color:'yellow',
        top:350,
        left:137,
    },
    author:{
        marginTop:30,
        fontSize:16,
        color:'black',
        top:350,
        left:130,
    },
    pokephoto:{
        width:225,
        height:225,
        top: -70,
        left: 50
    },
    authorAl:{
        fontSize:10,
        color:'black',
        top:350,
        left:180,
        opacity:0.6
    }
});