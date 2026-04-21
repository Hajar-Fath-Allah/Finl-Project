import { useState } from 'react';

const FormPage = () => {
  const [response, setResponse] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    // Step 5: Send to httpbin
    const res = await fetch('https://httpbin.org/post', {
      method: 'POST',
      body: JSON.stringify(data),
    });
    const json = await res.json();
    setResponse(json);
  };

  return (
    <div className="container">
      <h2>Submit Your Details</h2>
      <form onSubmit={handleSubmit}>
        {/* Three different input types required */}
        <input type="text" name="username" placeholder="Name" required />
        <input type="email" name="userEmail" placeholder="Email" required />
        <input type="date" name="submissionDate" required />
        <button type="submit">Send Data</button>
      </form>

      {/* Step 6: Show response on page */}
      {response && (
        <pre style={{ background: '#f4f4f4', padding: '10px', marginTop: '20px' }}>
          {JSON.stringify(response, null, 2)}
        </pre>
      )}
    </div>
  );
};

export default FormPage;