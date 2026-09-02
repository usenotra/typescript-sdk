# PatchGeoSettingsRequest

## Example Usage

```typescript
import { PatchGeoSettingsRequest } from "@usenotra/sdk/models";

let value: PatchGeoSettingsRequest = {
  companyName: "Koch LLC",
  aliases: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  languages: [
    "<value 1>",
    "<value 2>",
  ],
  engines: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  enforceZdr: true,
  nonZdrApprovedEngines: [
    "<value 1>",
    "<value 2>",
  ],
  enabled: true,
  scanIntervalHours: 797980,
};
```

## Fields

| Field                     | Type                      | Required                  | Description               |
| ------------------------- | ------------------------- | ------------------------- | ------------------------- |
| `companyName`             | *string*                  | :heavy_check_mark:        | N/A                       |
| `aliases`                 | *string*[]                | :heavy_check_mark:        | N/A                       |
| `languages`               | *string*[]                | :heavy_check_mark:        | N/A                       |
| `engines`                 | *string*[]                | :heavy_check_mark:        | N/A                       |
| `enforceZdr`              | *boolean*                 | :heavy_check_mark:        | N/A                       |
| `nonZdrApprovedEngines`   | *string*[]                | :heavy_check_mark:        | N/A                       |
| `enabled`                 | *boolean*                 | :heavy_check_mark:        | N/A                       |
| `scanIntervalHours`       | *number*                  | :heavy_check_mark:        | 24, 48, 72, 168, 336, 720 |