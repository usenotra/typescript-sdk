# DeleteIntegrationResponse

Integration deleted successfully

## Example Usage

```typescript
import { DeleteIntegrationResponse } from "@usenotra/sdk/models/operations";

let value: DeleteIntegrationResponse = {
  id: "<id>",
  organization: {
    id: "<id>",
    slug: "<value>",
    name: "<value>",
    logo: "<value>",
  },
  disabledSchedules: [],
  disabledEvents: [],
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                              | *string*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               |
| `organization`                                                                                                    | [operations.DeleteIntegrationOrganization](../../models/operations/delete-integration-organization.md)            | :heavy_check_mark:                                                                                                | N/A                                                                                                               |
| `disabledSchedules`                                                                                               | [operations.DeleteIntegrationDisabledSchedule](../../models/operations/delete-integration-disabled-schedule.md)[] | :heavy_check_mark:                                                                                                | N/A                                                                                                               |
| `disabledEvents`                                                                                                  | [operations.DeleteIntegrationDisabledEvent](../../models/operations/delete-integration-disabled-event.md)[]       | :heavy_check_mark:                                                                                                | N/A                                                                                                               |