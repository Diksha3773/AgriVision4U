import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Algebra from './components/AllSubjectsquiz/Maths/Algebra';
import Geometry from './components/AllSubjectsquiz/Maths/Geometry';
import Questionpage from './pages/Questionpage';

import Sectionpage from './pages/Sectionpage'
const AppRouter=()=> {
  return (
    <div>
   <Router>
    <Routes>

        <Route>
          <Route  exact path='/' element={<Sectionpage />} />
          <Route  exact path='/Questions' element={< Questionpage/>} />
          <Route  exact path='/Geometry' element={< Geometry/>} />
          <Route  exact path='/Algebra' element={< Algebra/>} />



        </Route>
    </Routes>
   </Router>




    </div>
  )
}

export default AppRouter