# GeoWebAnalyticsUtmResponseRow

## Example Usage

```typescript
import { GeoWebAnalyticsUtmResponseRow } from "@usenotra/sdk/models";

let value: GeoWebAnalyticsUtmResponseRow = {
  value: "<value>",
  sessions: 233757,
  previousSessions: 360614,
  visitors: 506555,
};
```

## Fields

| Field                                                                                                                                         | Type                                                                                                                                          | Required                                                                                                                                      | Description                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `value`                                                                                                                                       | *string*                                                                                                                                      | :heavy_check_mark:                                                                                                                            | Source and medium are lowercased. Campaign, term and content values that look like an email address, a UUID or a token are reported as `:id`. |
| `sessions`                                                                                                                                    | *number*                                                                                                                                      | :heavy_check_mark:                                                                                                                            | N/A                                                                                                                                           |
| `previousSessions`                                                                                                                            | *number*                                                                                                                                      | :heavy_check_mark:                                                                                                                            | N/A                                                                                                                                           |
| `visitors`                                                                                                                                    | *number*                                                                                                                                      | :heavy_check_mark:                                                                                                                            | N/A                                                                                                                                           |