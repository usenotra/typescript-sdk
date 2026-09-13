# PatchSkillRequest

## Example Usage

```typescript
import { PatchSkillRequest } from "@usenotra/sdk/models/operations";

let value: PatchSkillRequest = {
  name: "humanizer",
  body: {
    name: "humanizer",
    description: "Polish near-final drafts so they sound natural and specific.",
    content:
      "# Humanizer\n\nRewrite the draft so it reads like a person wrote it. Remove filler, vary sentence length, and keep concrete details.",
  },
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     | Example                                                         |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `name`                                                          | *string*                                                        | :heavy_check_mark:                                              | Skill name. Lowercase letters, digits, and hyphens only.        | humanizer                                                       |
| `body`                                                          | [models.PatchSkillRequest](../../models/patch-skill-request.md) | :heavy_check_mark:                                              | N/A                                                             |                                                                 |