# CreateEventTriggerSourceConfigRequest

## Example Usage

```typescript
import { CreateEventTriggerSourceConfigRequest } from "@usenotra/sdk/models/operations";

let value: CreateEventTriggerSourceConfigRequest = {
  eventTypes: [],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `eventTypes`                                                                   | [operations.EventTypeRequest](../../models/operations/event-type-request.md)[] | :heavy_check_mark:                                                             | N/A                                                                            |
| `includePreReleases`                                                           | *boolean*                                                                      | :heavy_minus_sign:                                                             | N/A                                                                            |