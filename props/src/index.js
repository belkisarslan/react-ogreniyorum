import React from "react";
import ReactDom from "react-dom/client";
import Card  from "./components/Card";
import Collapse from "./components/Collapse";

const App = () => {
  return(
    <div className="card">
      
      <Collapse collapseText="Tıklayınız">
        {/* collapsein içine kart yerleştirmek için açılış kapanış yaptık */}
         <Card cardTitle="İçteki Kart" cardText="3.Kart İçeriği" updateTime="3 dakika önce güncellendi"/>
      </Collapse>

      <Card cardTitle="1.Kart" cardText="1.Kart İçeriği" updateTime="3 dakika önce güncellendi"/>

      <Card cardTitle="2.Kart" cardText="2.Kart İçeriği" updateTime="1 dakika önce güncellendi" />

    </div>


  )
}



const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
<App />
);
