import React from "react";
import { useDispatch } from "react-redux";
import { setOpenModalNewUser } from "../store/modules/exampleSlice/exampleSlice";
import {Button} from "@mui/material"
import { useQuery } from "react-query";
import { buscaCategorias } from "../services/api";

const Home =()=>{
    const dispatch = useDispatch()
    
    const { status, data, error, isFetching, isLoading } = useQuery('ListarCardapio', buscaCategorias);

    console.log(data)
    console.log(data)




    return(
        <>
           <h1>HOME</h1>
           <button onClick={()=> dispatch(setOpenModalNewUser({open:true}))}> TESTE </button>
           <Button variant='contained'>asdsadsa</Button>
        </>
    )
}

export default Home;