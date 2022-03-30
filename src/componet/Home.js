import React, {useReducer} from 'react'
import {reducer} from '../App'

const initialState = 0
 
 const Home = () => {
const [state,dispatch] = useReducer(reducer,initalState);

function increase (Value){
    dispatch({type:'Add', payload: value})
}
function decrease (Value){
    dispatch({type:'Subtract', payload: value})
}

return (
    <div>
        <h1>Home Screen</h1>
        <button onClick={() => increase(5)} ></button>
        <button onClick={() => decrease(5)} ></button>
        <h1 style={{color: 'yellow'}}>{state}</h1>
    </div>
)
}

export default Home