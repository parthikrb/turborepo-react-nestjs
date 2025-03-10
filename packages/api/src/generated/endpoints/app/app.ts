/**
 * Generated by orval v6.31.0 🍺
 * Do not edit manually.
 * API Documentation
 * The API description
 * OpenAPI spec version: 1.0
 */
import { useInfiniteQuery, useMutation, useQuery } from '@tanstack/react-query';
import type {
  InfiniteData,
  MutationFunction,
  QueryFunction,
  QueryKey,
  UseInfiniteQueryOptions,
  UseInfiniteQueryResult,
  UseMutationOptions,
  UseMutationResult,
  UseQueryOptions,
  UseQueryResult,
} from '@tanstack/react-query';
import type { CreateUserDto, UserResponseDto } from '../../models';
import { customInstance } from '../../../lib/axios-client';

/**
 * @summary Get hello message
 */
export const appControllerGetHello = (signal?: AbortSignal) => {
  return customInstance<string>({ url: `/`, method: 'GET', signal });
};

export const getAppControllerGetHelloQueryKey = () => {
  return [`/`] as const;
};

export const getAppControllerGetHelloInfiniteQueryOptions = <
  TData = InfiniteData<Awaited<ReturnType<typeof appControllerGetHello>>>,
  TError = unknown,
>(options?: {
  query?: Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof appControllerGetHello>>, TError, TData>>;
}) => {
  const { query: queryOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getAppControllerGetHelloQueryKey();

  const queryFn: QueryFunction<Awaited<ReturnType<typeof appControllerGetHello>>> = ({ signal }) =>
    appControllerGetHello(signal);

  return { queryKey, queryFn, ...queryOptions } as UseInfiniteQueryOptions<
    Awaited<ReturnType<typeof appControllerGetHello>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type AppControllerGetHelloInfiniteQueryResult = NonNullable<Awaited<ReturnType<typeof appControllerGetHello>>>;
export type AppControllerGetHelloInfiniteQueryError = unknown;

/**
 * @summary Get hello message
 */
export const useAppControllerGetHelloInfinite = <
  TData = InfiniteData<Awaited<ReturnType<typeof appControllerGetHello>>>,
  TError = unknown,
>(options?: {
  query?: Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof appControllerGetHello>>, TError, TData>>;
}): UseInfiniteQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getAppControllerGetHelloInfiniteQueryOptions(options);

  const query = useInfiniteQuery(queryOptions) as UseInfiniteQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey;

  return query;
};

export const getAppControllerGetHelloQueryOptions = <
  TData = Awaited<ReturnType<typeof appControllerGetHello>>,
  TError = unknown,
>(options?: {
  query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof appControllerGetHello>>, TError, TData>>;
}) => {
  const { query: queryOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getAppControllerGetHelloQueryKey();

  const queryFn: QueryFunction<Awaited<ReturnType<typeof appControllerGetHello>>> = ({ signal }) =>
    appControllerGetHello(signal);

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof appControllerGetHello>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type AppControllerGetHelloQueryResult = NonNullable<Awaited<ReturnType<typeof appControllerGetHello>>>;
export type AppControllerGetHelloQueryError = unknown;

/**
 * @summary Get hello message
 */
export const useAppControllerGetHello = <
  TData = Awaited<ReturnType<typeof appControllerGetHello>>,
  TError = unknown,
>(options?: {
  query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof appControllerGetHello>>, TError, TData>>;
}): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getAppControllerGetHelloQueryOptions(options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey;

  return query;
};

/**
 * @summary Create a new user
 */
export const appControllerCreateUser = (createUserDto: CreateUserDto) => {
  return customInstance<UserResponseDto>({
    url: `/users`,
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    data: createUserDto,
  });
};

export const getAppControllerCreateUserMutationOptions = <TError = void, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof appControllerCreateUser>>,
    TError,
    { data: CreateUserDto },
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<typeof appControllerCreateUser>>,
  TError,
  { data: CreateUserDto },
  TContext
> => {
  const { mutation: mutationOptions } = options ?? {};

  const mutationFn: MutationFunction<Awaited<ReturnType<typeof appControllerCreateUser>>, { data: CreateUserDto }> = (
    props,
  ) => {
    const { data } = props ?? {};

    return appControllerCreateUser(data);
  };

  return { mutationFn, ...mutationOptions };
};

export type AppControllerCreateUserMutationResult = NonNullable<Awaited<ReturnType<typeof appControllerCreateUser>>>;
export type AppControllerCreateUserMutationBody = CreateUserDto;
export type AppControllerCreateUserMutationError = void;

/**
 * @summary Create a new user
 */
export const useAppControllerCreateUser = <TError = void, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof appControllerCreateUser>>,
    TError,
    { data: CreateUserDto },
    TContext
  >;
}): UseMutationResult<
  Awaited<ReturnType<typeof appControllerCreateUser>>,
  TError,
  { data: CreateUserDto },
  TContext
> => {
  const mutationOptions = getAppControllerCreateUserMutationOptions(options);

  return useMutation(mutationOptions);
};
