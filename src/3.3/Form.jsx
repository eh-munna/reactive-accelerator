import { useState } from 'react';

export default function Form() {
  const [answer, setAnswer] = useState('');
  const [status, setStatus] = useState('typing');
  const [error, setError] = useState(null);

  const handleTextareaChange = (e) => {
    setError(null);
    setAnswer(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      await submitForm(answer);
      setStatus('success');
    } catch (error) {
      setError(error.message);
      setStatus('typing');
    }
  };

  return (
    <>
      <h2>City quiz</h2>
      <p>
        In which city is there a billboard that turns air into drinkable water?
      </p>
      {status === 'success' ? (
        <p>{answer}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <textarea
            value={answer}
            onChange={handleTextareaChange}
            disabled={status === 'submitting'}
          />
          <br />
          <button disabled={answer.length === 0 || status === 'submitting'}>
            Submit
          </button>
          {error !== null && <p className="Error">{error}</p>}
        </form>
      )}
    </>
  );
}

function submitForm(answer) {
  // Pretend it's hitting the network.
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let shouldError = answer.toLowerCase() !== 'lima';
      if (shouldError) {
        reject(new Error('Good guess but a wrong answer. Try again!'));
      } else {
        resolve();
      }
    }, 1500);
  });
}
