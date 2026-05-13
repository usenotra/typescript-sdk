# ListSkillsResponse

## Example Usage

```typescript
import { ListSkillsResponse } from "@usenotra/sdk/models";

let value: ListSkillsResponse = {
  skills: [
    {
      id: "<id>",
      name: "<value>",
      description: "cornet dead jealous nor for judgementally softly simple",
      isSystem: false,
      updatedAt: "1735660098736",
    },
  ],
};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `skills`                                            | [models.SkillSummary](../models/skill-summary.md)[] | :heavy_check_mark:                                  | N/A                                                 |