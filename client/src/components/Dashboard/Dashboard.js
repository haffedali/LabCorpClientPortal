import React, { useState } from "react";
import { useSelector } from "react-redux";
import { SideBar } from '../';

import TempLogin from './TempLogin';

const Dashboard = () => {
  const session = useSelector(state => state.session);
  const [isSigningUp, setIsSigningUp] = useState(false);

  if (session) return <SideBar />;

  return isSigningUp ? (
    <h1>isSigningUp</h1>
  ) : (
    <TempLogin onChangeToSignUp={() => setIsSigningUp(true)} />
  );
};

export default Dashboard;