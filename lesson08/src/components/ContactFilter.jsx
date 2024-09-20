import React, { useEffect, useState } from 'react';

function ContactFilter(props) {
  const { contacts, setContacts } = props;

  const [searchTerm, setSearchTerm] = useState('');
  const [backupContacts, setBackupContacts] = useState(null);

  const handleSearchContact = (e) => {
    const value = e.target.value;
    setSearchTerm(value); 


    if (!backupContacts && contacts.length > 0) {
      setBackupContacts(contacts);
    }

    if (value === '' && backupContacts) {
      setContacts(backupContacts);
    } else if (backupContacts) {

      const filteredContacts = backupContacts.filter((contact) =>
        contact.name.toLowerCase().includes(value.toLowerCase())
      );
      setContacts(filteredContacts); 
    }
  };

  useEffect(() => {

    if (searchTerm === '' && backupContacts) {
      setContacts(backupContacts); 
    }
  }, [searchTerm, backupContacts, setContacts]);

  return (
    <div className="w-full max-w-md mx-auto my-4">
  <input
    className="w-full p-2 border border-gray-300 rounded-md shadow-sm"
    placeholder="Filter Contacts..."
    onChange={handleSearchContact}
    value={searchTerm}
  />
</div>
  );
}

export default ContactFilter;
