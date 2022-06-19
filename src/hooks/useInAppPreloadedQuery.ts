import { OperationType } from "relay-runtime";
import { GraphQLTaggedNode, PreloadedQuery, usePreloadedQuery } from "react-relay";
import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";

const useInAppLoaderData = <TQuery extends OperationType>() => {
  try {
    const _data = useLoaderData() as PreloadedQuery<TQuery>;
    return _data
  } catch (error) {
    console.log(error)
  }
  return null
}

const tmp: Record<string, any> = {}

export const useInAppPreloadedQuery = <TQuery extends OperationType>(
  key: string,
  query: GraphQLTaggedNode,
  ) => {
  const _data = useInAppLoaderData<TQuery>()
  const [_cache] = useState<PreloadedQuery<TQuery>>(_data!)
  
  useEffect(() => {
     if (_data) {
      tmp[key] = _data
     }
  }, [_data, key])

  const data = usePreloadedQuery<TQuery>(query, _cache ?? tmp[key]);
  return data;
};
