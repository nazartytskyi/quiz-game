import { BaseQueryFn } from '@reduxjs/toolkit/query';
import { ApolloClient, NormalizedCacheObject, ApolloError, TypedDocumentNode } from '@apollo/client';

interface ApolloQueryArgs<Vars> {
  document: TypedDocumentNode<unknown, Vars>;
  variables?: Vars;
}

const apolloBaseQuery =
  ({
    client,
  }: {
    client: ApolloClient<NormalizedCacheObject>;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }): BaseQueryFn<ApolloQueryArgs<any>, unknown, ApolloError> =>
  async ({ document, variables }) => {
    try {
      const result = await client.query({
        query: document,
        variables,
      });
      return { data: result.data };
    } catch (error) {
      return { error: error as ApolloError };
    }
  };

export default apolloBaseQuery;
