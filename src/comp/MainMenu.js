import React from 'react'
import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Calculator from './Calculator'
import Basics from './Basics'
import Tablepages from './Tablepages'
import { Button } from 'semantic-ui-react'
import Simple from './Simple'

export default function MainMenu() {



  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Myitems />}>
            <Route index element={<Home />} />
            <Route path="calc" element={<Calculator />} />
            <Route path="basics" element={<Basics />} />
            <Route path="tables" element={<Tablepages />} />
            <Route path="simple" element={<Simple />} />
            {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  )
}

function Myitems(params) {
  return (
    <>

      <Link to="/">
        <Button color='blue'>Home</Button>
      </Link>

      <Link to="/calc">
        <Button color='teal'>Calculator</Button>
      </Link>

      <Link to="/basics">
        <Button color='green'>Basics</Button>
      </Link>
      
      <Link to="/tables">
        <Button color='pink'>Tables</Button>
      </Link>
      
      <Link to="/simple">
        <Button color='pink'>Simple</Button>
      </Link>

      <Outlet />
    </>
  )
}