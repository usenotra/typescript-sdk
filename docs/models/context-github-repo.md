# ContextGithubRepo

## Example Usage

```typescript
import { ContextGithubRepo } from "@usenotra/sdk/models";

let value: ContextGithubRepo = {
  type: "github-repo",
  integrationId: "<id>",
  owner: "<value>",
  repo: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `type`             | *"github-repo"*    | :heavy_check_mark: | N/A                |
| `integrationId`    | *string*           | :heavy_check_mark: | N/A                |
| `owner`            | *string*           | :heavy_check_mark: | N/A                |
| `repo`             | *string*           | :heavy_check_mark: | N/A                |