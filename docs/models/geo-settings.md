# GeoSettings

## Example Usage

```typescript
import { GeoSettings } from "@usenotra/sdk/models";

let value: GeoSettings = {
  id: "<id>",
  organizationId: "<id>",
  projectId: "<id>",
  companyName: "Zieme - Beer",
  aliases: [
    "<value 1>",
    "<value 2>",
  ],
  conversionPaths: [],
  competitors: [],
  languages: [
    "<value 1>",
  ],
  engines: [],
  enforceZdr: false,
  nonZdrApprovedEngines: [],
  pausedAutoPromptIds: [
    "<value 1>",
    "<value 2>",
  ],
  enabled: false,
  scanIntervalHours: 360011,
  scanStartedAt: "<value>",
  lastScanAt: "<value>",
  isScanning: false,
  createdAt: "1726178352233",
  updatedAt: "1735642385758",
};
```

## Fields

| Field                   | Type                    | Required                | Description             |
| ----------------------- | ----------------------- | ----------------------- | ----------------------- |
| `id`                    | *string*                | :heavy_check_mark:      | N/A                     |
| `organizationId`        | *string*                | :heavy_check_mark:      | N/A                     |
| `projectId`             | *string*                | :heavy_check_mark:      | N/A                     |
| `companyName`           | *string*                | :heavy_check_mark:      | N/A                     |
| `aliases`               | *string*[]              | :heavy_check_mark:      | N/A                     |
| `conversionPaths`       | *string*[]              | :heavy_check_mark:      | N/A                     |
| `competitors`           | *string*[]              | :heavy_check_mark:      | N/A                     |
| `languages`             | *string*[]              | :heavy_check_mark:      | N/A                     |
| `engines`               | *string*[]              | :heavy_check_mark:      | N/A                     |
| `enforceZdr`            | *boolean*               | :heavy_check_mark:      | N/A                     |
| `nonZdrApprovedEngines` | *string*[]              | :heavy_check_mark:      | N/A                     |
| `pausedAutoPromptIds`   | *string*[]              | :heavy_check_mark:      | N/A                     |
| `enabled`               | *boolean*               | :heavy_check_mark:      | N/A                     |
| `scanIntervalHours`     | *number*                | :heavy_check_mark:      | N/A                     |
| `scanStartedAt`         | *string*                | :heavy_check_mark:      | N/A                     |
| `lastScanAt`            | *string*                | :heavy_check_mark:      | N/A                     |
| `isScanning`            | *boolean*               | :heavy_check_mark:      | N/A                     |
| `createdAt`             | *string*                | :heavy_check_mark:      | N/A                     |
| `updatedAt`             | *string*                | :heavy_check_mark:      | N/A                     |