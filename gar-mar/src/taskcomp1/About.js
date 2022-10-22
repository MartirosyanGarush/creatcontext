import React, { useContext } from 'react'
import { inputContext } from '../App'
import "./inputs.css"

export default function About() {
    let obj =  useContext(inputContext)
  return (
    <div className='about'>
    <p> {'Name:'}  {obj.name}</p>
    <p>{'Age:'}    {obj.age}</p>
    </div>
  )
}
