import React from 'react';
import ContactCard from './ContactCard';
const ManageContacts = ({ contacts,  handleDeleteContact , handelChoseContact}) => {


  return (                                                                                                                                                                                                                                     
    <div className="flex flex-col gap-4">
  {contacts.map((contact) => (
    <ContactCard
      data={contact}
      key={contact?.id}
      handleDeleteContact={handleDeleteContact}
      handelChoseContact={handelChoseContact}
    />
  ))}
</div>
  );
};

export default ManageContacts;
