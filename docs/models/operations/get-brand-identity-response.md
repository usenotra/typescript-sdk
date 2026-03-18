# GetBrandIdentityResponse

Brand identity fetched successfully

## Example Usage

```typescript
import { GetBrandIdentityResponse } from "@usenotra/sdk/models/operations";

let value: GetBrandIdentityResponse = {
  brandIdentity: {
    id: "<id>",
    name: "<value>",
    isDefault: true,
  },
  organization: {
    id: "<id>",
    slug: "<value>",
    name: "<value>",
    logo: "<value>",
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `brandIdentity`                                                                                          | [operations.GetBrandIdentityBrandIdentity](../../models/operations/get-brand-identity-brand-identity.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `organization`                                                                                           | [operations.GetBrandIdentityOrganization](../../models/operations/get-brand-identity-organization.md)    | :heavy_check_mark:                                                                                       | N/A                                                                                                      |