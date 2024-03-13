import { useState } from 'react';
import Chat from './Chat';
import ContactList from './ContactList';

const contacts = [
  { id: 0, name: 'Taylor', email: 'taylor@mail.com', message: '' },
  { id: 1, name: 'Alice', email: 'alice@mail.com', message: '' },
  { id: 2, name: 'Bob', email: 'bob@mail.com', message: '' },
];

const initialMessage = (contacts) => {
  return contacts.reduce((prev, curr) => {
    return {
      ...prev,
      [curr.id]: curr.message,
    };
  }, {});
};

export default function Messenger() {
  const [messages, setMessages] = useState(initialMessage(contacts));
  const [to, setTo] = useState(contacts[0]);

  const handleTextMessage = (contact) => {
    setMessages((prevMessages) => ({
      ...prevMessages,
      [contact.id]: contact.message,
    }));
  };

  return (
    <div>
      <ContactList contacts={contacts} onSelect={(contact) => setTo(contact)} />
      <Chat
        key={to.id}
        contact={to}
        onTextMessage={handleTextMessage}
        message={messages[to.id]}
      />
    </div>
  );
}
