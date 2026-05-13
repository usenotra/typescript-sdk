# PatchSkillRequest

## Example Usage

```typescript
import { PatchSkillRequest } from "@usenotra/sdk/models";

let value: PatchSkillRequest = {
  name: "humanizer",
  description: "Polish near-final drafts so they sound natural and specific.",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `name`                                                       | *string*                                                     | :heavy_minus_sign:                                           | Skill name. Lowercase letters, digits, and hyphens only.     | humanizer                                                    |
| `description`                                                | *string*                                                     | :heavy_minus_sign:                                           | Short description of when the skill should be used.          | Polish near-final drafts so they sound natural and specific. |
| `content`                                                    | *string*                                                     | :heavy_minus_sign:                                           | Full skill instructions, typically Markdown.                 |                                                              |