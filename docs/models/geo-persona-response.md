# GeoPersonaResponse

## Example Usage

```typescript
import { GeoPersonaResponse } from "@usenotra/sdk/models";

let value: GeoPersonaResponse = {
  persona: {
    id: "<id>",
    name: "<value>",
    role: "<value>",
    company: "Franey, Swaniawski and Heidenreich",
    summary: "<value>",
    searchStyle: "<value>",
    profile: {
      goals: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      painPoints: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      currentStack: [
        "<value 1>",
      ],
      buyingTriggers: [],
      objections: [],
    },
    conversationPrompts: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    enabled: true,
    archivedAt: "<value>",
    createdAt: "1722520874433",
    updatedAt: "1735612389820",
    memories: [],
  },
  organization: {
    id: "<id>",
    slug: "<value>",
    name: "<value>",
    logo: null,
  },
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `persona`                                                                               | [models.GeoPersona](../models/geo-persona.md)                                           | :heavy_check_mark:                                                                      | N/A                                                                                     |
| `organization`                                                                          | [models.GeoPersonaResponseOrganization](../models/geo-persona-response-organization.md) | :heavy_check_mark:                                                                      | N/A                                                                                     |