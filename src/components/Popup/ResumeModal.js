import React from 'react';

const ResumeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Don't render if modal is closed

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h2>Pop-up Blocked</h2>
        <p>Your browser blocked the resume from opening. Click below to open it manually.</p>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.button}
        >
          Open Resume
        </a>
        <button onClick={onClose} style={styles.closeButton}>Close</button>
      </div>
    </div>
  );
};

// Inline styles for simplicity
const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000
  },
  modal: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    textAlign: 'center',
    width: '80%',
    maxWidth: '400px'
  },
  button: {
    display: 'inline-block',
    marginTop: '10px',
    padding: '10px 15px',
    backgroundColor: '#007bff',
    color: '#fff',
    borderRadius: '5px',
    textDecoration: 'none'
  },
  closeButton: {
    display: 'block',
    marginTop: '10px',
    padding: '8px',
    backgroundColor: '#ccc',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  }
};

export default ResumeModal;
