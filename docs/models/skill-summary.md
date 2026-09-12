# SkillSummary

## Example Usage

```typescript
import { SkillSummary } from "@usenotra/sdk/models";

let value: SkillSummary = {
  id: "<id>",
  name: "<value>",
  description: "which indeed even quadruple powerfully",
  isSystem: false,
  updatedAt: "1735638463334",
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `id`                                                                                    | *string*                                                                                | :heavy_check_mark:                                                                      | N/A                                                                                     |
| `name`                                                                                  | *string*                                                                                | :heavy_check_mark:                                                                      | N/A                                                                                     |
| `description`                                                                           | *string*                                                                                | :heavy_check_mark:                                                                      | N/A                                                                                     |
| `isSystem`                                                                              | *boolean*                                                                               | :heavy_check_mark:                                                                      | True for built-in skills provided by Notra. System skills cannot be renamed or deleted. |
| `updatedAt`                                                                             | *string*                                                                                | :heavy_check_mark:                                                                      | N/A                                                                                     |