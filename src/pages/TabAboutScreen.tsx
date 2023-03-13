import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import {useContext, useState} from 'react'
import { CartContext } from "../context/cart";

export default function TabAboutScreen(props:any){

    const [nota, setNota] = useState<string>()

    const {note, RegisterNote}:any = useContext(CartContext)
    console.log(note)

    function handleRegister(nota:string){
        RegisterNote(nota)
        setNota('')
        props.navigation.navigate("Home")
    }
    console.log(nota)

    return(
        <View style={styles.container}>
            <Text style={styles.textTitle}>Adicionar na Lista</Text>
            <TextInput 
            placeholder="Digite sua nota..." 
            style={styles.input} 
            value={nota}
            onChangeText={(e)=>setNota(e)}
            />
            <Button title="Adicionar Nota" onPress={()=>handleRegister(nota as string)} />
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
        fontWeight: 'bold',
        color:'#121435',
    },
    input:{
        borderWidth: 1,
        width: "70%",
        height:50,
        borderRadius: 6,
        padding: 10,
        marginBottom: 20,
        color:'#FFF',
        fontSize: 20,
        borderColor: "#FFF",
    }
})