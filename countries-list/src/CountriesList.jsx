import React, { useEffect, useState } from 'react'

function CountriesList() {

    const [countrys, setCountrys] = React.useState([]);

   useEffect(() =>{

    fetch("https://restcountries.com/v2/all")
    .then((res) => res.json())
    .then((data) => {
        console.log(data,"dddddddd")
        setCountrys([...data]);
    })
     },[])

  return (
    <div>
        {
            countrys.map((e)=>{
               return <li>{e.name}</li>
            })
        }
    </div>
  )
}

export default CountriesList