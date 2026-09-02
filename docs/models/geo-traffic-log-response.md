# GeoTrafficLogResponse

## Example Usage

```typescript
import { GeoTrafficLogResponse } from "@usenotra/sdk/models";

let value: GeoTrafficLogResponse = {
  configured: false,
  log: [
    {
      capturedAt: "<value>",
      visitorType: "human",
      source: "<value>",
      agent: "<value>",
      category: "<value>",
      confidence: "<value>",
      path: "/usr/share",
      host: "simplistic-resolve.com",
      country: "Virgin Islands, British",
      ua: "<value>",
      journeyId: "<id>",
      wantsMarkdown: false,
    },
  ],
  total: 998614,
  organization: {
    id: "<id>",
    slug: "<value>",
    name: "<value>",
    logo: "<value>",
  },
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `configured`                                                                                                          | *boolean*                                                                                                             | :heavy_check_mark:                                                                                                    | False when the traffic backend is not configured for this deployment; the payload is then empty rather than an error. |
| `log`                                                                                                                 | [models.Log](../models/log.md)[]                                                                                      | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `total`                                                                                                               | *number*                                                                                                              | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `organization`                                                                                                        | [models.GeoTrafficLogResponseOrganization](../models/geo-traffic-log-response-organization.md)                        | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |