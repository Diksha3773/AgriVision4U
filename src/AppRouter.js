import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Sectionpage from './pages/Sectionpage'
const AppRouter=()=> {
  return (
    <div>
   <Router>
    <Routes>

        <Route>
          <Route  exact path='/' element={<Sectionpage />} />
        </Route>
    </Routes>
   </Router>




    </div>
  )
}

export default AppRouter