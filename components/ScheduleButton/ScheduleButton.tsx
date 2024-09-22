import React from 'react';

const ScheduleButton: React.FC = () => {
  const handleClick = () => {
    (window as any).Calendly.initPopupWidget({
      url: 'https://calendly.com/w-mkl-corp', // Replace with your Calendly link
    });
    return true; // Prevent default anchor behavior
  };

  return (
    <button onClick={handleClick} style={buttonStyle}>
      Schedule Time With Me
    </button>
  );
};

const buttonStyle: React.CSSProperties = {
  padding: '10px 20px',
  backgroundColor: '#4CAF50', // Customize the button color
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '16px',
  transition: 'background-color 0.3s ease',
};

export default ScheduleButton;