import { OperationType } from "relay-runtime";
import { GraphQLTaggedNode, PreloadedQuery, usePreloadedQuery } from "react-relay";
import { useLoaderData } from "react-router-dom";

export const useInAppPreloadedQuery = <TQuery extends OperationType>(
  query: GraphQLTaggedNode,
  preloadedQuery?: PreloadedQuery<TQuery>
) => {
  const _data = useLoaderData() as PreloadedQuery<TQuery>;
  const data = usePreloadedQuery<TQuery>(query, _data ?? preloadedQuery);
  return data;
};
