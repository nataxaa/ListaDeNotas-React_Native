import { useContext, useState } from "react";
import { View, Text, StyleSheet, TextInput, SafeAreaView} from "react-native";
import { CartContext } from "../context/cart";

import Close from 'react-native-vector-icons/FontAwesome'
import Check from 'react-native-vector-icons/FontAwesome'


export default function TabHomeScreen(props:any){
    
    const {note,DeleteNote, flag}:any = useContext(CartContext)

    function handleDelete(key:number){
        DeleteNote(key)
    }

    

    return(
        <View style={styles.container}>
            <Text style={styles.textTitle}>Lista de Notas</Text>
            <View style={styles.areaNotes}>
                {flag && (
                    <View>
                        <Text style={styles.textAlertNotes}>Sem notas adicionadas!</Text>
                    </View>
                )}
                {note.map((props: any, key:number)=>(
                    <View style={styles.x}>
                    <View style={styles.textNote}>
                        <Text style={styles.areaTextNote}>{props.text}</Text>
                    </View>
                        <Close name="close" style={styles.icon} onPress={()=>handleDelete(props.id)} />
                    </View>
                ))}
                
            </View>
        </View>
    )   
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ff5722'
    },
    textTitle: {
        fontSize: 30,
        marginBottom:40,
        color: '#121435',
        fontWeight: 'bold'
    },
    textNote:{
        borderWidth: 1,
        padding:15,
        fontSize: 20,
        borderRadius: 10,
        marginRight: 10, 
    },
    areaNotes:{
        gap:10,
        borderRadius: 5,
        paddingHorizontal: 20,
        

    },
    areaTextNote: {
        flexWrap: "wrap",
        alignItems: 'center',
        gap: 10,
        textAlignVertical: "bottom",
        width: 200,
        color:'#FFF'
    },
    icon:{
        fontSize: 22
    },
    x:{
        display:'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8
    },
    textAlertNotes:{
        color: '#FFF0000',
    }
})