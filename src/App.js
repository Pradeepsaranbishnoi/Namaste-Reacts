import Body from "./Components/Body/Body"
import Header from "./Components/Header/Header"
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";


function App() {
  return (
    <>
    <Header/>
    <BrowserRouter>    
      <Routes>
        <Route exact path='/' errorElement={<>this is 404 page</>} element={ <Body/>}/> 
        <Route exact path='/about-us' element={<>This is about us sectoin</>}/>
        <Route exact path='/contact-us' element={<>This is contact us page</>}/>   
        <Route path="*" element={"This is the 404 page"} />
      </Routes>
    </BrowserRouter>
    
    </>)
}
export default App;