# CancelPostScheduleResponse

## Example Usage

```typescript
import { CancelPostScheduleResponse } from "@usenotra/sdk/models/operations";

let value: CancelPostScheduleResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: {
    organization: {
      id: "<id>",
      slug: "<value>",
      name: "<value>",
      logo: "<value>",
    },
    canceled: 770371,
    inProgress: true,
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `headers`                                                                          | Record<string, *string*[]>                                                         | :heavy_check_mark:                                                                 | N/A                                                                                |
| `result`                                                                           | [models.CancelPostScheduleResponse](../../models/cancel-post-schedule-response.md) | :heavy_check_mark:                                                                 | N/A                                                                                |