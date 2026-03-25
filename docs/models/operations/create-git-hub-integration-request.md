# CreateGitHubIntegrationRequest

## Example Usage

```typescript
import { CreateGitHubIntegrationRequest } from "@usenotra/sdk/models/operations";

let value: CreateGitHubIntegrationRequest = {
  owner: "<value>",
  repo: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `owner`            | *string*           | :heavy_check_mark: | N/A                |
| `repo`             | *string*           | :heavy_check_mark: | N/A                |
| `branch`           | *string*           | :heavy_minus_sign: | N/A                |
| `token`            | *string*           | :heavy_minus_sign: | N/A                |