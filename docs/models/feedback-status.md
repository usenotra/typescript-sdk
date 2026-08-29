# FeedbackStatus

Triage status.

## Example Usage

```typescript
import { FeedbackStatus } from "@usenotra/sdk/models";

let value: FeedbackStatus = "new";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"new" | "triaged" | "resolved" | "archived" | Unrecognized<string>
```