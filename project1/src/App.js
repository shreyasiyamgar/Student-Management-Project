import React, { useState } from 'react';
import RegistrationPage from './Project/RegistrationPage.jsx';
import LoginPage from './Project/LoginPage.jsx';

import Navbar from './Project/Navbar.jsx';


function App() {
  
   const [page,setPage]=useState('register')
  const goToLogin=()=>setPage('login')
  const goToHome=()=>setPage('home')
  const goToRegister=()=>setPage('register')
  
  

  return (

     <div>
     
  {page === 'register' && <RegistrationPage onContinue={goToLogin} />}
  {page === 'login' && <LoginPage onLoginSuccess={goToHome} />}
  {page === 'home' && <Navbar onLogout={goToRegister} />}
        

    </div>

    
  );
}

export default App;

// import './App.css';
// import Navbar from './Project/Navbar';

// //import Checkbox from './Components/Checkbox';
// //import Dropdown from './Components/Dropdown';
// //import ProductManager from './Hooks/product';
// //import PropDrilling from './Hooks/PropDrilling';
// //import UseContext from './Hooks/UseContext';
// //import UseState from './Hooks/UseState';
// //import UseEffect from './Hooks/UseEffect';
// //import ProductCards from './Hooks/card'
// //import FormHandling  from './Components/FormHandling';
// //import StudentLogin  from './Components/StudentLogin';
// //import Nav  from './Router/nav';
// //import HomeWork  from './Project/HomeWork';
// //import Login from './Components/Login'

// //  import SchoolLoginPage from './Project/SchoolLoginPage';
// //  import SchoolRes from './Project/SchoolRes.jsx';
// //  import { BrowserRouter, Route, Routes } from 'react-router-dom';
// // import Home from './Project/Home.jsx';

// function App() {
//   return (
//     //<Home/>
   
   
//    <Navbar/>
    

//   )
// }
// //      // <SchoolLoginPage/>
    


// // const App = () => {
// //   return (
// //     <Navbar/>
// //   );
// // };

// export default App;
    
// //     //<ProductManager/>
// //     //<ProductCards/>
// //     //<UseEffect/>
// //     //<UseState/>
// //     //<PropDrilling/>
// //     //<UseContext/>
// //    // <FormHandling/>
// //    //<StudentLogin/>
// //    //<Nav/>
// //    //<HomeWork/>
// //    //<Checkbox/>
// //    //<Dropdown/>
// //    //<Login/>
// //    //<Login/>
    
// //   )
// // }

// // export default App;
