import React from 'react';

const ContactList = contacts => {
  console.log(contacts);
  const contact = contacts;
  return (
    <ul>
      {contact.map(contac => {
        console.log(contac);
        return (
          <li key={contac.id}>
            {contac.name}: {contac.number}
            <button>Delete contact</button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
