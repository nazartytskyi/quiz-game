import { gql } from 'apollo-server-micro';

const typeDefs = gql`
  type Answer {
    id: Int!
    text: String!
    isCorrect: Boolean
  }

  type Question {
    id: Int!
    text: String!
    answers: [Answer!]!
  }

  type Query {
    questions: [Question!]!
  }
`;

export default typeDefs;
