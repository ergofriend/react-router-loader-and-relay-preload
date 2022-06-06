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

export const useInAppPreloadedQuery = <TQuery extends OperationType>(
  query: GraphQLTaggedNode,
  preloadedQuery?: PreloadedQuery<TQuery>
) => {
  const _data = useInAppLoaderData<TQuery>()
  const [_cache, setCache] = useState<PreloadedQuery<TQuery>>(_data!)
  useEffect(() => {
    _data && setCache(_data)
  }, [_data])

  const data = usePreloadedQuery<TQuery>(query, _cache ?? preloadedQuery);
  return data;
};
