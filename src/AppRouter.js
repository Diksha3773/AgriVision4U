import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Questionpage from './pages/Questionpage';
import Circles from './components/AllSubjectsquiz/Maths/Circles';
import General from './components/AllSubjectsquiz/General';

import Sectionpage from './pages/Sectionpage'
import Triangles from './components/AllSubjectsquiz/Maths/Geometry/Triangles';

import Linearequations from './components/AllSubjectsquiz/Maths/Algebra/Linearequations';
import Relations from './components/AllSubjectsquiz/Maths/Algebra/Relations';
import Vectorspaces from './components/AllSubjectsquiz/Maths/Algebra/Vectorspaces';
import Pythagoras from './components/AllSubjectsquiz/Maths/Trigonometry/Pythagoras';
import Rightangles from './components/AllSubjectsquiz/Maths/Trigonometry/Rightangles';
const AppRouter=()=> {
  return (
    <div>
   <Router>
    <Routes>

        <Route>
          <Route  exact path='/' element={<Sectionpage />} />
          <Route  path='/Questions' element={< Questionpage/>} />
          <Route  path='/Circles' element={< Circles/>} />
          <Route  path='/General' element={< General/>} />
          <Route  path='/Triangles' element={< Triangles/>} />
        
          <Route  path='/Linearequations' element={<Linearequations/>} />
          <Route  path='/Relations' element={<Relations/>} />
          <Route  path='/Vectorspaces' element={<Vectorspaces/>} />
          <Route  path='/Pythagoras' element={<Pythagoras/>} />
          <Route  path='/Rightangles' element={<Rightangles/>} />













        </Route>
    </Routes>
   </Router>




    </div>
  )
}

export default AppRouter