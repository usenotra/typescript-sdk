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
      toolsCall: 701204,
      resourcesRead: 371525,
      promptsGet: 740757,
      other: 144224,
      errors: 241100,
    },
  ],
  tools: [
    {
      name: "<value>",
      description: "stoop never glittering term",
      calls: 300093,
      errors: 551031,
      users: 193584,
      avgResponseBytes: 702952,
      p50Ms: 369209,
      p95Ms: 319407,
      uiResource: "<value>",
    },
  ],
  clients: [],
  errorRequests: [],
  models: [
    {
      name: "<value>",
      sessions: 945185,
      calls: 796720,
      errors: 19162,
    },
  ],
  intents: [
    {
      intent: "<value>",
      tool: "<value>",
      calls: 393414,
      errors: 405410,
    },
  ],
  elicitations: [
    {
      method: "<value>",
      tool: "<value>",
      requests: 604063,
      accepted: 353918,
      declined: 320198,
      cancelled: 908536,
      errors: 814983,
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
      renders: 607303,
      sessions: 172985,
      errors: 586199,
    },
  ],
  catalog: {
    listedAt: "<value>",
    unusedTools: [
      {
        name: "<value>",
        description: "coaxingly tributary before",
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
| `daily`                                                                                                               | [models.GeoMcpAnalyticsResponseDaily](../models/geo-mcp-analytics-response-daily.md)[]                                | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `tools`                                                                                                               | [models.Tool](../models/tool.md)[]                                                                                    | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `clients`                                                                                                             | [models.Client](../models/client.md)[]                                                                                | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `errorRequests`                                                                                                       | [models.ErrorRequest](../models/error-request.md)[]                                                                   | :heavy_check_mark:                                                                                                    | Most recent failed requests, newest first.                                                                            |
| `models`                                                                                                              | [models.GeoMcpAnalyticsResponseModel](../models/geo-mcp-analytics-response-model.md)[]                                | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `intents`                                                                                                             | [models.GeoMcpAnalyticsResponseIntent](../models/geo-mcp-analytics-response-intent.md)[]                              | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `elicitations`                                                                                                        | [models.Elicitation](../models/elicitation.md)[]                                                                      | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `uiRenders`                                                                                                           | [models.UiRender](../models/ui-render.md)[]                                                                           | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `catalog`                                                                                                             | [models.Catalog](../models/catalog.md)                                                                                | :heavy_check_mark:                                                                                                    | Tools from the latest tools/list that were never called in the window. Null before a listing is seen.                 |
| `organization`                                                                                                        | [models.GeoMcpAnalyticsResponseOrganization](../models/geo-mcp-analytics-response-organization.md)                    | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |