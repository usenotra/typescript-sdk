# Workspace

## Example Usage

```typescript
import { Workspace } from "@usenotra/sdk/models";

let value: Workspace = {
  id: "<id>",
  slug: "<value>",
  name: "<value>",
  logo: "<value>",
  role: "<value>",
  status: "pending",
  isCurrent: true,
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `id`                                                                              | *string*                                                                          | :heavy_check_mark:                                                                | N/A                                                                               |
| `slug`                                                                            | *string*                                                                          | :heavy_check_mark:                                                                | N/A                                                                               |
| `name`                                                                            | *string*                                                                          | :heavy_check_mark:                                                                | N/A                                                                               |
| `logo`                                                                            | *string*                                                                          | :heavy_check_mark:                                                                | N/A                                                                               |
| `role`                                                                            | *string*                                                                          | :heavy_check_mark:                                                                | N/A                                                                               |
| `status`                                                                          | [models.GetWorkspacesResponseStatus](../models/get-workspaces-response-status.md) | :heavy_check_mark:                                                                | N/A                                                                               |
| `isCurrent`                                                                       | *boolean*                                                                         | :heavy_check_mark:                                                                | N/A                                                                               |