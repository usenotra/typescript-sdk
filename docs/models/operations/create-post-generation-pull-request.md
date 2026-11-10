# CreatePostGenerationPullRequest

Write about exactly this pull request in a connected repository, open or merged, whatever its age. Uses only its pull request data, so dataPoints and lookbackWindow do not apply. Cannot be combined with other source selectors or selectedItems.

## Example Usage

```typescript
import { CreatePostGenerationPullRequest } from "@usenotra/sdk/models/operations";

let value: CreatePostGenerationPullRequest = {
  owner: "usenotra",
  repo: "notra",
  number: 2385,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `owner`            | *string*           | :heavy_check_mark: | N/A                |
| `repo`             | *string*           | :heavy_check_mark: | N/A                |
| `number`           | *number*           | :heavy_check_mark: | N/A                |