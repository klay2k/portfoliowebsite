import React from 'react'
import Nav from './components/nav/Nav'
import Footer from './components/footer/Footer'

import { sections } from './sections'

const App = () => {
  return (
    <>
      {sections.map((s) => {
        return <s.component key={s.anchor} />;
      })}
      <Nav />
      <Footer />
    </>
  )
}

export default App