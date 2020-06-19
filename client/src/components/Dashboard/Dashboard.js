import React, { useState } from "react";
import { useSelector } from "react-redux";
import { SideBar, NewLogin } from '../';

const Dashboard = () => {
  const session = useSelector(state => state.session);
  const [isSigningUp, setIsSigningUp] = useState(false);

  if (session) return <SideBar />;

  return isSigningUp ? (
    <h1>isSigningUp</h1>
  ) : (
    <NewLogin onChangeToSignUp={() => setIsSigningUp(true)} />
  );
};

export default Dashboard;


// return isSigningUp ? (
//   <SignUp onChangeToLogin={() => setIsSigningUp(false)} />
// ) : (
//   <Login onChangeToSignUp={() => setIsSigningUp(true)} />
// );