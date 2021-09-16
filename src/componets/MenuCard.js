import React from 'react'
import Button from "@material-ui/core/Button"
const MenuCard=({menudata})=> {
    
    return (
        <>
        <span className="main-card--cointainer ">
        
        {menudata.map((curEle)=>{
            const {id, category,name,image,description}=curEle;
            return(
                <>
                
                <div className="card-container "key={id}>
            <div className="card ">
                <div className="card-body ">
                    <span className="card-number card-circle subtle ">
                        1
                    </span>
                    <span className="card-auth subtle "> {category}</span>
                    <h2 className="card-title ">{name}</h2>
                    <div className="card-description  ">{description}</div>
                    <div className="card-read ">Read</div>
                </div>
                <img src={image}alt="images" className="card-media "/>
          
<button className="card-tag ">Order Now</button>
            </div>
        </div>
        
        
        </>
            
            );
        })}
        </span>    
        </>
        
    )

}

export default MenuCard
