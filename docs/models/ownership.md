# Ownership

## Example Usage

```typescript
import { Ownership } from "@usenotra/sdk/models";

let value: Ownership = "third_party";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"third_party" | "own" | "competitor" | Unrecognized<string>
```