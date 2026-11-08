# ListScheduleRunsResponse

Schedule runs fetched successfully

## Example Usage

```typescript
import { ListScheduleRunsResponse } from "@usenotra/sdk/models/operations";

let value: ListScheduleRunsResponse = {
  runs: [
    {
      id: "<id>",
      status: "running",
      title: null,
      postId: "<id>",
      errorMessage: "<value>",
      manual: false,
      startedAt: "<value>",
      finishedAt: "<value>",
    },
  ],
  organization: {
    id: "<id>",
    slug: "<value>",
    name: "<value>",
    logo: "<value>",
  },
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `runs`                                                                                                | [operations.Run](../../models/operations/run.md)[]                                                    | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `organization`                                                                                        | [operations.ListScheduleRunsOrganization](../../models/operations/list-schedule-runs-organization.md) | :heavy_check_mark:                                                                                    | N/A                                                                                                   |