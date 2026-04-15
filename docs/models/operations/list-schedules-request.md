# ListSchedulesRequest

## Example Usage

```typescript
import { ListSchedulesRequest } from "@usenotra/sdk/models/operations";

let value: ListSchedulesRequest = {
  repositoryIds: "repo_123,repo_456",
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           | Example                                               |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `repositoryIds`                                       | *string*                                              | :heavy_minus_sign:                                    | Filter by repository IDs using a comma-separated list | repo_123,repo_456                                     |