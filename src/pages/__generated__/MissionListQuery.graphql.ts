/**
 * @generated SignedSource<<f0b6b22543807e4f60a3332231a343e1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type MissionListQuery$variables = {};
export type MissionListQuery$data = {
  readonly missions: ReadonlyArray<{
    readonly id: string | null;
    readonly name: string | null;
  } | null> | null;
};
export type MissionListQuery = {
  variables: MissionListQuery$variables;
  response: MissionListQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Mission",
    "kind": "LinkedField",
    "name": "missions",
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
    "name": "MissionListQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "MissionListQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "6d0d04de46670483c0606ef0905ad1d7",
    "id": null,
    "metadata": {},
    "name": "MissionListQuery",
    "operationKind": "query",
    "text": "query MissionListQuery {\n  missions {\n    id\n    name\n  }\n}\n"
  }
};
})();

(node as any).hash = "b2b15ca0b657146ea81db7ff3035662c";

export default node;
