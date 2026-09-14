# LookbackWindowRequestBody

How far back to collect source activity (commits, pull requests, releases, Linear issues).

## Example Usage

```typescript
import { LookbackWindowRequestBody } from "@usenotra/sdk/models/operations";

let value: LookbackWindowRequestBody = "last_7_days";
```

## Values

```typescript
"current_day" | "yesterday" | "last_7_days" | "last_14_days" | "last_30_days"
```