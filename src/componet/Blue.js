import React, {useContext} from 'react'
import {AppContext} from '../App'
 
 const Blue = () => {
const context = useContext(AppContext)
return (
    <div>
        <h1>{context}</h1>
        <h1 style={{color: 'blue'}}>This is the Blue Screen</h1>
    </div>
)
}

export default Blue