import React from "react";

const Header = (props) =>
{
    console.log(props)
    return(
        <div style={{background:"yellow",height:100}}>hai
        {props.feature}
        <button onClick={()=>props.get('data')}>click</button>
        </div>
        
    )
}

export default Header;

