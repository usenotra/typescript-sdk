# ErrorRequest

## Example Usage

```typescript
import { ErrorRequest } from "@usenotra/sdk/models";

let value: ErrorRequest = {
  capturedAt: "<value>",
  clientName: "<value>",
  clientVersion: "<value>",
  method: "<value>",
  target: "<value>",
  status: "ok",
  errorCode: 348522,
  errorMessage: "<value>",
  durationMs: 35721,
  model: "Expedition",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `capturedAt`                                                                           | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `clientName`                                                                           | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `clientVersion`                                                                        | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `method`                                                                               | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `target`                                                                               | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `status`                                                                               | [models.GeoMcpAnalyticsResponseStatus](../models/geo-mcp-analytics-response-status.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `errorCode`                                                                            | *number*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `errorMessage`                                                                         | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `durationMs`                                                                           | *number*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `model`                                                                                | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |