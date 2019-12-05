import React from 'react'
import {withClue} from '../context/ClueProvider'

const AllClues = (props) => {
    const myClue= {
        name: props.name
    }

    return(
        <div>
            <h3>{props.name}</h3>
            <button onClick={() => props.saveClue(myClue)}>Save to Clue List</button>
        </div>
    )
}

export default withClue(AllClues)