# ImprovedResult

Result on the latest scan; null when the check passes now.

## Example Usage

```typescript
import { ImprovedResult } from "@usenotra/sdk/models";

let value: ImprovedResult = "partial";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"failed" | "partial" | Unrecognized<string>
```