import react from 'react';
import {route, routes} from "react-router-dom";
import Login from './componentes/login'

function App(){
  return(
    <div className='app'>
      <route>
        <route path="/" element={<Login/>}></route>
      </route>
    </div>
  );
  /**
  * 


import ClientsAdmin from './components/clients/ClientsAdmin';
import ClientsAdd from './components/clients/ClientsAdd';
import ClientsEdit from './components/clients/ClientsEdit';

import UsersAdmin from './components/clients/UsersAdmin';
import UsersAdd from './components/clients/UsersAdd';
import UsersEdit from './components/clients/UsersEdit';

  * 

       <Route path="/clients" element={<ClientsAdmin />}></Route>
       <Route path="/clients/add" element={<ClientsAdd />}></Route>
       <Route path="/clients/edit" element={<ClientsEdit />}></Route>
       <Route path="/users" element={<UsersAdmin />}></Route>
       <Route path="/users/add" element={<UsersAdd />}></Route>
       <Route path="/users/edit" element={<UsersEdit />}></Route>
  * 
  */
  }
  export default App;
  