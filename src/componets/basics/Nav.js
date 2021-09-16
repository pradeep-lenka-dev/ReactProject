import React ,{useState} from 'react'
import Menu from './MenuApi'

const Nav = ({filtermenu,menuList}) => {
  
  return (
    <>
            <nav className="navbar">
<div className="btn-group">
{
  menuList.map((curEle)=>{
    return(
      <button className="btn-group__item" onClick={()=>filtermenu (curEle)}>{curEle}</button>
    )
  })
}
{/*<button className="btn-group__item " onClick={()=>setmenuData(Menu)}>All Iteam</button>*/}
    
      
 
   
      
       
        
        
      
    </div>
 
</nav>
      
    </>
  )
}

export default Nav
