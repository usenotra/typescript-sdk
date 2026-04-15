# DeleteScheduleResponse

Schedule deleted successfully

## Example Usage

```typescript
import { DeleteScheduleResponse } from "@usenotra/sdk/models/operations";

let value: DeleteScheduleResponse = {
  id: "<id>",
  organization: {
    id: "<id>",
    slug: "<value>",
    name: "<value>",
    logo: "<value>",
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `id`                                                                                             | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `organization`                                                                                   | [operations.DeleteScheduleOrganization](../../models/operations/delete-schedule-organization.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |