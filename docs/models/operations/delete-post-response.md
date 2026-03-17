# DeletePostResponse

Post deleted successfully

## Example Usage

```typescript
import { DeletePostResponse } from "@usenotra/sdk/models/operations";

let value: DeletePostResponse = {
  id: "<id>",
  organization: {
    id: "<id>",
    slug: "<value>",
    name: "<value>",
    logo: "<value>",
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `id`                                                                                     | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `organization`                                                                           | [operations.DeletePostOrganization](../../models/operations/delete-post-organization.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |