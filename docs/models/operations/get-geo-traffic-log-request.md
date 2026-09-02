# GetGeoTrafficLogRequest

## Example Usage

```typescript
import { GetGeoTrafficLogRequest } from "@usenotra/sdk/models/operations";

let value: GetGeoTrafficLogRequest = {
  projectId: "b1f2c3d4-0000-4000-8000-000000000000",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        | Example                                                                            |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `projectId`                                                                        | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                | b1f2c3d4-0000-4000-8000-000000000000                                               |
| `limit`                                                                            | *number*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |                                                                                    |
| `visitorTypes`                                                                     | *string*                                                                           | :heavy_minus_sign:                                                                 | Comma-separated. One or more of: crawler, ai_referral.                             |                                                                                    |
| `categories`                                                                       | *string*                                                                           | :heavy_minus_sign:                                                                 | Comma-separated. One or more of: training-crawler, search-index, assistant-browse. |                                                                                    |