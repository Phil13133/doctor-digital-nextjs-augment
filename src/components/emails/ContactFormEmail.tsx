import React from 'react';

interface ContactFormEmailProps {
  name: string;
  email: string;
  phone?: string;
  company?: string;

  message: string;
  subjectLine: string;
}

export const ContactFormEmail: React.FC<ContactFormEmailProps> = ({
  name,
  email,
  phone,
  company,
  message,
  subjectLine,
}) => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto' }}>
      <div style={{ backgroundColor: '#f9fafb', padding: '20px', borderRadius: '8px', marginBottom: '20px' }}>
        <h2 style={{ color: '#16a34a', marginBottom: '16px' }}>Νέο μήνυμα από τη φόρμα επικοινωνίας</h2>
        <p style={{ marginBottom: '8px' }}><strong>Όνομα:</strong> {name}</p>
        <p style={{ marginBottom: '8px' }}><strong>Email:</strong> {email}</p>
        {phone && <p style={{ marginBottom: '8px' }}><strong>Τηλέφωνο:</strong> {phone}</p>}
        {company && <p style={{ marginBottom: '8px' }}><strong>Εταιρεία/Ιατρείο:</strong> {company}</p>}
        <p style={{ marginBottom: '8px' }}><strong>Υπηρεσία:</strong> {subjectLine}</p>
      </div>

      <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', border: '1px solid #e5e7eb' }}>
        <h3 style={{ color: '#374151', marginBottom: '12px' }}>Μήνυμα:</h3>
        <div style={{ whiteSpace: 'pre-wrap', color: '#4b5563' }}>
          {message}
        </div>
      </div>

      <div style={{ marginTop: '24px', padding: '16px', borderTop: '1px solid #e5e7eb', fontSize: '14px', color: '#6b7280', textAlign: 'center' }}>
        <p>Αυτό το email στάλθηκε από τη φόρμα επικοινωνίας του <a href="https://doctordigital.gr" style={{ color: '#16a34a', textDecoration: 'none' }}>Doctor Digital</a>.</p>
      </div>
    </div>
  );
};

export default ContactFormEmail;
