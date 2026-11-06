# GeoMcpAnalyticsResponse

## Example Usage

```typescript
import { GeoMcpAnalyticsResponse } from "@usenotra/sdk/models";

let value: GeoMcpAnalyticsResponse = {
  configured: true,
  server: {
    name: "<value>",
    version: "<value>",
    protocolVersion: "<value>",
  },
  totals: {
    requests: 324855,
    previousRequests: 505381,
    toolCalls: 599332,
    previousToolCalls: 458211,
    errors: 388074,
    previousErrors: 499135,
    sessions: 653854,
    previousSessions: 632766,
    users: 147449,
    previousUsers: 664443,
    p95Ms: 159015,
    previousP95Ms: 954845,
  },
  daily: [
    {
      day: "<value>",
      toolsCall: 63462,
      resourcesRead: 904497,
      promptsGet: 259955,
      other: 8539,
      errors: 100062,
    },
  ],
  tools: [
    {
      name: "<value>",
      description: "iridescence pace wherever ferociously only",
      calls: 193584,
      errors: 702952,
      users: 369209,
      avgResponseBytes: 319407,
      p50Ms: 487000,
      p95Ms: 37998,
      uiResource: "<value>",
    },
  ],
  clients: [
    {
      name: "<value>",
      sessions: 945185,
      requests: 796720,
      errors: 19162,
      lastSeenAt: "<value>",
    },
  ],
  errorRequests: [
    {
      capturedAt: "<value>",
      clientName: "<value>",
      clientVersion: "<value>",
      method: "<value>",
      target: "<value>",
      status: "tool_error",
      errorCode: 405410,
      errorMessage: "<value>",
      durationMs: 539266,
      model: "Jetta",
    },
  ],
  models: [],
  intents: [],
  elicitations: [
    {
      method: "<value>",
      tool: "<value>",
      requests: 814983,
      accepted: 902866,
      declined: 820120,
      cancelled: 607303,
      errors: 172985,
    },
  ],
  uiRenders: [
    {
      resource: "<value>",
      tools: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      renders: 742453,
      sessions: 80467,
      errors: 545308,
    },
  ],
  catalog: {
    listedAt: "<value>",
    unusedTools: [
      {
        name: "<value>",
        description: "wherever who faithfully",
      },
    ],
  },
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
| `server`                                                                                                              | [models.Server](../models/server.md)                                                                                  | :heavy_check_mark:                                                                                                    | Server info from the newest event. Null before any.                                                                   |
| `totals`                                                                                                              | [models.GeoMcpAnalyticsResponseTotals](../models/geo-mcp-analytics-response-totals.md)                                | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `daily`                                                                                                               | [models.Daily](../models/daily.md)[]                                                                                  | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `tools`                                                                                                               | [models.Tool](../models/tool.md)[]                                                                                    | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `clients`                                                                                                             | [models.Client](../models/client.md)[]                                                                                | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `errorRequests`                                                                                                       | [models.ErrorRequest](../models/error-request.md)[]                                                                   | :heavy_check_mark:                                                                                                    | Most recent failed requests, newest first.                                                                            |
| `models`                                                                                                              | [models.GeoMcpAnalyticsResponseModel](../models/geo-mcp-analytics-response-model.md)[]                                | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `intents`                                                                                                             | [models.GeoMcpAnalyticsResponseIntent](../models/geo-mcp-analytics-response-intent.md)[]                              | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `elicitations`                                                                                                        | [models.Elicitation](../models/elicitation.md)[]                                                                      | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `uiRenders`                                                                                                           | [models.UiRender](../models/ui-render.md)[]                                                                           | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `catalog`                                                                                                             | [models.Catalog](../models/catalog.md)                                                                                | :heavy_check_mark:                                                                                                    | Tools from the latest tools/list that were never called in the window. Null before a listing is seen.                 |
| `organization`                                                                                                        | [models.GeoMcpAnalyticsResponseOrganization](../models/geo-mcp-analytics-response-organization.md)                    | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |