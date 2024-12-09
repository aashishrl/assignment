import React from 'react';

const EnterPhone = ({ input, setInput, error, handleSendOTP }) => {
  return (
    <div>
      <img src="../../Logo/logo-87.png" className="logo" alt="" />
      <h3 className="emailVerificationTitle">Enter your Email or Phone Number </h3>
      <p className="code-instruction">We will send you the 6 digit verification code.</p>
      <input
        className="phone-email-input"
        placeholder="Enter your email/phones"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      {error && <p className="error-text">{error}</p>}
      <button className="phone-email-submit" type="primary" onClick={handleSendOTP}>
        Send OTP
      </button>
    </div>
  );
};

export default EnterPhone;
