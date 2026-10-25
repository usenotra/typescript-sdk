# ScheduledPublicationStatus

scheduled → publishing → published or failed. Failed destinations are retried automatically for transient errors before they end up failed.

## Example Usage

```typescript
import { ScheduledPublicationStatus } from "@usenotra/sdk/models";

let value: ScheduledPublicationStatus = "published";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"scheduled" | "publishing" | "published" | "failed" | "canceled" | Unrecognized<string>
```