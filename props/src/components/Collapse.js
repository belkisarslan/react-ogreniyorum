import React from "react";

//fonksiyon versiyon
// const Collapse = (props) => {
//     console.log(props)
//     return (
//         <div>
//                 <a className="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
//                   {props.collapseText}
//                 </a>

//             <div className="collapse" id="collapseExample">
//                 {/* props children seçtik */}
//                 {props.children}
//                 Linke tıklandı.
//             </div>

//         </div>
//     )
// }

//class versiyon

class Collapse extends React.Component {

    render() {
        return (
            <div>
                <a className="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                    {this.props.collapseText}
                    
                </a>

                <div className="collapse" id="collapseExample">
                    {this.props.children}
                    Linke tıklandı.
                </div>

            </div>
        )
    }
}

export default Collapse