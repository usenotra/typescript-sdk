# PatchSkillRequest

## Example Usage

```typescript
import { PatchSkillRequest } from "@usenotra/sdk/models";

let value: PatchSkillRequest = {
  name: "humanizer",
  description: "Polish near-final drafts so they sound natural and specific.",
  content:
    "# Humanizer\n\nRewrite the draft so it reads like a person wrote it. Remove filler, vary sentence length, and keep concrete details.",
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        | Example                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                                             | *string*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | Skill name. Lowercase letters, digits, and hyphens only.                                                                           | humanizer                                                                                                                          |
| `description`                                                                                                                      | *string*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | Short description of when the skill should be used.                                                                                | Polish near-final drafts so they sound natural and specific.                                                                       |
| `content`                                                                                                                          | *string*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | Full skill instructions, typically Markdown.                                                                                       | # Humanizer<br/><br/>Rewrite the draft so it reads like a person wrote it. Remove filler, vary sentence length, and keep concrete details. |