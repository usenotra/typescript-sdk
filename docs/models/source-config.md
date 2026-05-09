# SourceConfig

## Example Usage

```typescript
import { SourceConfig } from "@usenotra/sdk/models";

let value: SourceConfig = {
  cron: {
    frequency: "monthly",
    hour: 253345,
    minute: 762301,
  },
};
```

## Fields

| Field                            | Type                             | Required                         | Description                      |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `cron`                           | [models.Cron](../models/cron.md) | :heavy_check_mark:               | N/A                              |