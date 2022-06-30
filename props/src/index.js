import React from "react";
import ReactDom from "react-dom/client";
import Card  from "./components/Card";

const App = () => {
  return(
    <div className="card">
      <Card cardTitle="1.Kart"/>

      <Card cardTitle="2.Kart"/>
    </div>


  )
}



const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
<App />
);
