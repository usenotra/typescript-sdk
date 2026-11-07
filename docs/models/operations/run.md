# Run

## Example Usage

```typescript
import { Run } from "@usenotra/sdk/models/operations";

let value: Run = {
  id: "<id>",
  status: "skipped",
  title: "<value>",
  postId: "<id>",
  errorMessage: "<value>",
  manual: false,
  startedAt: "<value>",
  finishedAt: "<value>",
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                      | *string*                                                                                                  | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `status`                                                                                                  | [operations.ListScheduleRunsStatus](../../models/operations/list-schedule-runs-status.md)                 | :heavy_check_mark:                                                                                        | `running` until the run reports back. A run that never reports back is shown as `failed` after six hours. |
| `title`                                                                                                   | *string*                                                                                                  | :heavy_check_mark:                                                                                        | Title of what the run produced, null while running.                                                       |
| `postId`                                                                                                  | *string*                                                                                                  | :heavy_check_mark:                                                                                        | The draft post the run created, if any.                                                                   |
| `errorMessage`                                                                                            | *string*                                                                                                  | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `manual`                                                                                                  | *boolean*                                                                                                 | :heavy_check_mark:                                                                                        | Started on demand rather than by the schedule.                                                            |
| `startedAt`                                                                                               | *string*                                                                                                  | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `finishedAt`                                                                                              | *string*                                                                                                  | :heavy_check_mark:                                                                                        | N/A                                                                                                       |