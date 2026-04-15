# ListSchedulesResponse

Schedules fetched successfully

## Example Usage

```typescript
import { ListSchedulesResponse } from "@usenotra/sdk/models/operations";

let value: ListSchedulesResponse = {
  schedules: [],
  repositoryMap: {
    "key": "<value>",
  },
  organization: {
    id: "<id>",
    slug: "<value>",
    name: "<value>",
    logo: "<value>",
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `schedules`                                                                                    | [operations.ListSchedulesSchedule](../../models/operations/list-schedules-schedule.md)[]       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `repositoryMap`                                                                                | Record<string, *string*>                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `organization`                                                                                 | [operations.ListSchedulesOrganization](../../models/operations/list-schedules-organization.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |