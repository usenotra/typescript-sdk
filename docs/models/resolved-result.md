# ResolvedResult

Result on the latest scan; null when the check passes now.

## Example Usage

```typescript
import { ResolvedResult } from "@usenotra/sdk/models";

let value: ResolvedResult = "partial";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"failed" | "partial" | Unrecognized<string>
```