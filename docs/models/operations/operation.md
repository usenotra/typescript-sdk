# Operation

created for a new draft pull request, updated when the post's open pull request was refreshed instead.

## Example Usage

```typescript
import { Operation } from "@usenotra/sdk/models/operations";

let value: Operation = "updated";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"created" | "updated" | Unrecognized<string>
```