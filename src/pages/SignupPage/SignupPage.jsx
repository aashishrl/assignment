import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignupPage.css';
import validateInput from '../../utils/ValidateInput';
import EnterOTP from '../../components/SignupPage/EnterOtp';
import EnterPhone from '../../components/SignupPage/EnterPhone';

const SignupPage = () => {
  const [step, setStep] = useState('enterPhone');
  const [input, setInput] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [timeLeft, setTimeLeft] = useState(110);
  const [canResend, setCanResend] = useState(false);
  const [isOtpComplete, setIsOtpComplete] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const otpRefs = useRef([]);

  const handleSendOTP = () => {
    const validation = validateInput(input);
    if (!validation.isValid) {
      setError(validation.message);
      return;
    }
    setError('');
    setStep('enterOTP');
    setTimeLeft(99);
    setCanResend(false);
  };

  const handleVerifyOTP = () => navigate('/intermediate');

  const handleOTPChange = (e, index) => {
    const newOtp = [...otp];
    newOtp[index] = e.target.value;
    if (e.target.value && index < otp.length - 1) otpRefs.current[index + 1].focus();
    setOtp(newOtp);
  };

  const handleResendCode = () => {
    setTimeLeft(99);
    setCanResend(false);
  };

  useEffect(() => {
    if (step === 'enterOTP' && timeLeft > 0) {
      const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0) {
      setCanResend(true);
    }
  }, [timeLeft, step]);

  useEffect(() => {
    setIsOtpComplete(otp.every((digit) => digit !== ''));
  }, [otp]);

  return (
    <div className="signup-page">
      <div className="container">
        {step === 'enterPhone' ? (
          <EnterPhone
            input={input}
            setInput={setInput}
            error={error}
            handleSendOTP={handleSendOTP}
          />
        ) : (
          <EnterOTP
            input={input}
            otp={otp}
            setOtp={setOtp}
            otpRefs={otpRefs}
            handleOTPChange={handleOTPChange}
            handleVerifyOTP={handleVerifyOTP}
            timeLeft={timeLeft}
            canResend={canResend}
            handleResendCode={handleResendCode}
            isOtpComplete={isOtpComplete}
          />
        )}
      </div>
    </div>
  );
};

export default SignupPage;
