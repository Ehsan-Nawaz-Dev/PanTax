import { useLazyQuery, useMutation } from "@apollo/client/react";
// graphql
import {
  LoginDocument,
  FetchUserDocument,
  ChangePasswordDocument,
} from "@generated/graphql";
import type {
  FetchUserQuery,
  FetchUserQueryVariables,
  LoginMutation,
  LoginMutationVariables,
  ChangePasswordMutation,
  ChangePasswordMutationVariables,
} from "@generated/graphql";

// queries

export const useFetchUserQuery = () =>
  useLazyQuery<FetchUserQuery, FetchUserQueryVariables>(FetchUserDocument);

export const useLoginQuery = () =>
  useLazyQuery<LoginMutation, LoginMutationVariables>(LoginDocument);

// mutations

export const useChangePasswordMutation = () => {
  return useMutation<ChangePasswordMutation, ChangePasswordMutationVariables>(
    ChangePasswordDocument
  );
};
