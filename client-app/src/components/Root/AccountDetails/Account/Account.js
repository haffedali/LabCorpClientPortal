import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { clearSession } from "#root/store/ducks/session";

const mutation = gql`
  mutation($sessionId: ID!) {
    deleteUserSession(sessionId: $sessionId)
  }
`;

const Account = () => {
  const [deleteUserSession] = useMutation(mutation);
  const dispatch = useDispatch();
  const session = useSelector(state => state.session);

  return (
    <div>
      <h1>Logged in as {session.user.email}</h1>
      <a href="#" onClick={evt => {
        evt.preventDefault();
        dispatch(clearSession());
        deleteUserSession({ variables: { sessionId: session.id } }); // no need for async
      }}>Logout</a>
    </div>
  );
};

export default Account;