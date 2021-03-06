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



https://user-images.githubusercontent.com/29725082/174469191-e06001db-c6e5-4143-9ada-b2b0d9cab6e0.mov



## Code

```typescript
<DataBrowserRouter fallbackElement={<></>}>
  <Route path="/" element={ShipList} loader={shipListQueryLoader} />
  <Route path="/:id" element={ShipDetail} loader={shipDetailLoader} />
</DataBrowserRouter>
```

```typescript
export const shipListQueryLoader = () =>
  loadQuery(environment, shipListQuery, {});

export const ShipList = () => {
  const _data = useLoaderData() as PreloadedQuery<ShipListQuery>;
  const data = usePreloadedQuery<ShipListQuery>(shipListQuery, _data);
```

```typescript
export const shipDetailLoader: LoaderFunction = ({params}) =>
  loadQuery(environment, shipDetailQuery, { id: params.id });

export const ShipDetail = () => {
  const _data = useLoaderData() as PreloadedQuery<ShipDetailQuery>;
  const { ship } = usePreloadedQuery<ShipDetailQuery>(shipDetailQuery, _data);
```
