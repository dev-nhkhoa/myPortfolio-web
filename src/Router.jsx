import Home from './pages/Home/Home'

import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([{ path: '/', element: <Home /> }])

export { router }
