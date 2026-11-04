# ImprovedPreviousResult

Result on the previous scan; null when the check passed.

## Example Usage

```typescript
import { ImprovedPreviousResult } from "@usenotra/sdk/models";

let value: ImprovedPreviousResult = "failed";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"failed" | "partial" | Unrecognized<string>
```