import { useState } from 'react';


import ContactForm from './components/ContactForm';
import ManageContacts from './components/ManageContacts';
import ContactFilter from './components/ContactFilter';
import Header from './components/Header';

import './App.css';

function App() {
  const [contacts, setContacts] = useState([]);
  const [editContact, setEditContact] = useState(null);

  const handleAddContact = (newContact) => {
    setContacts([...contacts, newContact]);
    
  };

  const handleDeleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  const handelChoseContact = (id) =>{
    const chosecontact = contacts.find((contact) => contact.id === id );
    setEditContact(chosecontact)
  }
  const handleUpdateContact = (oldContact)=>{
    const CloneContact = [...contacts]
    const UpdateContactIndex = contacts.findIndex((contact)=> contact.id === oldContact.id);
    CloneContact[UpdateContactIndex] = oldContact;
    setContacts(CloneContact);
    console.log("contact updated")
  }

  const clearUpdateContact = () => {
    setEditContact(null);
  };
  return (

    <div className="max-w-6xl mx-auto p-6">
  <Header />

  <div className="p-3 flex gap-x-3">
    <div className="w-1/2">
      <ContactForm
        clearUpdateContact={clearUpdateContact}
        handleUpdateContact={handleUpdateContact}
        editContact={editContact}
        handelChoseContact={handelChoseContact}
        handleAddContact={handleAddContact}
      />
    </div>


    <div className="w-1/2">
      <ContactFilter setContacts={setContacts} contacts={contacts} />
      <ManageContacts
        handelChoseContact={handelChoseContact}
        handleDeleteContact={handleDeleteContact}
        contacts={contacts}
      />
    </div>
  </div>
</div>
  );
}

export default App;
