# ListScheduleRunsStatus

`running` until the run reports back. A run that never reports back is shown as `failed` after six hours.

## Example Usage

```typescript
import { ListScheduleRunsStatus } from "@usenotra/sdk/models/operations";

let value: ListScheduleRunsStatus = "skipped";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"running" | "success" | "failed" | "skipped" | Unrecognized<string>
```