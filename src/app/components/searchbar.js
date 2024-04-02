'use client';
import Selector from './searchbarselector';
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react';
// import React from 'react';
// import { useSearchParams } from 'react-router-dom';

function GetParams() {
    console.log("runs function")

}


export default function SearchBar() {

    const [searchQuery, setSearchQuery] = useState("");

    //     useEffect(() => {

    //         const searchParams = useSearchParams()
    //         const search = searchParams.get('query')
    //         console.log(search);
    //         return () => {

    //         };
    // });



    return (
        <>
            <div className='nav-search'>
                <Selector />

                <form method="GET" name="global-search">
                    <input type="text" name="query" placeholder="Buscar productos, marcas y más..." className='search-box'></input>
                    <button className='search-right' type="submit">
                        <img src="/magnifier.png" className='magnifying-glass'></img>
                    </button>
                </form>
            </div>
        </>

    );
}

