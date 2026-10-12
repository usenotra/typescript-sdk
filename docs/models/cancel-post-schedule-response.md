# CancelPostScheduleResponse

## Example Usage

```typescript
import { CancelPostScheduleResponse } from "@usenotra/sdk/models";

let value: CancelPostScheduleResponse = {
  organization: {
    id: "<id>",
    slug: "<value>",
    name: "<value>",
    logo: "<value>",
  },
  canceled: 956707,
  inProgress: false,
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `organization`                                                                                           | [models.CancelPostScheduleResponseOrganization](../models/cancel-post-schedule-response-organization.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `canceled`                                                                                               | *number*                                                                                                 | :heavy_check_mark:                                                                                       | Destinations that were canceled or cleared.                                                              |
| `inProgress`                                                                                             | *boolean*                                                                                                | :heavy_check_mark:                                                                                       | True when a destination was already publishing; it cannot be stopped and finishes on its own.            |