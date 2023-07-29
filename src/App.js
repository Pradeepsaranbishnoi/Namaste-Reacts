import About from "./Components/About";
import Body from "./Components/Body"
import Contact from "./Components/Contact";
import Header from "./Components/Header"
import ResMenu from "./Components/ResMenu"
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import { lazy, Suspense } from "react";

function App() {

  const Grocery = lazy(()=> import('./Components/Grocery'))
  
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path='/' errorElement={<>this is 404 page</>} element={<Body />} />
          <Route exact path='/about-us' element={<About />} />
          <Route exact path='/contact-us' element={<Contact />} />
          <Route exact path='/grocery' element={<Suspense fallback={<><h1>Loading...</h1></>}><Grocery /></Suspense>} />
          <Route exact path='/restaurants/:res' element={<ResMenu />} />
          <Route path="*" element={"This is the 404 page"} />
        </Routes>
      </BrowserRouter>

    </>)
}
export default App;