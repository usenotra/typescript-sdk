# CreateBrandColorResponse

Brand color created successfully

## Example Usage

```typescript
import { CreateBrandColorResponse } from "@usenotra/sdk/models/operations";

let value: CreateBrandColorResponse = {
  organization: {
    id: "<id>",
    slug: "<value>",
    name: "<value>",
    logo: null,
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
| `organization`                                                                                        | [operations.CreateBrandColorOrganization](../../models/operations/create-brand-color-organization.md) | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `color`                                                                                               | [operations.CreateBrandColorColor](../../models/operations/create-brand-color-color.md)               | :heavy_check_mark:                                                                                    | N/A                                                                                                   |