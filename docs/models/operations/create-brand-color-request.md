# CreateBrandColorRequest

## Example Usage

```typescript
import { CreateBrandColorRequest } from "@usenotra/sdk/models/operations";

let value: CreateBrandColorRequest = {
  brandIdentityId: "51c2f3aa-efdd-4e28-8e69-23fa2dfd3561",
  body: {
    role: "primary",
    lightValue: "#13A0DC",
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `brandIdentityId`                                                                                    | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  | 51c2f3aa-efdd-4e28-8e69-23fa2dfd3561                                                                 |
| `body`                                                                                               | [operations.CreateBrandColorRequestBody](../../models/operations/create-brand-color-request-body.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |                                                                                                      |