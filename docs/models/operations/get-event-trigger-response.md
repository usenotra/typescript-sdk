# GetEventTriggerResponse

Event trigger fetched successfully

## Example Usage

```typescript
import { GetEventTriggerResponse } from "@usenotra/sdk/models/operations";

let value: GetEventTriggerResponse = {
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
      repositoryIds: [
        "<value 1>",
        "<value 2>",
      ],
    },
    outputType: "image",
    enabled: false,
    autoPublish: true,
    createdAt: "1721779827994",
    updatedAt: "1735610028202",
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

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `eventTrigger`                                                                                       | [operations.GetEventTriggerEventTrigger](../../models/operations/get-event-trigger-event-trigger.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `organization`                                                                                       | [operations.GetEventTriggerOrganization](../../models/operations/get-event-trigger-organization.md)  | :heavy_check_mark:                                                                                   | N/A                                                                                                  |