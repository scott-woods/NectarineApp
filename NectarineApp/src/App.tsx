import './App.css'
import { Route, Router, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './pages/Home'
import '@mantine/core/styles.css';
import '@mantine/core/styles.css'
import { MantineProvider } from '@mantine/core';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Home />} />
    )
  )

  return (
    <MantineProvider defaultColorScheme='dark'>
      <RouterProvider router={router} />
    </MantineProvider>
  )
}

export default App
