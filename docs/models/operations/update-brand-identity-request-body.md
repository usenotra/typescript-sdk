# UpdateBrandIdentityRequestBody

## Example Usage

```typescript
import { UpdateBrandIdentityRequestBody } from "@usenotra/sdk/models/operations";

let value: UpdateBrandIdentityRequestBody = {
  name: "Notra",
  websiteUrl: "https://usenotra.com",
  companyName: "Notra",
  companyDescription: "AI-native content workflows for software teams.",
  toneProfile: "Professional",
  customTone: "Clear, direct, and technically confident",
  customInstructions: "Avoid hype. Prioritize concrete examples.",
  audience: "Engineering leaders and developer tooling teams.",
  language: "English",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    | Example                                                                                        |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `name`                                                                                         | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            | Notra                                                                                          |
| `websiteUrl`                                                                                   | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            | https://usenotra.com                                                                           |
| `companyName`                                                                                  | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            | Notra                                                                                          |
| `companyDescription`                                                                           | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            | AI-native content workflows for software teams.                                                |
| `toneProfile`                                                                                  | [operations.ToneProfile](../../models/operations/tone-profile.md)                              | :heavy_minus_sign:                                                                             | Set a preset tone profile. When provided without customTone, any saved custom tone is cleared. | Professional                                                                                   |
| `customTone`                                                                                   | *string*                                                                                       | :heavy_minus_sign:                                                                             | Provide a custom tone override. Send an empty string or null to clear it.                      | Clear, direct, and technically confident                                                       |
| `customInstructions`                                                                           | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            | Avoid hype. Prioritize concrete examples.                                                      |
| `audience`                                                                                     | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            | Engineering leaders and developer tooling teams.                                               |
| `language`                                                                                     | [operations.Language](../../models/operations/language.md)                                     | :heavy_minus_sign:                                                                             | N/A                                                                                            | English                                                                                        |
| `isDefault`                                                                                    | *true*                                                                                         | :heavy_minus_sign:                                                                             | Set this brand identity as the organization's default. Only true is accepted.                  | true                                                                                           |