# Action

What to do with this query cluster: create a new page, update the strongest existing page, merge overlapping pages, or ignore thin demand.

## Example Usage

```typescript
import { Action } from "@usenotra/sdk/models";

let value: Action = "ignore";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"create" | "update" | "merge" | "ignore" | Unrecognized<string>
```