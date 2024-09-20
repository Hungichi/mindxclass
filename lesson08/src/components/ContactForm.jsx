import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const ContactForm = (props) => {
  const { handleAddContact, editContact , handleUpdateContact, clearUpdateContact, } = props;

  const isEditContact = editContact !== null;

  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    phone: '',
    contactType: '',
  });

   
  useEffect(() => {
    if(editContact !== null){
      setFormValues(editContact);
    } else {
      setFormValues({
        name: '',
        email: '',
        phone: '',
        contactType: '',
      });
    }
  }, [editContact])


  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();

    if(editContact){
      handleUpdateContact(formValues);
      return;
    };


    const newContact = {
      ...formValues,
      id: uuidv4(),
    };

    handleAddContact(newContact);

    setFormValues({
      name: '',
      email: '',
      phone: '',
      contactType: '',
    });
  };
  const { name, email, phone } = formValues;

  return (
    <div className="w-full max-w-md mx-auto p-6 border rounded-md shadow-lg bg-white">
      <h6 className="text-xl font-semibold text-blue-700 mb-4">Add Contact</h6>
      <form className="flex flex-col gap-4" onSubmit={handleSubmitForm}>
        <input
          className="p-2 border border-gray-300 rounded-md"
          placeholder="Name"
          onChange={handleOnChange}
          value={name}
          name="name"
        />
        <input
      className="p-2 border border-gray-300 rounded-md"
      placeholder="Email"
      onChange={handleOnChange}
      value={email}
      name="email"
    />
    <input
      className="p-2 border border-gray-300 rounded-md"
      placeholder="Phone"
      onChange={handleOnChange}
      value={phone}
      name="phone"
    />
    
    <div>
      <label className="font-medium">Contact Type</label>
      <div className="flex items-center gap-4">
        <label className="flex items-center">
          <input
            type="radio"
            id="personal"
            value="personal"
            name="contactType"
            onChange={handleOnChange}
            className="mr-2"
          />
          Personal
        </label>
        <label className="flex items-center">
          <input
            type="radio"
            id="professional"
            value="professional"
            onChange={handleOnChange}
            name="contactType"
            className="mr-2"
          />
          Professional
        </label>
      </div>
    </div>
    
    <button
      className="bg-blue-700 text-white font-medium p-2 mt-4 rounded-md hover:bg-blue-800 transition"
      type="submit"
    >
      {isEditContact ? 'Update Contact' : 'Add Contact'}
    </button>

    {isEditContact && (
      <button
        className="bg-gray-500 text-white font-medium p-2 mt-2 rounded-md hover:bg-gray-600 transition"
        onClick={clearUpdateContact}
      >
        Clear
      </button>
    )}
  </form>
</div>
  );
};

export default ContactForm;
