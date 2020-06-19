import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag"
import React from "react";
import { useForm } from "react-hook-form";

import * as yup from "yup";

const mutation = gql`
  mutation($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
    createUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
      id
    }
  }
`;

const validationSchema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().required(),
  password: yup
    .string()
    .required()
    .test("sameAsConfirmPassword", "${path} is not the same as the confirmation password", function() {
      return this.parent.password === this.parent.confirmPassword;
    })
});

const SignUp = ({ onChangeToLogin: pushChangeToLogin }) => {
  const {
    formState: { isSubmitting, isValid },
    handleSubmit,
    register,
    reset
  } = useForm({ mode: "onChange", validationSchema });

  const [createUser] = useMutation(mutation);

  const onSubmit = handleSubmit(async ({ firstName, lastName, email, password }) => {
    await createUser({ variables: { firstName, lastName, email, password } });
    reset();
    pushChangeToLogin();
  });

  return (
    <form onSubmit={onSubmit}>
      <label>
        <strong>First Name</strong>
        <input disabled={isSubmitting} name="firstName" type="text" ref={register} />
      </label>
      <label>
        <strong>Last Name</strong>
        <input disabled={isSubmitting} name="lastName" type="text" ref={register} />
      </label>
      <label>
        <strong>Email</strong>
        <input disabled={isSubmitting} name="email" type="email" ref={register} />
      </label>
      <label>
        <strong>Password</strong>
        <input disabled={isSubmitting} name="password" type="password" ref={register} />
      </label>
      <label>
        <strong>Confirm Password</strong>
        <input disabled={isSubmitting} name="confirmPassword" type="password" ref={register} />
      </label>
      <button disabled={isSubmitting || !isValid } type="submit">
        Sign Up
      </button>
      <div>
        <a href="#" onClick={evt => {
          evt.preventDefault();
          pushChangeToLogin();
        }}>
          Log In
        </a>
      </div>
    </form>
  );
};

export default SignUp;

