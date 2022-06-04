/// <reference types="react-scripts" />

// NOTE: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/35707#issuecomment-617823807
declare module 'babel-plugin-relay/macro' {
  export { graphql as default } from 'react-relay'
}
