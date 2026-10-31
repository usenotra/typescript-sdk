# RunScheduleResponse

Schedule run started

## Example Usage

```typescript
import { RunScheduleResponse } from "@usenotra/sdk/models/operations";

let value: RunScheduleResponse = {
  runId: "<id>",
  organization: {
    id: "<id>",
    slug: "<value>",
    name: "<value>",
    logo: "<value>",
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `runId`                                                                                    | *string*                                                                                   | :heavy_check_mark:                                                                         | ID of the run, as listed by `GET /v1/schedules/{scheduleId}/runs`.                         |
| `organization`                                                                             | [operations.RunScheduleOrganization](../../models/operations/run-schedule-organization.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |