import React,{useState,useContext,createContext} from 'react';
import Button from './Button';
import Message from './Message';
import Title from './Title';
import LangContext from './LangContext';
import './App.css';


export interface props {
  lang:string
  toggleLang?:()=>void
}
function App() {
  const [lang,setLang] = useState('en');
  const toggleLang = ():void => {
     lang === 'en' ? setLang('kr') : setLang('en');
    }
  //1.컨텍스트 생성(createContext) =>  const LangContext = createContext('en');
  //2.Provider로 하위 컴포넌트에 컨텍스트 제공 => <LangContext.Provider value={}></LangContext.Provider> <-value가 전역데이터가 되었다
  return (
    <LangContext.Provider value={lang}>
    <div className="App">
      <Title lang={lang} />
      <Message lang={lang} />
      <Button lang={lang} toggleLang={toggleLang} />
    </div>
    </LangContext.Provider>
  );
}

export default App;
