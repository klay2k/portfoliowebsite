import React, {useState} from 'react'
import './nav.css'
import {sections} from '../../sections'

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
      {sections.map(({ anchor, navIcon: IconComponentReference }) => {
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