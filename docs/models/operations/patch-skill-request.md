# PatchSkillRequest

## Example Usage

```typescript
import { PatchSkillRequest } from "@usenotra/sdk/models/operations";

let value: PatchSkillRequest = {
  name: "humanizer",
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     | Example                                                         |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `name`                                                          | *string*                                                        | :heavy_check_mark:                                              | Skill name. Lowercase letters, digits, and hyphens only.        | humanizer                                                       |
| `body`                                                          | [models.PatchSkillRequest](../../models/patch-skill-request.md) | :heavy_minus_sign:                                              | N/A                                                             |                                                                 |