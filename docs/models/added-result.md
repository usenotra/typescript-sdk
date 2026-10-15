# AddedResult

Result on the latest scan; null when the check passes now.

## Example Usage

```typescript
import { AddedResult } from "@usenotra/sdk/models";

let value: AddedResult = "failed";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"failed" | "partial" | Unrecognized<string>
```