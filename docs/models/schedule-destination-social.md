# ScheduleDestinationSocial

## Example Usage

```typescript
import { ScheduleDestinationSocial } from "@usenotra/sdk/models";

let value: ScheduleDestinationSocial = {
  destination: "social",
  accountId: "acc_123",
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     | Example                                                                                                         |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `destination`                                                                                                   | *"social"*                                                                                                      | :heavy_check_mark:                                                                                              | N/A                                                                                                             |                                                                                                                 |
| `accountId`                                                                                                     | *string*                                                                                                        | :heavy_check_mark:                                                                                              | Connected X or LinkedIn account ID. Only for tweets and LinkedIn posts, on an account of the matching platform. | acc_123                                                                                                         |