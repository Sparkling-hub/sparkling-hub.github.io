import React, { MouseEvent } from 'react';

const EmailButton: React.FC = () => {
  const handleEmailButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    window.location.href = "mailto:recipient@example.com";
  };

  return (
    <button onClick={handleEmailButtonClick}>
      Написать письмо
    </button>
  );
};

export default EmailButton;
