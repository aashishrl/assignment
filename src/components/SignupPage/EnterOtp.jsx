import React from 'react';

const EnterOTP = ({
  input,
  otp,
  otpRefs,
  handleOTPChange,
  handleVerifyOTP,
  timeLeft,
  canResend,
  handleResendCode,
  isOtpComplete,
}) => {
  // Function to mask phone numbers and emails
  const maskInput = (input) => {
    if (!input) return '';

    // Check if it's a phone number
    if (/^\d{10}$/.test(input)) {
      return '********' + input.slice(-2); // Mask all but last 2 digits
    }

    // Check if it's an email
    if (/^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(input)) {
      const [localPart, domain] = input.split('@');
      if (localPart.length <= 2) {
        // Handle very short local parts (e.g., "a@gm.com")
        return localPart + '@' + domain;
      }
      const maskedLocalPart =
        localPart[0] + '*'.repeat(localPart.length - 2) + localPart.slice(-1);
      return maskedLocalPart + '@' + domain;
    }

    return input; // Return unmasked input if not a phone number or email
  };

  // Determine the title dynamically
  const getTitle = () => {
    if (/^\d{10}$/.test(input)) {
      return 'Verify your Phone Number';
    }
    if (/^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(input)) {
      return 'Verify your Email';
    }
    return 'Verify your Input'; // Fallback title
  };

  return (
    <div>
      <img src="../../Logo/logo-87.png" className="logo" alt="" />
      <h2 className="emailVerificationTitle">{getTitle()}</h2>
      <p className="code-instruction">
        Please enter the code sent to your <span>{maskInput(input)}</span>
      </p>
      <div className="input-div">
        {otp.map((digit, index) => (
          <React.Fragment key={index}>
            <input
              className="otp-input"
              type='number'
              maxLength={1}
              value={digit}
              onChange={(e) => handleOTPChange(e, index)}
              ref={(el) => (otpRefs.current[index] = el)}
            />
            {index === 2 && <span className="otp-hyphen"></span>}
          </React.Fragment>
        ))}
      </div>
      <button
        className={`verify-button ${isOtpComplete ? 'enabled' : 'disabled'}`}
        onClick={handleVerifyOTP}
        disabled={!isOtpComplete}
      >
        Verify
      </button>
      {canResend ? (
        <p className="resend-code-text">
          Didn’t receive a code?&nbsp;
          <span onClick={handleResendCode}>Resend Code</span>
        </p>
      ) : (
        <p className="wait-text">
          Wait {timeLeft} seconds before requesting a new code.
        </p>
      )}
      <div className="agreementDisclaimer">
        <p>
          By continuing, you’re agreeing to Nobody’s <span>Terms of Service</span>,{' '}
          <span>Privacy Policy</span>, and <span>Cookie Policy</span>.
        </p>
      </div>
    </div>
  );
};

export default EnterOTP;
