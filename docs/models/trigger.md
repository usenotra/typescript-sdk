# Trigger

## Example Usage

```typescript
import { Trigger } from "@usenotra/sdk/models";

let value: Trigger = "pull_request";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"push" | "pull_request" | "manual" | "redeploy" | "config" | "toolchain" | Unrecognized<string>
```