# Zdr

Zero data retention coverage. Engines with `none` need `enforceZdr: false` or an entry in `nonZdrApprovedEngines`.

## Example Usage

```typescript
import { Zdr } from "@usenotra/sdk/models";

let value: Zdr = "some";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"all" | "some" | "none" | Unrecognized<string>
```