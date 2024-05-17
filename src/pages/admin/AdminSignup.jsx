import React from 'react';
import SignupForm from '../../components/SignupForm';
import adminSignupBg from '../../assets/admin/adminSignup-bg.png';

function AdminSignup() {
  return <SignupForm bgImage={adminSignupBg} loginLink="/adminLogin" className="flex justify-end"/>;
}

export default AdminSignup;
