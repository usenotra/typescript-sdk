# UpdateBrandColorResponse

Brand color updated successfully

## Example Usage

```typescript
import { UpdateBrandColorResponse } from "@usenotra/sdk/models/operations";

let value: UpdateBrandColorResponse = {
  organization: {
    id: "<id>",
    slug: "<value>",
    name: "<value>",
    logo: "<value>",
  },
  color: {
    id: "<id>",
    role: "primary",
    name: "<value>",
    lightValue: "#13A0DC",
    darkValue: "<value>",
    usage: "<value>",
  },
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `organization`                                                                                        | [operations.UpdateBrandColorOrganization](../../models/operations/update-brand-color-organization.md) | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `color`                                                                                               | [operations.UpdateBrandColorColor](../../models/operations/update-brand-color-color.md)               | :heavy_check_mark:                                                                                    | N/A                                                                                                   |