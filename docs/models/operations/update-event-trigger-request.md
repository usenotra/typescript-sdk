# UpdateEventTriggerRequest

## Example Usage

```typescript
import { UpdateEventTriggerRequest } from "@usenotra/sdk/models/operations";

let value: UpdateEventTriggerRequest = {
  triggerId: "trig_123",
  body: {
    sourceType: "github_webhook",
    sourceConfig: {
      eventTypes: [
        "push",
      ],
    },
    targets: {
      repositoryIds: [
        "<value 1>",
        "<value 2>",
      ],
    },
    outputType: "changelog",
    enabled: false,
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `triggerId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            | trig_123                                                                       |
| `body`                                                                         | [models.PatchEventTriggerRequest](../../models/patch-event-trigger-request.md) | :heavy_check_mark:                                                             | N/A                                                                            |                                                                                |