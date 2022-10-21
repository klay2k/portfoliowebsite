import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')

  function getProps(scrollDepthTag) {
    return {
      href: scrollDepthTag,
      onClick: () => setActiveNav(scrollDepthTag),
      className: activeNav === scrollDepthTag ? "active" : "",
    }
  }

  return (
    <nav>
      <a {...getProps("#")}>
        <AiOutlineHome />
      </a>
      <a {...getProps("#about")}>
        <AiOutlineUser />
      </a>
      <a {...getProps("#experience")}>
        <BiBook />
      </a>
      <a {...getProps("#contact")}>
        <BiMessageSquareDetail />
      </a>
    </nav>
  )
}

export default Nav