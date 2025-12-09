import { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({ name: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message sent!\n\nFrom: ${formData.name}\nMessage: ${formData.message}`);
    setFormData({ name: '', message: '' }); // reset form
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: '2rem' }}>
      <h3>Contact Me</h3>
      <input
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        style={{ display: 'block', marginBottom: '1rem', padding: '0.5rem' }}
        required
      />
      <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        style={{ display: 'block', marginBottom: '1rem', padding: '0.5rem', width: '100%' }}
        required
      />
      <button type="submit" style={{ padding: '0.5rem 1rem' }}>Send</button>
    </form>
  );
}

export default ContactForm;
