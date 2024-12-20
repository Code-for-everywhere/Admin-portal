
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Dashboard from "./Dashboard/Dashboard"
import Content from "./Dashboard/Content"
import Login from "./authentication/Login"
import Error from "./authentication/Error"


export default function App(){
  return(

    <BrowserRouter>

    <Routes>
      <Route path="/" element = {<AppLayout/>} >
      {/* <Route path="/dashboard" element={<Dashboard />} > */}
      <Route path="content" element={<Content />} />
      </Route>
      <Route path="/login" element={<Login/>}/>
      <Route path="/error" element={<Error/>}/>
      {/* </Route> */}
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
