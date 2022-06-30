import React from "react";
import ReactDom from "react-dom/client";

const name = ["Kullanıcı 1", "Kullanıcı 2", "Kullanıcı 3"]

//fonsiyon versiyonu
function App(){

   const buttonValue = "Bu bir buton"

    return (
    <div>
      <h1>React Öğreniyorum</h1>
      <h2>Kullanıcıları yazalım</h2>
      {name.map(name => (<li>{name}</li>))}
      <br></br>
      <button type="button" style={{padding:"10px", backgroundColor:"blue", color:"white"}}>{buttonValue}</button>
    </div>
    )
    
} 

//class versiyonu
// class App extends React.Component{
//  render() {
//     return <h1>React Öğreniyorum</h1>;
//  }
// }

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
<App />
);
