# GeoMcpToolDetailResponse

## Example Usage

```typescript
import { GeoMcpToolDetailResponse } from "@usenotra/sdk/models";

let value: GeoMcpToolDetailResponse = {
  before: [],
  after: [
    {
      tool: "<value>",
      calls: 135948,
      afterFailure: 255450,
    },
  ],
  failures: [
    {
      message: "<value>",
      clientName: "<value>",
      status: "ok",
      errorCode: 689270,
      calls: 800918,
      lastSeenAt: "<value>",
    },
  ],
  intents: [],
  organization: {
    id: "<id>",
    slug: "<value>",
    name: "<value>",
    logo: "<value>",
  },
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `before`                                                                                              | [models.Before](../models/before.md)[]                                                                | :heavy_check_mark:                                                                                    | Tools called right before this one in the same session.                                               |
| `after`                                                                                               | [models.After](../models/after.md)[]                                                                  | :heavy_check_mark:                                                                                    | Tools called right after this one in the same session.                                                |
| `failures`                                                                                            | [models.Failure](../models/failure.md)[]                                                              | :heavy_check_mark:                                                                                    | Failures grouped by error message.                                                                    |
| `intents`                                                                                             | [models.GeoMcpToolDetailResponseIntent](../models/geo-mcp-tool-detail-response-intent.md)[]           | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `organization`                                                                                        | [models.GeoMcpToolDetailResponseOrganization](../models/geo-mcp-tool-detail-response-organization.md) | :heavy_check_mark:                                                                                    | N/A                                                                                                   |