import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from 'react-router-dom';

import { SideBar } from '../';
import { LogIn, Register } from '../../pages';

const Dashboard = () => {
  const session = useSelector(state => state.session);
  const location = useLocation();
  const contactId = location.search.replace('?contactId=', '');
  console.log('Dashboard Contact ID!!!: ', contactId)
  const [ isSigningUp, setIsSigningUp ] = useState(contactId ? true : false);

  if (session) return <SideBar />;

  return isSigningUp ? (
    <Register onChangeToLogin={() => setIsSigningUp(false)} contactId={contactId} />
  ) : (
    <LogIn onChangeToSignUp={() => setIsSigningUp(true)} />
  );
};

export default Dashboard;