# ResolvedPreviousResult

Result on the previous scan; null when the check passed.

## Example Usage

```typescript
import { ResolvedPreviousResult } from "@usenotra/sdk/models";

let value: ResolvedPreviousResult = "partial";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"failed" | "partial" | Unrecognized<string>
```