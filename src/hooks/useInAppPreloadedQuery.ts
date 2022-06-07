import { OperationType } from "relay-runtime";
import { GraphQLTaggedNode, PreloadedQuery, usePreloadedQuery } from "react-relay";
import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import { atomFamily, useRecoilState } from "recoil";

const getLoaderDataAtom = atomFamily<any, string>({
  key: 'useInAppLoaderData',
  default: null,
})

const useInAppLoaderData = <TQuery extends OperationType>() => {
  try {
    const _data = useLoaderData() as PreloadedQuery<TQuery>;
    return _data
  } catch (error) {
    console.log(error)
  }
  return null
}

export const useInAppPreloadedQuery = <TQuery extends OperationType>(
  key: string,
  query: GraphQLTaggedNode,
  preloadedQuery?: PreloadedQuery<TQuery>,
  ) => {
  const _data = useInAppLoaderData<TQuery>()
  const [_cache] = useState<PreloadedQuery<TQuery>>(_data!)

  const data = usePreloadedQuery<TQuery>(query, _cache ?? _data);
  return data;
};
