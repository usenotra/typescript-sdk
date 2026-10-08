# ScheduleDestinationGithub

## Example Usage

```typescript
import { ScheduleDestinationGithub } from "@usenotra/sdk/models";

let value: ScheduleDestinationGithub = {
  destination: "github",
  repositoryId: "int_123",
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           | Example                                                                                               |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `destination`                                                                                         | *"github"*                                                                                            | :heavy_check_mark:                                                                                    | N/A                                                                                                   |                                                                                                       |
| `repositoryId`                                                                                        | *string*                                                                                              | :heavy_check_mark:                                                                                    | GitHub integration ID from GET /v1/integrations. Only for blog posts and changelogs.                  | int_123                                                                                               |
| `merge`                                                                                               | *boolean*                                                                                             | :heavy_minus_sign:                                                                                    | Merge the pull request at the scheduled time. When false, the pull request is only opened or updated. |                                                                                                       |