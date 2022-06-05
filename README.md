# react-router-loader-and-relay-preload

Relay Render-as-You-Fetch with react-router

#### react-router

- at least v6.4
- DataBrowserRouter
- useLoaderData
- https://beta.reactrouter.com/en/remixing/getting-started/data

#### react-relay

- loadQuery
- usePreloadedQuery
- https://relay.dev/docs/api-reference/use-preloaded-query/

## Code

```typescript
<DataBrowserRouter fallbackElement={<></>}>
  <Route
    path="/"
    element={<ShipList />}
    loader={() => shipListQueryLoader(environment)}
  />
  <Route
    path="/:id"
    element={<ShipDetail />}
    loader={({ params }) => shipDetailLoader(environment, params.id!)}
  />
</DataBrowserRouter>
```

```typescript
export const shipListQueryLoader = (environment: Environment) =>
  loadQuery(environment, shipListQuery, {});

export const ShipList = () => {
  const _data = useLoaderData() as PreloadedQuery<ShipListQuery>;
  const data = usePreloadedQuery<ShipListQuery>(shipListQuery, _data);
```

```typescript
export const shipDetailLoader = (environment: Environment, shipId: string) =>
  loadQuery(environment, shipDetailQuery, { id: shipId });

export const ShipDetail = () => {
  const _data = useLoaderData() as PreloadedQuery<ShipDetailQuery>;
  const { ship } = usePreloadedQuery<ShipDetailQuery>(shipDetailQuery, _data);
```
