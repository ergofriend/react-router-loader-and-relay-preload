import type {FetchFunction} from 'relay-runtime'

type FetchGraphQL = (...args: Parameters<FetchFunction>
) => ReturnType<FetchFunction>

export const fetchGraphQL: FetchGraphQL = async ( request, variables, cacheConfig) => {

 // Fetch data from GitHub's GraphQL API:
 const response = await fetch('https://api.spacex.land/graphql/', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    query: request.text,
    variables,
  }),
});

// Get the response as JSON
return await response.json();
}
