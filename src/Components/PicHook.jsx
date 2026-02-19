import React from 'react';
import { useFetch } from '../hooks/useFetch';
import { useCounter } from '../hooks/useCounter';
import { Loading } from './Loading';
import { PicCard } from './PicCard';

export const PicHook = () => {
    const { counter, decrement, increment } = useCounter(1);
    const {data, hasError, isLoading} = useFetch
    (`https://picsum.photos/id/${counter}/info`)
        
    
    return (
        <>
            <h1>A random photo</h1>
            <hr/>
                {isLoading ? <Loading/>
                    : (<PicCard id={counter} author = {data.author}  image={`https://picsum.photos/id/${counter}/300/200`}/>)}

            <button className='btn btn-primary' onClick= { ()=>decrement() } >Anterior</button>
            <button className='btn btn-primary' onClick= { ()=>increment() } >Siguiente</button>
        </> 
    )
}
