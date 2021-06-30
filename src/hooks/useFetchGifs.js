import { useState, useEffect } from "react"
import { getGifs } from '../helpers/getGifs';


export const useFetchGifs = ( category )=>{

    const [state, setState] = useState({
        data :[],
        loading : true 
    });
    //UseEffect se usa para ejecutar funciones que  tengan dependencias ; Component dimout
    useEffect(() => {
        getGifs( category )
        .then( img => {
                setState({
                    data :img,
                    loading : false 
                })
        });
    },[category] );
    return state;
};