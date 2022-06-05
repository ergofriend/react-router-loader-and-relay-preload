/**
 * @generated SignedSource<<210f42c3e0ea5919034a1a55a1e3befc>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type ShipDetailQuery$variables = {
  id: string;
};
export type ShipDetailQuery$data = {
  readonly ship: {
    readonly name: string | null;
    readonly model: string | null;
    readonly image: string | null;
  } | null;
};
export type ShipDetailQuery = {
  variables: ShipDetailQuery$variables;
  response: ShipDetailQuery$data;
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
  "name": "model",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "image",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ShipDetailQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Ship",
        "kind": "LinkedField",
        "name": "ship",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/)
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
    "name": "ShipDetailQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Ship",
        "kind": "LinkedField",
        "name": "ship",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
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
    "cacheID": "7eb80fd23a6670ddbd62d4f49d215519",
    "id": null,
    "metadata": {},
    "name": "ShipDetailQuery",
    "operationKind": "query",
    "text": "query ShipDetailQuery(\n  $id: ID!\n) {\n  ship(id: $id) {\n    name\n    model\n    image\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "b1e978a56349add6d13d5df36eae71bb";

export default node;
