import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        backgroundColor:'#968f90',
        borderRadius:20,
        flex:1,
        flexDirection:"column",
        alignItems:"center"        
    },
    bannerTop:{
        borderWidth:2,
        borderColor:'black',
        borderStyle:"solid",
        borderRadius:20,
        width:'100%',
        backgroundColor:'#cf324a',
        flex:1.5,
        shadowColor: "#000",
        shadowOffset:{
        width: 0,
        height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,
        elevation: 14,
    },
    title:{
        color:'white'
    },
    circuloBlanco:{
        shadowColor: "#000",
        shadowOffset:{
        width: 0,
        height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
        marginLeft:5,
        top:'10%',
        borderRadius:100,
        width:90,
        height:90,
        backgroundColor: 'white'
    },
    circuloCeleste:{
        position:"absolute",
        top:5,
        left:9,
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
    redCircleBig:{
        marginRight:10,
        top:-70,
        left:100,
        borderRadius:100,
        position:"relative",
        backgroundColor:'#ff0033',
        width:28,
        height:28,
    },
    redCircle:{
        top:2,
        left:3,
        borderRadius:100,
        position:"absolute",
        backgroundColor:'#91001d',
        width:25,
        height:25,
    },
    redCircleLight:{
        top:2,
        left:0,
        borderRadius:100,
        position:"absolute",
        backgroundColor:'#ff0033',
        width:15,
        height:15,
    },
    yellowCircleBig:{
        marginRight:10,
        top:-70,
        left:100,
        borderRadius:100,
        position:"relative",
        backgroundColor:'#c1de04',
        width:28,
        height:28,
    },
    yellowCircle:{
        top:2,
        left:3,
        borderRadius:100,
        position:"absolute",
        backgroundColor:'#7f9104',
        width:25,
        height:25,
    },
    yellowCircleLight:{
        top:2,
        left:0,
        borderRadius:100,
        position:"absolute",
        backgroundColor:'#c1de04',
        width:15,
        height:15,
    },
    btnRow:{
        flexDirection:"row"
    },
    inputBox:{
        flexDirection:"column",
        justifyContent:"space-between",
        borderRadius:20,
        borderWidth:2,
        backgroundColor:'white',
        borderColor:'black',
        bottom: 90,
        left:220,
        width: 150,
        height: 40,
    },
    fab: {
        position:'absolute',
        borderColor:'black',
        borderWidth:2,
        justifyContent: 'center',
        backgroundColor: '#5856d6',
        width: 150,
        height: 40,
        borderRadius: 100,
        shadowColor: "#000",
        left:220,
        top: 80
    },
    fabText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 10,
        alignSelf: 'center',
      },
    contenidoCentro:{
        borderWidth:2,
        borderColor:'black',
        borderStyle:"solid",
        borderRadius:20,
        width:'100%',
        backgroundColor:'#cf324a',
        flexDirection:"column",
        flex:3.5,
    },
    photoBorder:{
        shadowColor:'black',
        borderRadius:30,
        marginLeft:'15%',
        marginTop:'5%',
        backgroundColor:'#e7e8e3',
        position:"relative",
        width:'90%',
        height:'70%',
        left:-40
    },
    photo:{
        shadowColor: "#000",
        shadowOffset:{
        width: 0,
        height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderWidth:1,
        borderColor:'black',
        borderStyle:"solid",
        marginLeft:'5%',
        marginTop:'5%',
        borderRadius:30,
        position: "absolute",
        backgroundColor:'#f0f5df',
        width:'90%',
        height:'85%'
    },
    pokephoto:{
        width:200,
        height:200,
        top: 4,
        left: 60
    },
    butonsAction:{
        // position:'absolute',
        top:-85,
        flexDirection: "row",
        alignContent:"space-between",
        alignItems:"flex-end"
    },
    joyStickBig:{
        top: 90,
        left:20,
        borderRadius:100,
        width:70,
        height:70,
        backgroundColor:'#050505'
    },
    joyStickCenter:{
        position:"absolute",
        top: 0,
        right:3,
        borderRadius:100,
        width:60,
        height:60,
        backgroundColor:'#30302e'
    },
    arrowJoystick:{
        top: 90,
        left:240,
        width:75,
        height:75
    },
    namePokemon:{
        top:80,
        left:100,
        width:200,
        height:40,
        position:"absolute",
        backgroundColor: '#e7e8e3',
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
        justifyContent:"center"
    },
    namePokemonText:{
        flex:1,
        textAlign:"center",
        fontFamily:'Roboto',
        fontWeight:'bold',
        top:4,
        fontSize:20,
    },
    start:{
        borderWidth:1,
        borderColor:'black',
        top:100,
        right:28.5,
        marginBottom:10,
        width:45,
        height:15,
        backgroundColor:'#1a9ec9'
    },
    startTopLeft:{
        borderTopLeftRadius:5,
        borderWidth:1,
        borderColor:'black',
        top:100,
        right:28.5,
        marginBottom:10,
        width:45,
        height:15,
        backgroundColor:'#1a9ec9'
    },
    startTopRight:{
        borderTopRightRadius:5,
        borderWidth:1,
        borderColor:'black',
        top:100,
        right:28.5,
        marginBottom:10,
        width:45,
        height:15,
        backgroundColor:'#1a9ec9'
    },
    startBottomLeft:{
        borderBottomLeftRadius:5,
        borderWidth:1,
        borderColor:'black',
        top:100,
        right:28.5,
        marginBottom:10,
        width:45,
        height:15,
        backgroundColor:'#1a9ec9'
    },
    startBottomRight:{
        borderBottomRightRadius:5,
        borderWidth:1,
        borderColor:'black',
        top:100,
        right:28.5,
        marginBottom:10,
        width:45,
        height:15,
        backgroundColor:'#1a9ec9'
    },
    textCenter:{
        fontSize:10,
        textAlign:"center",
        color:'black'
    },
    habilidades:{
        borderWidth:2,
        borderColor:'black',
        borderStyle:"solid",
        borderRadius:20,
        width:'100%',
        backgroundColor:'#cf324a',
        flex:2,
    },
    stats:{
        flexDirection:"row",
        justifyContent:"space-evenly",
        alignItems:"flex-end",
        left:'3%',
        top:'5%',
        borderRadius:10,
        position:"absolute",
        width:'95%',
        height:'90%',
        backgroundColor:'#0a1709'
    },
    textStats:{
        fontSize: 20,
        fontWeight:'bold',
        marginHorizontal:8,
        marginBottom:10,
        color:'white'
    },
    data:{
        left:'3%',
        top:'5%',
        borderRadius:10,
        width:'95%',
        height:'90%',
        backgroundColor:'#0a1709',
        flexDirection:"column"
    },
    statsRes:{
        flexDirection:"row",
        justifyContent:"space-evenly",
        alignItems:"flex-end",
        top:'30%',
        marginBottom:40
    },
    textStatsRes:{
        fontSize: 15,
        marginLeft:0,
        marginRight:20,        
        textAlign:"center",
        color:'white'
    },
    statsUpper:{
        marginTop:10,
        width:'100%',
        flexDirection: 'column',
        justifyContent:"center",
        alignItems:"center",
        position:"absolute",
    },
    textStatsUpper:{
        color:'white'
    },


});