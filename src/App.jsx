import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./layout/Layout"
import HomePage from "./pages/HomePage"



function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/"  element={<HomePage />}/>
          </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
