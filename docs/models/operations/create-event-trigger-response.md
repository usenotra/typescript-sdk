# CreateEventTriggerResponse

Event trigger created successfully

## Example Usage

```typescript
import { CreateEventTriggerResponse } from "@usenotra/sdk/models/operations";

let value: CreateEventTriggerResponse = {
  eventTrigger: {
    id: "<id>",
    organizationId: "<id>",
    name: "<value>",
    sourceType: "github_webhook",
    sourceConfig: {
      eventTypes: [],
    },
    targets: {
      repositoryIds: [
        "<value 1>",
        "<value 2>",
      ],
    },
    outputType: "linkedin_post",
    enabled: false,
    autoPublish: false,
    createdAt: "1720604170182",
    updatedAt: "1735631192324",
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
| `eventTrigger`                                                                                             | [operations.CreateEventTriggerEventTrigger](../../models/operations/create-event-trigger-event-trigger.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `organization`                                                                                             | [operations.CreateEventTriggerOrganization](../../models/operations/create-event-trigger-organization.md)  | :heavy_check_mark:                                                                                         | N/A                                                                                                        |