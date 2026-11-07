# UpdateBrandColorRequest

## Example Usage

```typescript
import { UpdateBrandColorRequest } from "@usenotra/sdk/models/operations";

let value: UpdateBrandColorRequest = {
  brandIdentityId: "51c2f3aa-efdd-4e28-8e69-23fa2dfd3561",
  colorId: "8f2c1d4e-5b6a-4c3d-9e8f-7a6b5c4d3e2f",
  body: {
    role: "primary",
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `brandIdentityId`                                                                                    | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  | 51c2f3aa-efdd-4e28-8e69-23fa2dfd3561                                                                 |
| `colorId`                                                                                            | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  | 8f2c1d4e-5b6a-4c3d-9e8f-7a6b5c4d3e2f                                                                 |
| `body`                                                                                               | [operations.UpdateBrandColorRequestBody](../../models/operations/update-brand-color-request-body.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |                                                                                                      |