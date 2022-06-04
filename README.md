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

```
<DataBrowserRouter fallbackElement={<></>}>
  <Route
    path="/"
    element={<MissionList />}
    loader={() => missionListQueryLoader(environment)}
  />
  <Route
    path="/:id"
    element={<MissionDetail />}
    loader={({ params }) =>
      missionDetailLoader(environment, params.id!)
    }
  />
</DataBrowserRouter>
```

```
export const missionListQueryLoader = (environment: any) =>
  loadQuery(environment, missionListQuery, {});

export const MissionList = () => {
  const _data = useLoaderData() as PreloadedQuery<MissionListQuery>;
  const data = usePreloadedQuery<MissionListQuery>(missionListQuery, _data);
```

```
export const missionDetailLoader = (enviroment: any, missionId: string) =>
  loadQuery(enviroment, missionDetailQuery, { id: missionId });

export const MissionDetail = () => {
  const _data = useLoaderData() as PreloadedQuery<MissionDetailQuery>;
  const { mission } = usePreloadedQuery<MissionDetailQuery>(
    missionDetailQuery,
    _data
  );
```
