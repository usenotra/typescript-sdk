# SiteDeploymentStatus

queued, building and uploading are in progress; ready, superseded, skipped, failed, canceled and expired are final.

## Example Usage

```typescript
import { SiteDeploymentStatus } from "@usenotra/sdk/models";

let value: SiteDeploymentStatus = "failed";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"queued" | "building" | "uploading" | "ready" | "superseded" | "skipped" | "failed" | "canceled" | "expired" | Unrecognized<string>
```