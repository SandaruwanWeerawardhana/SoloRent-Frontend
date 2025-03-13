import React from 'react'
import { Link } from "react-router-dom";

function MenuContent(props) {
  return (
    <li><Link to={props.url}>{props.linkname}</Link></li>
  )
}

export default MenuContent