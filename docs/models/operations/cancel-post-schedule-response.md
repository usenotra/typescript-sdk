# CancelPostScheduleResponse

## Example Usage

```typescript
import { CancelPostScheduleResponse } from "@usenotra/sdk/models/operations";

let value: CancelPostScheduleResponse = {
  headers: {},
  result: {
    organization: {
      id: "<id>",
      slug: "<value>",
      name: "<value>",
      logo: "<value>",
    },
    canceled: 954721,
    inProgress: false,
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `headers`                                                                          | Record<string, *string*[]>                                                         | :heavy_check_mark:                                                                 | N/A                                                                                |
| `result`                                                                           | [models.CancelPostScheduleResponse](../../models/cancel-post-schedule-response.md) | :heavy_check_mark:                                                                 | N/A                                                                                |