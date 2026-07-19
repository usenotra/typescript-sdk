# DeleteEventTriggerResponse

Event trigger deleted successfully

## Example Usage

```typescript
import { DeleteEventTriggerResponse } from "@usenotra/sdk/models/operations";

let value: DeleteEventTriggerResponse = {
  id: "<id>",
  organization: {
    id: "<id>",
    slug: "<value>",
    name: "<value>",
    logo: null,
  },
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                      | *string*                                                                                                  | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `organization`                                                                                            | [operations.DeleteEventTriggerOrganization](../../models/operations/delete-event-trigger-organization.md) | :heavy_check_mark:                                                                                        | N/A                                                                                                       |