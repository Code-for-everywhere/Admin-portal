
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Dashboard from "./Dashboard/Dashboard"
import Content from "./Dashboard/Content"
import Award from "./component/Award"
import Career from "./component/Carrer"
import Blog from "./component/Blog"
import Gallery from "./component/Gallery"
import Team from "./component/Team"
import Testimonoial from "./component/Testimonial"
import Events from "./component/Events"
import GetInTouch from "./component/GetInTouch"
import Services from "./component/Services"
import Login from "./authentication/Login"


export default function App(){
  return(

    <BrowserRouter>

    <Routes>
      <Route path="/" element = {<AppLayout/>} >
      
      {/* <Route path="/dashboard" element={<Dashboard />} > */}
      <Route path="/content" element={<Content />} />
      <Route path="/award" element={<Award/>} />
      <Route path = "/career" element = {<Career/>} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/gallery" element={<Gallery/>} />
      <Route path = "/team" element = {<Team/>} />
      <Route path="/testimonial" element={<Testimonoial />} />
      <Route path="/events" element={<Events/>} />
      <Route path = "/getInTouch" element = {<GetInTouch/>} />
      <Route path = "/service" element = {<Services/>} />
      
      <Route path="/error" element={<Error/>}/>
      <Route path="/services" element={<Services/>}/>
      </Route>
      {/* </Route> */}
      <Route path="/login" element={<Login/>}/>
    </Routes>
    </BrowserRouter>
  )
}

const AppLayout = () => {
 
  return (
    <>
      <Dashboard />
     
    </>
  );
}
