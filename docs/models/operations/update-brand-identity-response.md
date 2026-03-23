# UpdateBrandIdentityResponse

Brand identity updated successfully

## Example Usage

```typescript
import { UpdateBrandIdentityResponse } from "@usenotra/sdk/models/operations";

let value: UpdateBrandIdentityResponse = {
  organization: {
    id: "<id>",
    slug: "<value>",
    name: "<value>",
    logo: null,
  },
  brandIdentity: {
    id: "<id>",
    name: "<value>",
    isDefault: true,
    websiteUrl: "https://uniform-napkin.org",
    companyName: "Schaden, Ziemann and Langosh",
    companyDescription: "<value>",
    toneProfile: "<value>",
    customTone: "<value>",
    customInstructions: "<value>",
    audience: null,
    language: "<value>",
    createdAt: "1726549031423",
    updatedAt: "1735623660431",
  },
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `organization`                                                                                                 | [operations.UpdateBrandIdentityOrganization](../../models/operations/update-brand-identity-organization.md)    | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `brandIdentity`                                                                                                | [operations.UpdateBrandIdentityBrandIdentity](../../models/operations/update-brand-identity-brand-identity.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |