# UpdateEventTriggerSourceConfig

## Example Usage

```typescript
import { UpdateEventTriggerSourceConfig } from "@usenotra/sdk/models/operations";

let value: UpdateEventTriggerSourceConfig = {
  eventTypes: [
    "push",
  ],
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `eventTypes`                                                                                           | [operations.UpdateEventTriggerEventType](../../models/operations/update-event-trigger-event-type.md)[] | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `includePreReleases`                                                                                   | *boolean*                                                                                              | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |