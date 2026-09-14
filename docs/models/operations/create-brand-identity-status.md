# CreateBrandIdentityStatus

Job state. Stop polling once it is completed or failed.

## Example Usage

```typescript
import { CreateBrandIdentityStatus } from "@usenotra/sdk/models/operations";

let value: CreateBrandIdentityStatus = "completed";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"queued" | "running" | "completed" | "failed" | Unrecognized<string>
```