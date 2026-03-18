# Type

## Example Usage

```typescript
import { Type } from "@usenotra/sdk/models/operations";

let value: Type = "queued";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"queued" | "workflow_triggered" | "running" | "fetching_repositories" | "generating_content" | "post_created" | "completed" | "failed" | Unrecognized<string>
```