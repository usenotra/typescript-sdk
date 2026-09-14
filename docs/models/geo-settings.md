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
  domains: [],
  competitors: [
    "<value 1>",
  ],
  languages: [],
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
  pausedAutoPromptIds: [
    "<value 1>",
    "<value 2>",
  ],
  removedAutoPromptIds: [
    "<value 1>",
  ],
  enabled: false,
  scanIntervalHours: 393314,
  scanStartedAt: "<value>",
  lastScanAt: "<value>",
  isScanning: true,
  createdAt: "1720923784626",
  updatedAt: "1735641875475",
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
| `domains`               | *string*[]              | :heavy_check_mark:      | N/A                     |
| `competitors`           | *string*[]              | :heavy_check_mark:      | N/A                     |
| `languages`             | *string*[]              | :heavy_check_mark:      | N/A                     |
| `engines`               | *string*[]              | :heavy_check_mark:      | N/A                     |
| `enforceZdr`            | *boolean*               | :heavy_check_mark:      | N/A                     |
| `nonZdrApprovedEngines` | *string*[]              | :heavy_check_mark:      | N/A                     |
| `pausedAutoPromptIds`   | *string*[]              | :heavy_check_mark:      | N/A                     |
| `removedAutoPromptIds`  | *string*[]              | :heavy_check_mark:      | N/A                     |
| `enabled`               | *boolean*               | :heavy_check_mark:      | N/A                     |
| `scanIntervalHours`     | *number*                | :heavy_check_mark:      | N/A                     |
| `scanStartedAt`         | *string*                | :heavy_check_mark:      | N/A                     |
| `lastScanAt`            | *string*                | :heavy_check_mark:      | N/A                     |
| `isScanning`            | *boolean*               | :heavy_check_mark:      | N/A                     |
| `createdAt`             | *string*                | :heavy_check_mark:      | N/A                     |
| `updatedAt`             | *string*                | :heavy_check_mark:      | N/A                     |