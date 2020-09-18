import React,{useState} from 'react';
import './App.css';

function App() {
  const [lang,setLang] = useState('en');
  const toggleLang = ():void => {
     lang === 'en' ? setLang('kr') : setLang('en');
    }
  return (
    <div className="App">
      <Title lang={lang} />
      <Message lang={lang} />
      <Button lang={lang} toggleLang={toggleLang} />
    </div>
  );
}

function Button ({lang,toggleLang}:{lang:string,toggleLang:()=>void}){
  return (
    <button style={{width:'20%'}} onClick={toggleLang}>{lang}</button>
  )
}

function Title ({lang}:{lang:string}) {
  const text = lang==='en' ? 'Context' : '컨텍스트'
  return (
    <h1>{text}</h1>
  )
}

function Message ({lang}:{lang:string}) {
  const renderMessage =():string=>{
    let engContent = `Context provides a way to pass data through the component tree
    without having to pass props down manually at every level`
    let korContent =`컨텍스트는 모든 레벨에서 일일이 props를 넘기지 않고도 컴포넌트 트리에
    걸쳐서 데이터를 전달할 수 있는 방법을 제공합니다.`
    let text= lang ==='en' ? engContent : korContent
    return text
  }

  return (
    <p>{renderMessage()}</p>
  )
}

export default App;
