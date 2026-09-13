# ListSchedulesRequest

## Example Usage

```typescript
import { ListSchedulesRequest } from "@usenotra/sdk/models/operations";

let value: ListSchedulesRequest = {
  repositoryIds:
    "51c2f3aa-efdd-4e28-8e69-23fa2dfd3561,7f9a2b3c-1d4e-4f5a-9b6c-8d7e6f5a4b3c",
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                | Example                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `repositoryIds`                                                                                                            | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Filter by GitHub integration IDs using a comma-separated list. Only schedules targeting at least one of them are returned. | 51c2f3aa-efdd-4e28-8e69-23fa2dfd3561,7f9a2b3c-1d4e-4f5a-9b6c-8d7e6f5a4b3c                                                  |