# GeoWebAnalyticsBreakdownsResponseSource

## Example Usage

```typescript
import { GeoWebAnalyticsBreakdownsResponseSource } from "@usenotra/sdk/models";

let value: GeoWebAnalyticsBreakdownsResponseSource = {
  group: "<value>",
  source: "<value>",
  aiProduct: "<value>",
  sessions: 426636,
  previousSessions: 277830,
  visitors: 50626,
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `group`                                                        | *string*                                                       | :heavy_check_mark:                                             | Referrer group: ai, direct, internal, search, social or other. |
| `source`                                                       | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `aiProduct`                                                    | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `sessions`                                                     | *number*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `previousSessions`                                             | *number*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `visitors`                                                     | *number*                                                       | :heavy_check_mark:                                             | N/A                                                            |