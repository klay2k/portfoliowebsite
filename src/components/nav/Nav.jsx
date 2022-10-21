import React, {useState} from 'react'
import './nav.css'
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai'
import {BiBook, BiMessageSquareDetail} from 'react-icons/bi'
import {sections} from '../../sections'

const icons = {
  AiOutlineHome,
  AiOutlineUser,
  BiBook,
  BiMessageSquareDetail,
};

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')

  function getProps(scrollDepthTag) {
    return {
      key: scrollDepthTag,
      href: scrollDepthTag,
      onClick: () => setActiveNav(scrollDepthTag),
      className: activeNav === scrollDepthTag ? "active" : "",
    }
  }

  return (
    <nav>
      {sections.map(({ anchor, component }) => {
        const IconComponentReference = icons[component];
        return (
          <a {...getProps(anchor)}>
            <IconComponentReference />
          </a>
        );
      })}
    </nav>
  )
}

export default Nav