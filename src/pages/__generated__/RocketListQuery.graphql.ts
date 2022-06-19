/**
 * @generated SignedSource<<cd75f8b08efd10b0adf1ba48264f52bd>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type RocketListQuery$variables = {};
export type RocketListQuery$data = {
  readonly rockets: ReadonlyArray<{
    readonly id: string | null;
    readonly name: string | null;
    readonly type: string | null;
  } | null> | null;
};
export type RocketListQuery = {
  variables: RocketListQuery$variables;
  response: RocketListQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Rocket",
    "kind": "LinkedField",
    "name": "rockets",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "type",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "RocketListQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "RocketListQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "402f14aaf2c0fdddc6d62de477fab62c",
    "id": null,
    "metadata": {},
    "name": "RocketListQuery",
    "operationKind": "query",
    "text": "query RocketListQuery {\n  rockets {\n    id\n    name\n    type\n  }\n}\n"
  }
};
})();

(node as any).hash = "44405224df3411384c7e63e5b89be53d";

export default node;
