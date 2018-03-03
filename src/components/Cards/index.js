import React from 'react'


const smallCardStyle = {
    padding: "5px 50px",
    maxWidth: "100px"
};

const Cards = (props) => {


    return (
        <div className="card-container">
            { 
                props.data.map((elem, i) =>(
                    <div className="card" 
                    key={props.title + i.toString()}
                    style={props.small ? smallCardStyle : { width: "300px" }}
                    >
                        <div 
                        className="card-image" 
                        style={props.small ? { width: "125px", height: "125px" } : { width: "150px", height: "150px", padding: "40px"}}
                        >
                            <img src={elem.image} alt="image"/>
                        </div>
                        <div className="card-title">
                            <h4>{elem.title}</h4>
                        </div>
                        { elem.about ? <div className="card-about">{elem.about}</div>: "" }
                            

                    </div>  
                ))
            }
              
        </div>
    )
};

export default Cards;