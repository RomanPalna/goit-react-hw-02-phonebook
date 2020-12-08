import React, { Component } from 'react';
import Phonebook from './components/Phonebook';
import Contacts from './components/Contacts';
import Finder from './components/Finder';
import shortid from 'shortid';

const сontactFinder = (contacts, contact) =>
  contacts.find(item => item.name.toLowerCase() === contact.name.toLowerCase());

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = (name, number) => {
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };

    const findContactName = сontactFinder(this.state.contacts, contact);

    if (contact.name) {
      findContactName
        ? alert(`${contact.name} is already in contact list!`)
        : this.setState(({ contacts }) => ({
            contacts: [contact, ...contacts],
          }));
    }
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

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    return (
      <div>
        <h2>Phonebook</h2>
        <Phonebook onSubmit={this.addContact} />

        <h2>Contacts</h2>
        <Finder value={this.filter} onChange={this.findContact} />
        <Contacts
          contacts={this.showContact()}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
