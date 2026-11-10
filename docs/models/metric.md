# Metric

## Example Usage

```typescript
import { Metric } from "@usenotra/sdk/models";

let value: Metric = "ttfb";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"lcp" | "inp" | "cls" | "fcp" | "ttfb" | Unrecognized<string>
```