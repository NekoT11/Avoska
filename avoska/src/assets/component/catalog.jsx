import { use, useEffect, useState } from "react"

export function Catalog() {
    const [tovar, setTovar] = useState([])

useEffect(()=>{

    async function render() {
        const response = await fetch('http://localhost:5000/catalog')
        const data = await response.json()
        setTovar(data)
    
       
    }   
    render()
    },[])

    return (
        <div>
            {tovar.map((e)=>(
                <div key={e.id}>
                    <p>{e.name}</p>
                    <p>{e.price}</p>
                </div>
            ))}
        </div>
    )

}



