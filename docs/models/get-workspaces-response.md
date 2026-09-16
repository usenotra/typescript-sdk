# GetWorkspacesResponse

## Example Usage

```typescript
import { GetWorkspacesResponse } from "@usenotra/sdk/models";

let value: GetWorkspacesResponse = {
  currentWorkspace: {
    id: "<id>",
    slug: "<value>",
    name: "<value>",
    logo: "<value>",
  },
  workspaces: [
    {
      id: "<id>",
      slug: "<value>",
      name: "<value>",
      logo: "<value>",
      role: "<value>",
      status: "pending",
      isCurrent: false,
    },
  ],
  authentication: {
    type: "apiKey",
  },
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `currentWorkspace`                                        | [models.CurrentWorkspace](../models/current-workspace.md) | :heavy_check_mark:                                        | N/A                                                       |
| `workspaces`                                              | [models.Workspace](../models/workspace.md)[]              | :heavy_check_mark:                                        | N/A                                                       |
| `authentication`                                          | *models.Authentication*                                   | :heavy_check_mark:                                        | N/A                                                       |