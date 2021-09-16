import React ,{useState} from 'react'
import "./Style.css"
import Menu from './MenuApi'
import MenuCard from '../MenuCard'
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Nav from './Nav'
const menuList = [...new Set(Menu.map((curElem)=>{
  return curElem.category
})),"All"
];
const Resturant = () => {
    const [menuData, setmenuData] =  useState(Menu);
    const filtermenu =(category)=>{
      if(category ==="All")
      {
        setmenuData(Menu);
        return;
      }
        const updatedList = Menu.filter((curentElement)=>{
            return curentElement.category === category;
        });
        setmenuData(updatedList);
    }
  
    return (
        <>
        <Nav filtermenu={filtermenu } menuList={menuList}></Nav>
        <MenuCard menudata={menuData}></MenuCard>
        
        </>
    )
}

export default Resturant
