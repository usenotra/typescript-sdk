# CreatePostGenerationGithub

## Example Usage

```typescript
import { CreatePostGenerationGithub } from "@usenotra/sdk/models/operations";

let value: CreatePostGenerationGithub = {
  repositories: [
    {
      owner: "usenotra",
      repo: "notra",
    },
  ],
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `repositories`                                                   | [operations.Repository](../../models/operations/repository.md)[] | :heavy_check_mark:                                               | N/A                                                              |