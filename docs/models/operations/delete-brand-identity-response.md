# DeleteBrandIdentityResponse

Brand identity deleted successfully

## Example Usage

```typescript
import { DeleteBrandIdentityResponse } from "@usenotra/sdk/models/operations";

let value: DeleteBrandIdentityResponse = {
  id: "<id>",
  organization: {
    id: "<id>",
    slug: "<value>",
    name: "<value>",
    logo: "<value>",
  },
  disabledSchedules: [],
  disabledEvents: [
    {
      id: "<id>",
      name: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                        | *string*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `organization`                                                                                              | [operations.DeleteBrandIdentityOrganization](../../models/operations/delete-brand-identity-organization.md) | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `disabledSchedules`                                                                                         | [operations.DisabledSchedule](../../models/operations/disabled-schedule.md)[]                               | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `disabledEvents`                                                                                            | [operations.DisabledEvent](../../models/operations/disabled-event.md)[]                                     | :heavy_check_mark:                                                                                          | N/A                                                                                                         |