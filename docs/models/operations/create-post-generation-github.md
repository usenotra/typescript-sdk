# CreatePostGenerationGithub

Select connected repositories by owner and name instead of integration ID. Cannot be combined with integrations.github.

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