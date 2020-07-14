import gql from "graphql-tag";

/* ProfileForm.js */
export const updatePassword = gql`
  mutation($email: String!, $password: String!) {
    updateUserPassword(email: $email, password: $password) {
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

/* Login.js */
export const createSession = gql`
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

/* LogoutButton.js */
export const deleteSession = gql`
  mutation($sessionId: ID!) {
    deleteUserSession(sessionId: $sessionId)
  }
`;

export const createUserMutation = gql`
  mutation($contactId: String!, $firstName: String!, $lastName: String!, $email: String!, $password: String!) {
    createUser(contactId: $contactId, firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
      id
    }
  }
`;