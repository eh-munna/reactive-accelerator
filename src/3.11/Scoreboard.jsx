// import { useState } from 'react';

// export default function Scoreboard() {
//   const [isPlayerA, setIsPlayerA] = useState(true);
//   const [scoreA, setScoreA] = useState(0);
//   const [scoreB, setScoreB] = useState(0);

//   function handleScore() {
//     if (isPlayerA) {
//       setScoreA(scoreA + 1);
//     } else {
//       setScoreB(scoreB + 1);
//     }
//   }
//   return (
//     <div className="border border-gray-100 p-3 w-[200px]">
//       {isPlayerA ? (
//         <Counter
//           person={'Taylor'}
//           key="Taylor"
//           score={scoreA}
//           handleScore={handleScore}
//         />
//       ) : (
//         <Counter
//           person={'Sarah'}
//           key="Sarah"
//           score={scoreB}
//           handleScore={handleScore}
//         />
//       )}
//       <button
//         onClick={() => {
//           setIsPlayerA(!isPlayerA);
//         }}
//       >
//         Next player!
//       </button>
//     </div>
//   );
// }

// function Counter({ person, handleScore, score }) {
//   return (
//     <div>
//       <h1>
//         {person}&apos;s score: {score}
//       </h1>
//       <button className="p-1 border rounded-md my-1" onClick={handleScore}>
//         Add one
//       </button>
//     </div>
//   );
// }

import { useState } from 'react';

export default function Messenger() {
  const [selectedContact, setSelectedContact] = useState(contacts[0]);
  const [messages, setMessages] = useState({});

  const handleMessage = (e) => {
    const newMessage = e.target.value;
    setMessages((prevMessages) => ({
      ...prevMessages,
      [selectedContact.id]: newMessage,
    }));
  };

  return (
    <div>
      <ContactList
        contacts={contacts}
        selectedContact={selectedContact}
        onSelect={(contact) => setSelectedContact(contact)}
      />
      <Chat
        contact={selectedContact}
        message={messages[selectedContact.id] || ''}
        handleMessage={handleMessage}
        key={selectedContact.id}
      />
    </div>
  );
}

const contacts = [
  { id: 0, name: 'Taylor', email: 'taylor@mail.com' },
  { id: 1, name: 'Alice', email: 'alice@mail.com' },
  { id: 2, name: 'Bob', email: 'bob@mail.com' },
];

function ContactList({ selectedContact, contacts, onSelect }) {
  return (
    <section className="contact-list">
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <button onClick={() => onSelect(contact)}>{contact.name}</button>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Chat({ contact, message, handleMessage }) {
  return (
    <section className="chat">
      <textarea
        value={message}
        placeholder={`Chat to ${contact.name}`}
        onChange={handleMessage}
      />
      <br />
      <button>Send to {contact.email}</button>
    </section>
  );
}
