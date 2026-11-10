# Vital

## Example Usage

```typescript
import { Vital } from "@usenotra/sdk/models";

let value: Vital = {
  metric: "lcp",
  p75: 511.07,
  samples: 594256,
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `metric`                                                                  | [models.Metric](../models/metric.md)                                      | :heavy_check_mark:                                                        | N/A                                                                       |
| `p75`                                                                     | *number*                                                                  | :heavy_check_mark:                                                        | 75th percentile in milliseconds, or the layout shift score x1000 for cls. |
| `samples`                                                                 | *number*                                                                  | :heavy_check_mark:                                                        | N/A                                                                       |