import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/My project (2).png'
import HeaderSocial from './HeaderSocials'
import { sections } from '../../sections'

const Header = () => {
  function getNextSection() {
    // Get the index of the next section, if it's out of bounds then wrap to beginning
    const currentSection = window.location.hash || "#";
    const nextSectionIndex =
      sections.findIndex((s) => s.anchor === currentSection) + 1;
    const wrappedValue = nextSectionIndex % sections.length;

    // Set page location to the new anchor
    window.location.hash = sections[wrappedValue].anchor;
  }

  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Clayton Hiebert</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocial />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <div onClick={getNextSection} className="scroll__down">
          Next Section
        </div>
      </div>
    </header>
  )
}

export default Header