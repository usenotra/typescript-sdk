# Host

## Example Usage

```typescript
import { Host } from "@usenotra/sdk/models";

let value: Host = {
  host: "zealous-fisherman.info",
  siteId: "<id>",
  views: 453112,
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `host`                                           | *string*                                         | :heavy_check_mark:                               | N/A                                              |
| `siteId`                                         | *string*                                         | :heavy_check_mark:                               | Notra Sites site id, empty for your own domains. |
| `views`                                          | *number*                                         | :heavy_check_mark:                               | N/A                                              |