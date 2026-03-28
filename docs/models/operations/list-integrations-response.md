# ListIntegrationsResponse

Integrations fetched successfully

## Example Usage

```typescript
import { ListIntegrationsResponse } from "@usenotra/sdk/models/operations";

let value: ListIntegrationsResponse = {
  github: [
    {
      id: "<id>",
      displayName: "Ethel.Wiegand",
      owner: "<value>",
      repo: "<value>",
      defaultBranch: "<value>",
    },
  ],
  slack: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  linear: [],
  organization: {
    id: "<id>",
    slug: "<value>",
    name: "<value>",
    logo: "<value>",
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `github`                                                                                             | [operations.ListIntegrationsGithub](../../models/operations/list-integrations-github.md)[]           | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `slack`                                                                                              | *any*[]                                                                                              | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `linear`                                                                                             | [operations.Linear](../../models/operations/linear.md)[]                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `organization`                                                                                       | [operations.ListIntegrationsOrganization](../../models/operations/list-integrations-organization.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |