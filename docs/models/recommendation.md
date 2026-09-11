# Recommendation

## Example Usage

```typescript
import { Recommendation } from "@usenotra/sdk/models";

let value: Recommendation = {
  action: "merge",
  reason: "<value>",
  targets: [],
};
```

## Fields

| Field                                                                                                                                      | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `action`                                                                                                                                   | [models.Action](../models/action.md)                                                                                                       | :heavy_check_mark:                                                                                                                         | What to do with this query cluster: create a new page, update the strongest existing page, merge overlapping pages, or ignore thin demand. |
| `reason`                                                                                                                                   | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `targets`                                                                                                                                  | [models.Target](../models/target.md)[]                                                                                                     | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |