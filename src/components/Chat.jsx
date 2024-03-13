export default function Chat({ contact, onTextMessage, message }) {
  return (
    <section className="chat">
      <textarea
        value={message}
        placeholder={'Chat to ' + contact.name}
        onChange={(e) =>
          onTextMessage({
            ...contact,
            message: e.target.value,
          })
        }
      />
      <br />
      <button>Send to {contact.email}</button>
    </section>
  );
}
