import React from "react";

const Collapse = (props) => {
    console.log(props)
    return (
        <div>
                <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                  {props.collapseText}
                </a>
            
            <div class="collapse" id="collapseExample">
                {props.children}
                Linke tıklandı.
            </div>

        </div>
    )
}

export default Collapse