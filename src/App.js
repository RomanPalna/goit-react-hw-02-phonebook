import React, { Component } from 'react';
import Phonebook from './components/Phonebook';
import Contacts from './components/Contacts';
import Finder from './components/Finder';
import shortid from 'shortid';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  addContact = (name, number) => {
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  findContact = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  showContact = () => {
    const { filter, contacts } = this.state;
    const normalizeName = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeName),
    );
  };

  render() {
    return (
      <>
        <Phonebook onSubmit={this.addContact} />;
        <Finder value={this.filter} onChange={this.findContact} />
        <Contacts contacts={this.showContact()} />
      </>
    );
  }
}

export default App;
