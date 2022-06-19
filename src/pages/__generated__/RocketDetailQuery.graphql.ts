/**
 * @generated SignedSource<<eeef2bccbb21e734bed870e7efbff2f7>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type RocketDetailQuery$variables = {
  id: string;
};
export type RocketDetailQuery$data = {
  readonly rocket: {
    readonly name: string | null;
    readonly type: string | null;
    readonly height: {
      readonly meters: number | null;
    } | null;
    readonly wikipedia: string | null;
  } | null;
};
export type RocketDetailQuery = {
  variables: RocketDetailQuery$variables;
  response: RocketDetailQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "type",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "concreteType": "Distance",
  "kind": "LinkedField",
  "name": "height",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "meters",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "wikipedia",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "RocketDetailQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Rocket",
        "kind": "LinkedField",
        "name": "rocket",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "RocketDetailQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Rocket",
        "kind": "LinkedField",
        "name": "rocket",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "1846f5c39d2f82326a1d8ef7f0e157c4",
    "id": null,
    "metadata": {},
    "name": "RocketDetailQuery",
    "operationKind": "query",
    "text": "query RocketDetailQuery(\n  $id: ID!\n) {\n  rocket(id: $id) {\n    name\n    type\n    height {\n      meters\n    }\n    wikipedia\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "95cecf4898d1d81ac96062287702bba7";

export default node;
