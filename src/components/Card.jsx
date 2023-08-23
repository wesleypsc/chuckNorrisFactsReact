// import { useState, useEffect} from 'react'
import './Card.css'

function Card(props){
    return(
        <div className='jokeCard'>
            <small><a href={props.url} target='_blank'>{props.id}</a></small>
            <p className='jokeText'>{props.text}</p>
        </div>
    )
}

export default Card