# UpdateEventTriggerResponse

Event trigger updated successfully

## Example Usage

```typescript
import { UpdateEventTriggerResponse } from "@usenotra/sdk/models/operations";

let value: UpdateEventTriggerResponse = {
  eventTrigger: {
    id: "<id>",
    organizationId: "<id>",
    name: "<value>",
    sourceType: "github_webhook",
    sourceConfig: {
      eventTypes: [
        "release",
      ],
    },
    targets: {
      repositoryIds: [],
    },
    outputType: "linkedin_post",
    enabled: false,
    autoPublish: false,
    createdAt: "1714946004580",
    updatedAt: "1735616514316",
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
| `eventTrigger`                                                                                             | [operations.UpdateEventTriggerEventTrigger](../../models/operations/update-event-trigger-event-trigger.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `organization`                                                                                             | [operations.UpdateEventTriggerOrganization](../../models/operations/update-event-trigger-organization.md)  | :heavy_check_mark:                                                                                         | N/A                                                                                                        |