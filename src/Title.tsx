import React from 'react';
import {props} from './App'


export default function Title ({lang}:props) {
    const text = lang==='en' ? 'Context' : '컨텍스트'
    return (
      <h1>{text}</h1>
    )
}