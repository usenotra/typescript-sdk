# ListBrandColorsResponse

Brand colors fetched successfully

## Example Usage

```typescript
import { ListBrandColorsResponse } from "@usenotra/sdk/models/operations";

let value: ListBrandColorsResponse = {
  organization: {
    id: "<id>",
    slug: "<value>",
    name: "<value>",
    logo: "<value>",
  },
  colors: [
    {
      id: "<id>",
      role: "primary",
      name: "<value>",
      lightValue: "#13A0DC",
      darkValue: "<value>",
      usage: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `organization`                                                                                      | [operations.ListBrandColorsOrganization](../../models/operations/list-brand-colors-organization.md) | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `colors`                                                                                            | [operations.ListBrandColorsColor](../../models/operations/list-brand-colors-color.md)[]             | :heavy_check_mark:                                                                                  | N/A                                                                                                 |