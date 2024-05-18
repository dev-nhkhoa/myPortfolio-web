import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import { Experimental_CssVarsProvider as MuiProvider } from '@mui/material'

import './App.css'
import { theme } from './theme'
import { router } from './Router'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MuiProvider theme={theme}>
      <RouterProvider router={router} />
    </MuiProvider>
  </React.StrictMode>
)
