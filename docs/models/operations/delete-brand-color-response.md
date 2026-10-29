# DeleteBrandColorResponse

Brand color deleted successfully

## Example Usage

```typescript
import { DeleteBrandColorResponse } from "@usenotra/sdk/models/operations";

let value: DeleteBrandColorResponse = {
  organization: {
    id: "<id>",
    slug: "<value>",
    name: "<value>",
    logo: "<value>",
  },
  id: "<id>",
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `organization`                                                                                        | [operations.DeleteBrandColorOrganization](../../models/operations/delete-brand-color-organization.md) | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `id`                                                                                                  | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |