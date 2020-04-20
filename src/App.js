import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/appStructure/navbar";
import {BrowserRouter , Route, withRouter} from 'react-router-dom';
import UserInformation from "./components/userInformation/UserInformation";
import Login from "./components/login/Login";
import About from "./components/about/about";
import Content from "./components/content/Content";


const Main = withRouter(({ location})=>{
    return(
        <div>

            {
                location.pathname !=='/login'&& <NavBar/>
            }
            <Route path="/home" component={UserInformation}/>
            <Route path="/login" exact component={Login }/>
            <Route path="/about" component={About}/>
            <Route path="/content" component={Content}/>

        </div>
    )
})


const App = ()=> (
    <BrowserRouter>
        <Main/>
    </BrowserRouter>
);

export default App;
