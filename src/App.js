import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Fantasy from "./fantasy";


function App() {
  return (

          <BrowserRouter>
              <div className="container-fluid">
                  <Routes>
                      <Route index path="/*"
                             element={<Fantasy />}/>
                  </Routes>
              </div>
          </BrowserRouter>


  );
}

export default App;
