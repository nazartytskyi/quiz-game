export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Answer = {
  __typename?: 'Answer';
  id: Scalars['Int']['output'];
  isCorrect?: Maybe<Scalars['Boolean']['output']>;
  text: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  questions: Array<Question>;
};

export type Question = {
  __typename?: 'Question';
  answers: Array<Answer>;
  id: Scalars['Int']['output'];
  prize: Scalars['Int']['output'];
  text: Scalars['String']['output'];
};

export type GetQuestionsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetQuestionsQuery = { __typename?: 'Query', questions: Array<{ __typename?: 'Question', id: number, text: string, prize: number, answers: Array<{ __typename?: 'Answer', id: number, text: string, isCorrect?: boolean | null }> }> };
