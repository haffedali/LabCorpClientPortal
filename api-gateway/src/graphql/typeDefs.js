import { gql } from "apollo-server";

const typeDefs = gql`
  scalar Date

  type Payment {
    description: String!
    id: ID!
    title: String!
  }

  type User {
    firstName: String!
    lastName: String!
    email: String!
    id: ID!
  }

  type UserSession {
    createdAt: Date!
    expiresAt: Date!
    id: ID!
    user: User!
  }

  type Mutation {
    createPayment(description: String!, title: String!): Payment!
    createUser(firstName: String!, lastName: String!, email: String!, password: String!): User!
    createUserSession(email: String!, password: String!): UserSession!
    deleteUserSession(sessionId: ID!): Boolean!
  }

  type Query {
    payments: [Payment!]!
    userSession(me: Boolean!): UserSession
  }
`;

export default typeDefs;




