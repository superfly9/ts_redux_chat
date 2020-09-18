import React from 'react';
import {props} from './App'

export default function Button ({lang,toggleLang}:props){
    return (
      <button style={{width:'20%'}} onClick={toggleLang}>{lang}</button>
    )
}


