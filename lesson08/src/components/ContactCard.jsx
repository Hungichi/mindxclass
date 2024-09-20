import React from 'react';

const ContactCard = ({data , handleDeleteContact, handelChoseContact }) => {
  const { name, phone, email, contactType, id } = data;


  return (
    <div className="border p-4 rounded-md shadow-md bg-gray-100 flex flex-col justify-between">
    <h6 className="text-lg font-semibold text-blue-700">{name}</h6>
    <p className="text-gray-700">{phone}</p>
    <p className="text-gray-700">{email}</p>
    <p className="text-gray-600">
    <b>Type</b>: 
    <span className={`ml-2 ${contactType === 'professional' ? 'bg-green-600' : 'bg-blue-700' } text-white rounded-full px-2 py-1`}>
  {contactType === 'professional' ? 'professional' : 'Personal'}
</span>
  </p>
  
  <div className="flex gap-4 mt-4">
    <button
      className="bg-gray-700 text-white font-medium px-3 py-1 rounded-md hover:bg-gray-800 transition"
      onClick={() => handelChoseContact(id)}
    >
      Edit
    </button>
    <button
      className="bg-red-500 text-white font-medium px-3 py-1 rounded-md hover:bg-red-600 transition"
      onClick={() => handleDeleteContact(id)}
    >
      Delete
    </button>
  </div>
</div>
  );
};

export default ContactCard;
