# Failure

## Example Usage

```typescript
import { Failure } from "@usenotra/sdk/models";

let value: Failure = {
  message: "<value>",
  clientName: "<value>",
  status: "ok",
  errorCode: 476870,
  calls: 239652,
  lastSeenAt: "<value>",
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `message`                                                                                 | *string*                                                                                  | :heavy_check_mark:                                                                        | N/A                                                                                       |
| `clientName`                                                                              | *string*                                                                                  | :heavy_check_mark:                                                                        | N/A                                                                                       |
| `status`                                                                                  | [models.GeoMcpToolDetailResponseStatus](../models/geo-mcp-tool-detail-response-status.md) | :heavy_check_mark:                                                                        | N/A                                                                                       |
| `errorCode`                                                                               | *number*                                                                                  | :heavy_check_mark:                                                                        | N/A                                                                                       |
| `calls`                                                                                   | *number*                                                                                  | :heavy_check_mark:                                                                        | N/A                                                                                       |
| `lastSeenAt`                                                                              | *string*                                                                                  | :heavy_check_mark:                                                                        | N/A                                                                                       |