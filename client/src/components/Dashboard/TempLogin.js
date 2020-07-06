import React from "react";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag"
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setSession } from '../../services/Session/actions';
import { loginAttempt } from '../../services/LogIn/actions';

const mutation = gql`
  mutation($email: String!, $password: String!) {
    createUserSession(email: $email, password: $password) {
      id
      user {
        contactId
        email
        id
        firstName
        lastName
      }
    }
  }
`;

const TempLogin = ({ onChangeToSignUp: pushChangeToSignUp }) => {
  const dispatch = useDispatch();
  const {
    formState: { isSubmitting },
    handleSubmit,
    register
  } = useForm();
  const [createUserSession] = useMutation(mutation);

  const onSubmit = handleSubmit(async ({ email, password }) => {
    const {
      data: { createUserSession: createdSession }
    } = await createUserSession({ variables: { email, password } });
    dispatch(setSession(createdSession));
    dispatch(loginAttempt(createdSession.user.contactId));
  });

  return (
    <form onSubmit={onSubmit}>
      <label>
        <strong>Email</strong>
        <input disabled={isSubmitting} name="email" type="email" ref={register} />
      </label>
      <label>
        <strong>Password</strong>
        <input disabled={isSubmitting} name="password" type="password" ref={register} />
      </label>
      <button disabled={isSubmitting} type="submit">
        Login
      </button>
      <div>
        <a href="#" onClick={evt => {
          evt.preventDefault();
          pushChangeToSignUp();
        }}>
          Sign Up
        </a>
      </div>
    </form>
  );
};

export default TempLogin;

