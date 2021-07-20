import React, { useContext, useEffect, useState } from 'react'
import AppContext from '../Context/context'

import InputAndOption from '../styles/inputAndOption'

export default function InputAndOptionComponente(){
    const [search, setSearch] = useState('a')
    const {data, setToData} = useContext(AppContext)

    useEffect(() => {
        fetch(`https://restcountries.eu/rest/v2/name/${search}`)
            .then(res => res.json())
            .then(dados => setToData(dados))
            console.log(data)
    },[search])

    return(
        <InputAndOption>
            <div className='input'>
                {/* <img src={lupa} alt='Icon lupa'></img> */}
                <i class="fas fa-search" style={{color: `${props => props.theme.colors.text}`}}></i>
                <input type='text' placeholder='Search for a country...' value={search} onChange={(e) => setSearch(e.target.value)}></input>
            </div>
            <div className='options'>
                <input list='countries' type='text' id='countriesInput' placeholder='Filter by Region'></input>
                <datalist id='countries'>
                    <option value='All'>All</option>
                    <option value='África'>África</option>
                    <option value='América'>América</option>
                    <option value='Europe'>Europe</option>
                    <option value='Ásia'>Ásia</option>
                    <option value='Oceania'>Oceania</option>
                </datalist>
            </div>
        </InputAndOption>
    )
}