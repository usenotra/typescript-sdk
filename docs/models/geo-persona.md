# GeoPersona

## Example Usage

```typescript
import { GeoPersona } from "@usenotra/sdk/models";

let value: GeoPersona = {
  id: "<id>",
  name: "<value>",
  role: "<value>",
  company: "Heaney - Berge",
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
  ],
  enabled: false,
  archivedAt: "<value>",
  createdAt: "1704472468707",
  updatedAt: "1735667864189",
  memories: [
    {
      id: "<id>",
      kind: "experience",
      content: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                                                           | Type                                                                                                                                            | Required                                                                                                                                        | Description                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                            | *string*                                                                                                                                        | :heavy_check_mark:                                                                                                                              | N/A                                                                                                                                             |
| `name`                                                                                                                                          | *string*                                                                                                                                        | :heavy_check_mark:                                                                                                                              | Buyer archetype label, such as Budgeter.                                                                                                        |
| `role`                                                                                                                                          | *string*                                                                                                                                        | :heavy_check_mark:                                                                                                                              | N/A                                                                                                                                             |
| `company`                                                                                                                                       | *string*                                                                                                                                        | :heavy_check_mark:                                                                                                                              | N/A                                                                                                                                             |
| `summary`                                                                                                                                       | *string*                                                                                                                                        | :heavy_check_mark:                                                                                                                              | N/A                                                                                                                                             |
| `searchStyle`                                                                                                                                   | *string*                                                                                                                                        | :heavy_check_mark:                                                                                                                              | N/A                                                                                                                                             |
| `profile`                                                                                                                                       | [models.GeoPersonaProfile](../models/geo-persona-profile.md)                                                                                    | :heavy_check_mark:                                                                                                                              | N/A                                                                                                                                             |
| `conversationPrompts`                                                                                                                           | *string*[]                                                                                                                                      | :heavy_check_mark:                                                                                                                              | Opening prompts the persona plays against each engine. Cleared when its details change; regenerate them with `promptsOnly` before the next run. |
| `enabled`                                                                                                                                       | *boolean*                                                                                                                                       | :heavy_check_mark:                                                                                                                              | Whether scheduled scans play this persona.                                                                                                      |
| `archivedAt`                                                                                                                                    | *string*                                                                                                                                        | :heavy_check_mark:                                                                                                                              | N/A                                                                                                                                             |
| `createdAt`                                                                                                                                     | *string*                                                                                                                                        | :heavy_check_mark:                                                                                                                              | N/A                                                                                                                                             |
| `updatedAt`                                                                                                                                     | *string*                                                                                                                                        | :heavy_check_mark:                                                                                                                              | N/A                                                                                                                                             |
| `memories`                                                                                                                                      | [models.Memory](../models/memory.md)[]                                                                                                          | :heavy_check_mark:                                                                                                                              | N/A                                                                                                                                             |