# ListSchedulesOutputConfig

## Example Usage

```typescript
import { ListSchedulesOutputConfig } from "@usenotra/sdk/models/operations";

let value: ListSchedulesOutputConfig = {
  brandVoiceId: "51c2f3aa-efdd-4e28-8e69-23fa2dfd3561",
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 | Example                                                                                                     |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `publishDestination`                                                                                        | [operations.ListSchedulesPublishDestination](../../models/operations/list-schedules-publish-destination.md) | :heavy_minus_sign:                                                                                          | Where auto-published posts are sent.                                                                        |                                                                                                             |
| `brandVoiceId`                                                                                              | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | Brand identity ID to write in. Defaults to the organization's default brand identity.                       | 51c2f3aa-efdd-4e28-8e69-23fa2dfd3561                                                                        |