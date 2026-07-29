# ListEventTriggersResponse

Event triggers fetched successfully

## Example Usage

```typescript
import { ListEventTriggersResponse } from "@usenotra/sdk/models/operations";

let value: ListEventTriggersResponse = {
  eventTriggers: [],
  repositoryMap: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  organization: {
    id: "<id>",
    slug: "<value>",
    name: "<value>",
    logo: "<value>",
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `eventTriggers`                                                                                            | [operations.ListEventTriggersEventTrigger](../../models/operations/list-event-triggers-event-trigger.md)[] | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `repositoryMap`                                                                                            | Record<string, *string*>                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `organization`                                                                                             | [operations.ListEventTriggersOrganization](../../models/operations/list-event-triggers-organization.md)    | :heavy_check_mark:                                                                                         | N/A                                                                                                        |