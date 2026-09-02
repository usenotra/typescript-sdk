# ScoreBreakdown

## Example Usage

```typescript
import { ScoreBreakdown } from "@usenotra/sdk/models";

let value: ScoreBreakdown = {
  essential: {
    earned: 8416.39,
    available: 2202.2,
    passing: 4680.52,
    total: 8541.47,
  },
  recommended: {
    earned: 7714.26,
    available: 9243.83,
    passing: 1940.43,
    total: 8803.42,
  },
  bonus: {
    points: 5006.25,
    positiveSignals: 4529.24,
  },
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `essential`                                    | [models.Essential](../models/essential.md)     | :heavy_check_mark:                             | N/A                                            |
| `recommended`                                  | [models.Recommended](../models/recommended.md) | :heavy_check_mark:                             | N/A                                            |
| `bonus`                                        | [models.Bonus](../models/bonus.md)             | :heavy_check_mark:                             | N/A                                            |