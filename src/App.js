import React, { Component } from 'react';
import Phonebook from './components/Phonebook';
import Contacts from './components/Contacts';
import shortid from 'shortid';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
  };

  addContact = ({ name, number }) => {
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  render() {
    const contactList = this.state.contacts;

    return (
      <>
        <Phonebook onSubmit={this.addContact} />;
        <Contacts contacts={contactList} />
      </>
    );
  }
}

export default App;
