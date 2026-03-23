# UpdateBrandIdentityRequest

## Example Usage

```typescript
import { UpdateBrandIdentityRequest } from "@usenotra/sdk/models/operations";

let value: UpdateBrandIdentityRequest = {
  brandIdentityId: "51c2f3aa-efdd-4e28-8e69-23fa2dfd3561",
  body: {
    name: "Notra",
    websiteUrl: "https://usenotra.com",
    companyName: "Notra",
    companyDescription: "AI-native content workflows for software teams.",
    toneProfile: "Professional",
    customTone: "Clear, direct, and technically confident",
    customInstructions: "Avoid hype. Prioritize concrete examples.",
    audience: "Engineering leaders and developer tooling teams.",
    language: "English",
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                | Example                                                                                                    |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `brandIdentityId`                                                                                          | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        | 51c2f3aa-efdd-4e28-8e69-23fa2dfd3561                                                                       |
| `body`                                                                                                     | [operations.UpdateBrandIdentityRequestBody](../../models/operations/update-brand-identity-request-body.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |                                                                                                            |