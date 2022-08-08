import React from 'react'
import './App.css';
import InputForm from './components/form/Form';
import ContactTable from './components/table/Table';
import { useState } from "react";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [gender, setGender] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [id, setId] = useState("");
  const [contacts, setContacts] = useState([]);
  const [edit, setEdit] = useState(false);

 const editContact = (e) =>{
  setName(e.name)
  setPhone(e.phone)
  setGender(e.gender)
  setId(e.id)
  setEdit(true)
 }


  return (
    <div  className="App d-flex ">
        <InputForm  
          setContacts={setContacts} 
          contacts={contacts}
          edit={edit}
          setEdit={setEdit}
          name={name}
          setName={setName}
          phone={phone}
          gender={gender}
          setPhone={setPhone}
          setGender={setGender}
          id={id} />
        <ContactTable
         contacts={contacts}
         edit={edit}
          setEdit={setEdit}
          editContact={editContact}
          name={name}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
          gender={gender}
          setGender={setGender}
         />
         <ToastContainer />
    </div>
  );
}

export default App