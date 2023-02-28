import { useState } from "react"



const Button = (props) => {

    const [ offsetNumber, setOffsetNumber ] = useState(10)


    const handleButtonClick = (event) => {
        event.preventDefault()
        setOffsetNumber(offsetNumber + 10)
        props.addPokemons(offsetNumber)

    }

    return(
        <button onClick={handleButtonClick}>{props.children}</button>
    )
}

export { Button }