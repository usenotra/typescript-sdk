# CreateSkillRequest

## Example Usage

```typescript
import { CreateSkillRequest } from "@usenotra/sdk/models";

let value: CreateSkillRequest = {
  name: "humanizer",
  description: "Polish near-final drafts so they sound natural and specific.",
  content: "<value>",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `name`                                                       | *string*                                                     | :heavy_check_mark:                                           | Skill name. Lowercase letters, digits, and hyphens only.     | humanizer                                                    |
| `description`                                                | *string*                                                     | :heavy_check_mark:                                           | Short description of when the skill should be used.          | Polish near-final drafts so they sound natural and specific. |
| `content`                                                    | *string*                                                     | :heavy_check_mark:                                           | Full skill instructions, typically Markdown.                 |                                                              |