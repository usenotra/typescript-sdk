# ListGeoPersonasResponse

## Example Usage

```typescript
import { ListGeoPersonasResponse } from "@usenotra/sdk/models";

let value: ListGeoPersonasResponse = {
  configured: false,
  personas: [
    {
      id: "<id>",
      name: "<value>",
      role: "<value>",
      company: "Daniel LLC",
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
      enabled: true,
      archivedAt: "<value>",
      createdAt: "1734256191438",
      updatedAt: "1735656169023",
      memories: [],
    },
  ],
  organization: {
    id: "<id>",
    slug: "<value>",
    name: "<value>",
    logo: null,
  },
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `configured`                                                                                            | *boolean*                                                                                               | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `personas`                                                                                              | [models.GeoPersona](../models/geo-persona.md)[]                                                         | :heavy_check_mark:                                                                                      | Active personas first in creation order, then archived ones. A project keeps at most 5 active personas. |
| `organization`                                                                                          | [models.ListGeoPersonasResponseOrganization](../models/list-geo-personas-response-organization.md)      | :heavy_check_mark:                                                                                      | N/A                                                                                                     |