# GetPostGenerationType

## Example Usage

```typescript
import { GetPostGenerationType } from "@usenotra/sdk/models/operations";

let value: GetPostGenerationType = "fetching_repositories";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"queued" | "workflow_triggered" | "running" | "fetching_repositories" | "generating_content" | "post_created" | "completed" | "failed" | "skipped" | Unrecognized<string>
```