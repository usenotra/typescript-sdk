# OutboundLink

## Example Usage

```typescript
import { OutboundLink } from "@usenotra/sdk/models";

let value: OutboundLink = {
  url: "https://gruesome-clavicle.biz",
  clicks: 418199,
  previousClicks: 159813,
  visitors: 287974,
};
```

## Fields

| Field                                         | Type                                          | Required                                      | Description                                   |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `url`                                         | *string*                                      | :heavy_check_mark:                            | Destination host and path, without the query. |
| `clicks`                                      | *number*                                      | :heavy_check_mark:                            | N/A                                           |
| `previousClicks`                              | *number*                                      | :heavy_check_mark:                            | N/A                                           |
| `visitors`                                    | *number*                                      | :heavy_check_mark:                            | N/A                                           |