import React from "react";

const Card = (props)=> {
    console.log(props)
    return(
        <div className="card">
        <div className="card-body">
          <h5 className="card-title">{props.cardTitle}</h5>
          <p className="card-text">{props.cardText}</p>
          <button className="btn btn-primary">Güncelle</button>
          <div className="card-footer text-muted">
             {props.updateTime}
          </div>
        </div>
      </div>
    )
}

export default Card