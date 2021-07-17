import React, { Component } from 'react';
// import { v4 as uuidv4 } from 'uuid';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';

class Phonebook extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmit = data => {
    console.log(data);
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmit} />

        <h2>Contacts</h2>
        <Filter />
        <ContactList contacts={this.state.contacts} />
      </div>
    );
  }
}

export default Phonebook;
