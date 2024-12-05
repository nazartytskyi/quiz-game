import { createApi } from '@reduxjs/toolkit/query/react';
import { gql } from '@apollo/client';
import apolloClient from '@/lib/apolloClient';
import { GetQuestionsQuery } from '@/graphql/generated/graphql-types';
import apolloBaseQuery from './baseQueryWithApollo';

const GET_QUESTIONS = gql`
  query GetQuestions {
    questions {
      id
      text
      prize
      answers {
        id
        text
        isCorrect
      }
    }
  }
`;

export const questionsApi = createApi({
  reducerPath: 'questionsApi',
  baseQuery: apolloBaseQuery({ client: apolloClient }),
  endpoints: (builder) => ({
    getQuestions: builder.query<GetQuestionsQuery['questions'], void>({
      query: () => ({
        document: GET_QUESTIONS,
      }),
      transformResponse: (response: GetQuestionsQuery) => response.questions,
    }),
  }),
});

export const { useGetQuestionsQuery } = questionsApi;
