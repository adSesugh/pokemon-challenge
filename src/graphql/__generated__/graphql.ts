import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

/** Represents a Pokémon's attack types */
export type Attack = {
  __typename?: 'Attack';
  /** The damage of this Pokémon attack */
  damage?: Maybe<Scalars['Int']['output']>;
  /** The name of this Pokémon attack */
  name?: Maybe<Scalars['String']['output']>;
  /** The type of this Pokémon attack */
  type?: Maybe<Scalars['String']['output']>;
};

/** Represents a Pokémon */
export type Pokemon = {
  __typename?: 'Pokemon';
  /** The attacks of this Pokémon */
  attacks?: Maybe<PokemonAttack>;
  /** The classification of this Pokémon */
  classification?: Maybe<Scalars['String']['output']>;
  /** The evolution requirements of this Pokémon */
  evolutionRequirements?: Maybe<PokemonEvolutionRequirement>;
  /** The evolutions of this Pokémon */
  evolutions?: Maybe<Array<Maybe<Pokemon>>>;
  fleeRate?: Maybe<Scalars['Float']['output']>;
  /** The minimum and maximum weight of this Pokémon */
  height?: Maybe<PokemonDimension>;
  /** The ID of an object */
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  /** The maximum CP of this Pokémon */
  maxCP?: Maybe<Scalars['Int']['output']>;
  /** The maximum HP of this Pokémon */
  maxHP?: Maybe<Scalars['Int']['output']>;
  /** The name of this Pokémon */
  name?: Maybe<Scalars['String']['output']>;
  /** The identifier of this Pokémon */
  number?: Maybe<Scalars['String']['output']>;
  /** The type(s) of Pokémons that this Pokémon is resistant to */
  resistant?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The type(s) of this Pokémon */
  types?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The type(s) of Pokémons that this Pokémon weak to */
  weaknesses?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The minimum and maximum weight of this Pokémon */
  weight?: Maybe<PokemonDimension>;
};

/** Represents a Pokémon's attack types */
export type PokemonAttack = {
  __typename?: 'PokemonAttack';
  /** The fast attacks of this Pokémon */
  fast?: Maybe<Array<Maybe<Attack>>>;
  /** The special attacks of this Pokémon */
  special?: Maybe<Array<Maybe<Attack>>>;
};

/** Represents a Pokémon's dimensions */
export type PokemonDimension = {
  __typename?: 'PokemonDimension';
  /** The maximum value of this dimension */
  maximum?: Maybe<Scalars['String']['output']>;
  /** The minimum value of this dimension */
  minimum?: Maybe<Scalars['String']['output']>;
};

/** Represents a Pokémon's requirement to evolve */
export type PokemonEvolutionRequirement = {
  __typename?: 'PokemonEvolutionRequirement';
  /** The amount of candy to evolve */
  amount?: Maybe<Scalars['Int']['output']>;
  /** The name of the candy to evolve */
  name?: Maybe<Scalars['String']['output']>;
};

/** Query any Pokémon by number or name */
export type Query = {
  __typename?: 'Query';
  pokemon?: Maybe<Pokemon>;
  pokemons?: Maybe<Array<Maybe<Pokemon>>>;
  query?: Maybe<Query>;
};


/** Query any Pokémon by number or name */
export type QueryPokemonArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};


/** Query any Pokémon by number or name */
export type QueryPokemonsArgs = {
  first: Scalars['Int']['input'];
};

export type PokemonsQueryVariables = Exact<{
  first: Scalars['Int']['input'];
}>;


export type PokemonsQuery = { __typename?: 'Query', pokemons?: Array<{ __typename?: 'Pokemon', id: string, number?: string | null, name?: string | null, classification?: string | null, types?: Array<string | null> | null, resistant?: Array<string | null> | null, weaknesses?: Array<string | null> | null, fleeRate?: number | null, maxCP?: number | null, maxHP?: number | null, image?: string | null, weight?: { __typename?: 'PokemonDimension', minimum?: string | null, maximum?: string | null } | null, height?: { __typename?: 'PokemonDimension', minimum?: string | null, maximum?: string | null } | null } | null> | null };

export type PokemonQueryVariables = Exact<{
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
}>;


export type PokemonQuery = { __typename?: 'Query', pokemon?: { __typename?: 'Pokemon', id: string, number?: string | null, name?: string | null, classification?: string | null, types?: Array<string | null> | null, resistant?: Array<string | null> | null, weaknesses?: Array<string | null> | null, fleeRate?: number | null, maxCP?: number | null, maxHP?: number | null, image?: string | null, weight?: { __typename?: 'PokemonDimension', minimum?: string | null, maximum?: string | null } | null, height?: { __typename?: 'PokemonDimension', minimum?: string | null, maximum?: string | null } | null } | null };

export type PokemonAttackQueryVariables = Exact<{
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
}>;


export type PokemonAttackQuery = { __typename?: 'Query', pokemon?: { __typename?: 'Pokemon', id: string, name?: string | null, attacks?: { __typename?: 'PokemonAttack', fast?: Array<{ __typename?: 'Attack', name?: string | null, type?: string | null, damage?: number | null } | null> | null, special?: Array<{ __typename?: 'Attack', name?: string | null, type?: string | null, damage?: number | null } | null> | null } | null } | null };

export type PokemonEvolutionsQueryVariables = Exact<{
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
}>;


export type PokemonEvolutionsQuery = { __typename?: 'Query', pokemon?: { __typename?: 'Pokemon', id: string, name?: string | null, evolutions?: Array<{ __typename?: 'Pokemon', id: string, number?: string | null, name?: string | null, classification?: string | null, types?: Array<string | null> | null, resistant?: Array<string | null> | null, weaknesses?: Array<string | null> | null, fleeRate?: number | null, maxCP?: number | null, maxHP?: number | null, image?: string | null, evolutions?: Array<{ __typename?: 'Pokemon', id: string, number?: string | null, name?: string | null, classification?: string | null, types?: Array<string | null> | null, resistant?: Array<string | null> | null, weaknesses?: Array<string | null> | null, fleeRate?: number | null, maxCP?: number | null } | null> | null } | null> | null } | null };

export type RecursivePokemonFragmentFragment = { __typename?: 'Pokemon', id: string, number?: string | null, name?: string | null, classification?: string | null, types?: Array<string | null> | null, resistant?: Array<string | null> | null, weaknesses?: Array<string | null> | null, fleeRate?: number | null, maxCP?: number | null };

export const RecursivePokemonFragmentFragmentDoc = gql`
    fragment RecursivePokemonFragment on Pokemon {
  id
  number
  name
  classification
  types
  resistant
  weaknesses
  fleeRate
  maxCP
}
    `;
export const PokemonsDocument = gql`
    query pokemons($first: Int!) {
  pokemons(first: $first) {
    id
    number
    name
    weight {
      minimum
      maximum
    }
    height {
      minimum
      maximum
    }
    classification
    types
    resistant
    weaknesses
    fleeRate
    maxCP
    maxHP
    image
  }
}
    `;

/**
 * __usePokemonsQuery__
 *
 * To run a query within a React component, call `usePokemonsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePokemonsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePokemonsQuery({
 *   variables: {
 *      first: // value for 'first'
 *   },
 * });
 */
export function usePokemonsQuery(baseOptions: Apollo.QueryHookOptions<PokemonsQuery, PokemonsQueryVariables> & ({ variables: PokemonsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PokemonsQuery, PokemonsQueryVariables>(PokemonsDocument, options);
      }
export function usePokemonsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PokemonsQuery, PokemonsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PokemonsQuery, PokemonsQueryVariables>(PokemonsDocument, options);
        }
export function usePokemonsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<PokemonsQuery, PokemonsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<PokemonsQuery, PokemonsQueryVariables>(PokemonsDocument, options);
        }
export type PokemonsQueryHookResult = ReturnType<typeof usePokemonsQuery>;
export type PokemonsLazyQueryHookResult = ReturnType<typeof usePokemonsLazyQuery>;
export type PokemonsSuspenseQueryHookResult = ReturnType<typeof usePokemonsSuspenseQuery>;
export type PokemonsQueryResult = Apollo.QueryResult<PokemonsQuery, PokemonsQueryVariables>;
export const PokemonDocument = gql`
    query pokemon($id: String, $name: String) {
  pokemon(id: $id, name: $name) {
    id
    number
    name
    weight {
      minimum
      maximum
    }
    height {
      minimum
      maximum
    }
    classification
    types
    resistant
    weaknesses
    fleeRate
    maxCP
    maxHP
    image
  }
}
    `;

/**
 * __usePokemonQuery__
 *
 * To run a query within a React component, call `usePokemonQuery` and pass it any options that fit your needs.
 * When your component renders, `usePokemonQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePokemonQuery({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *   },
 * });
 */
export function usePokemonQuery(baseOptions?: Apollo.QueryHookOptions<PokemonQuery, PokemonQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PokemonQuery, PokemonQueryVariables>(PokemonDocument, options);
      }
export function usePokemonLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PokemonQuery, PokemonQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PokemonQuery, PokemonQueryVariables>(PokemonDocument, options);
        }
export function usePokemonSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<PokemonQuery, PokemonQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<PokemonQuery, PokemonQueryVariables>(PokemonDocument, options);
        }
export type PokemonQueryHookResult = ReturnType<typeof usePokemonQuery>;
export type PokemonLazyQueryHookResult = ReturnType<typeof usePokemonLazyQuery>;
export type PokemonSuspenseQueryHookResult = ReturnType<typeof usePokemonSuspenseQuery>;
export type PokemonQueryResult = Apollo.QueryResult<PokemonQuery, PokemonQueryVariables>;
export const PokemonAttackDocument = gql`
    query pokemonAttack($id: String, $name: String) {
  pokemon(id: $id, name: $name) {
    id
    name
    attacks {
      fast {
        name
        type
        damage
      }
      special {
        name
        type
        damage
      }
    }
  }
}
    `;

/**
 * __usePokemonAttackQuery__
 *
 * To run a query within a React component, call `usePokemonAttackQuery` and pass it any options that fit your needs.
 * When your component renders, `usePokemonAttackQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePokemonAttackQuery({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *   },
 * });
 */
export function usePokemonAttackQuery(baseOptions?: Apollo.QueryHookOptions<PokemonAttackQuery, PokemonAttackQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PokemonAttackQuery, PokemonAttackQueryVariables>(PokemonAttackDocument, options);
      }
export function usePokemonAttackLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PokemonAttackQuery, PokemonAttackQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PokemonAttackQuery, PokemonAttackQueryVariables>(PokemonAttackDocument, options);
        }
export function usePokemonAttackSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<PokemonAttackQuery, PokemonAttackQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<PokemonAttackQuery, PokemonAttackQueryVariables>(PokemonAttackDocument, options);
        }
export type PokemonAttackQueryHookResult = ReturnType<typeof usePokemonAttackQuery>;
export type PokemonAttackLazyQueryHookResult = ReturnType<typeof usePokemonAttackLazyQuery>;
export type PokemonAttackSuspenseQueryHookResult = ReturnType<typeof usePokemonAttackSuspenseQuery>;
export type PokemonAttackQueryResult = Apollo.QueryResult<PokemonAttackQuery, PokemonAttackQueryVariables>;
export const PokemonEvolutionsDocument = gql`
    query pokemonEvolutions($id: String, $name: String) {
  pokemon(id: $id, name: $name) {
    id
    name
    evolutions {
      id
      number
      name
      classification
      types
      resistant
      weaknesses
      fleeRate
      maxCP
      evolutions {
        ...RecursivePokemonFragment
      }
      maxHP
      image
    }
  }
}
    ${RecursivePokemonFragmentFragmentDoc}`;

/**
 * __usePokemonEvolutionsQuery__
 *
 * To run a query within a React component, call `usePokemonEvolutionsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePokemonEvolutionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePokemonEvolutionsQuery({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *   },
 * });
 */
export function usePokemonEvolutionsQuery(baseOptions?: Apollo.QueryHookOptions<PokemonEvolutionsQuery, PokemonEvolutionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PokemonEvolutionsQuery, PokemonEvolutionsQueryVariables>(PokemonEvolutionsDocument, options);
      }
export function usePokemonEvolutionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PokemonEvolutionsQuery, PokemonEvolutionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PokemonEvolutionsQuery, PokemonEvolutionsQueryVariables>(PokemonEvolutionsDocument, options);
        }
export function usePokemonEvolutionsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<PokemonEvolutionsQuery, PokemonEvolutionsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<PokemonEvolutionsQuery, PokemonEvolutionsQueryVariables>(PokemonEvolutionsDocument, options);
        }
export type PokemonEvolutionsQueryHookResult = ReturnType<typeof usePokemonEvolutionsQuery>;
export type PokemonEvolutionsLazyQueryHookResult = ReturnType<typeof usePokemonEvolutionsLazyQuery>;
export type PokemonEvolutionsSuspenseQueryHookResult = ReturnType<typeof usePokemonEvolutionsSuspenseQuery>;
export type PokemonEvolutionsQueryResult = Apollo.QueryResult<PokemonEvolutionsQuery, PokemonEvolutionsQueryVariables>;