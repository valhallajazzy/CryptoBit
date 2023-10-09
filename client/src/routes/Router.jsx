import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {routes} from './routes.data'
import NotFound from '../components/screens/notFound/NotFound'

const Router = () => {
  return (
		<BrowserRouter>
      <Routes>
      {routes.map(route => 
					<Route
						key={route.path}
						path={route.path}
						element={<route.component />}
					/>
			)}
				<Route path='*' element={<NotFound/>} />
      </Routes>
    </BrowserRouter>

  )
}

export default Router