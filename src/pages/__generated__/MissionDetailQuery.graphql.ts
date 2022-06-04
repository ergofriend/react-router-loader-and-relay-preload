/**
 * @generated SignedSource<<fa6bc69f1c717e1449f2dfd2f86001b5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type MissionDetailQuery$variables = {
  id: string;
};
export type MissionDetailQuery$data = {
  readonly mission: {
    readonly name: string | null;
    readonly description: string | null;
    readonly twitter: string | null;
    readonly website: string | null;
    readonly wikipedia: string | null;
  } | null;
};
export type MissionDetailQuery = {
  variables: MissionDetailQuery$variables;
  response: MissionDetailQuery$data;
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
  "name": "description",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "twitter",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "website",
  "storageKey": null
},
v6 = {
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
    "name": "MissionDetailQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Mission",
        "kind": "LinkedField",
        "name": "mission",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/)
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
    "name": "MissionDetailQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Mission",
        "kind": "LinkedField",
        "name": "mission",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
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
    "cacheID": "ddbb8ecd41a64dd67a4bc403d439ef93",
    "id": null,
    "metadata": {},
    "name": "MissionDetailQuery",
    "operationKind": "query",
    "text": "query MissionDetailQuery(\n  $id: ID!\n) {\n  mission(id: $id) {\n    name\n    description\n    twitter\n    website\n    wikipedia\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "c1594a01f3a7761160a274cf88fef219";

export default node;
