# SourceConfigRequest

## Example Usage

```typescript
import { SourceConfigRequest } from "@usenotra/sdk/models/operations";

let value: SourceConfigRequest = {
  cron: {
    frequency: "weekly",
    hour: 690067,
    minute: 398680,
  },
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `cron`                                                            | [operations.CronRequest](../../models/operations/cron-request.md) | :heavy_check_mark:                                                | N/A                                                               |