import React from 'react'
import { Link } from "react-router-dom";
import"./menuContent.css"

function MenuContent(props) {
  return (
    <li className='hover'><Link to={props.url}>{props.linkname}</Link></li>
  )
}

export default MenuContent