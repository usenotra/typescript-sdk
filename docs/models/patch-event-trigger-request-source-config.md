# PatchEventTriggerRequestSourceConfig

## Example Usage

```typescript
import { PatchEventTriggerRequestSourceConfig } from "@usenotra/sdk/models";

let value: PatchEventTriggerRequestSourceConfig = {
  eventTypes: [
    "push",
  ],
};
```

## Fields

| Field                                         | Type                                          | Required                                      | Description                                   |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `eventTypes`                                  | [models.EventType](../models/event-type.md)[] | :heavy_check_mark:                            | N/A                                           |
| `includePreReleases`                          | *boolean*                                     | :heavy_minus_sign:                            | N/A                                           |