import {createContext, useState } from "react";


export const CartContext = createContext();

interface listProps{
    id:number;
    text: string;
}

export function CartContextProvider({children}:any){

    const [note, setNote] = useState<listProps[]>([])
    const [flag, setFlag] = useState(true)

    function RegisterNote(newNote:string){
        setFlag(false)        
        const auxArray = [...note]
        auxArray.push({id: note.length + 1 ,text: newNote})
        setNote(auxArray)
        console.log(note)
        alert("Nota Registrada!")
    }

    function DeleteNote(index:number){
       const a = note.filter(props=>props.id!==index)
       setNote(a)
       if(note.length == 0){
        setFlag(false)
    } 
        
    }

    return(
        <CartContext.Provider value={{note, RegisterNote, DeleteNote, flag}}>
            {children}
        </CartContext.Provider>
    )



}