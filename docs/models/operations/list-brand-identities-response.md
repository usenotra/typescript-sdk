# ListBrandIdentitiesResponse

Brand identities fetched successfully

## Example Usage

```typescript
import { ListBrandIdentitiesResponse } from "@usenotra/sdk/models/operations";

let value: ListBrandIdentitiesResponse = {
  organization: {
    id: "<id>",
    slug: "<value>",
    name: "<value>",
    logo: "<value>",
  },
  brandIdentities: [],
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `organization`                                                                                                   | [operations.ListBrandIdentitiesOrganization](../../models/operations/list-brand-identities-organization.md)      | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `brandIdentities`                                                                                                | [operations.ListBrandIdentitiesBrandIdentity](../../models/operations/list-brand-identities-brand-identity.md)[] | :heavy_check_mark:                                                                                               | N/A                                                                                                              |