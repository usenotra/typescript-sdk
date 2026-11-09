# CreatePostPullRequestPullRequest

## Example Usage

```typescript
import { CreatePostPullRequestPullRequest } from "@usenotra/sdk/models/operations";

let value: CreatePostPullRequestPullRequest = {
  number: 500056,
  url: "https://bright-draft.info/",
  branchName: "<value>",
  path: "/usr/include",
  operation: "created",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `number`                                                                                               | *number*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `url`                                                                                                  | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `branchName`                                                                                           | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `path`                                                                                                 | *string*                                                                                               | :heavy_check_mark:                                                                                     | Repository path of the post file on the branch.                                                        |
| `operation`                                                                                            | [operations.Operation](../../models/operations/operation.md)                                           | :heavy_check_mark:                                                                                     | created for a new draft pull request, updated when the post's open pull request was refreshed instead. |