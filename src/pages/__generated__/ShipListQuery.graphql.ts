/**
 * @generated SignedSource<<85ac9b9dbdf292792e17492b5376ac31>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type ShipListQuery$variables = {};
export type ShipListQuery$data = {
  readonly ships: ReadonlyArray<{
    readonly id: string | null;
    readonly name: string | null;
    readonly image: string | null;
  } | null> | null;
};
export type ShipListQuery = {
  variables: ShipListQuery$variables;
  response: ShipListQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Ship",
    "kind": "LinkedField",
    "name": "ships",
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
        "name": "image",
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
    "name": "ShipListQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ShipListQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "184013075cb7bc3b45a04d11d7ee2cce",
    "id": null,
    "metadata": {},
    "name": "ShipListQuery",
    "operationKind": "query",
    "text": "query ShipListQuery {\n  ships {\n    id\n    name\n    image\n  }\n}\n"
  }
};
})();

(node as any).hash = "4256a9834ee3d1f8c6eb39c5430d8817";

export default node;
