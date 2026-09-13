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

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `companyName`                                                                                                  | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `aliases`                                                                                                      | *string*[]                                                                                                     | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `conversionPaths`                                                                                              | *string*[]                                                                                                     | :heavy_minus_sign:                                                                                             | Paths that count as a conversion when an AI referral reaches them. Prefix match. Omit to keep the stored list. |
| `languages`                                                                                                    | *string*[]                                                                                                     | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `engines`                                                                                                      | *string*[]                                                                                                     | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `enforceZdr`                                                                                                   | *boolean*                                                                                                      | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `nonZdrApprovedEngines`                                                                                        | *string*[]                                                                                                     | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `pausedAutoPromptIds`                                                                                          | *string*[]                                                                                                     | :heavy_minus_sign:                                                                                             | Ids of auto-generated prompts to skip in scans. Omit to keep the current list.                                 |
| `removedAutoPromptIds`                                                                                         | *string*[]                                                                                                     | :heavy_minus_sign:                                                                                             | Ids of auto-generated prompts removed from tracking. Omit to keep the current list.                            |
| `enabled`                                                                                                      | *boolean*                                                                                                      | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `scanIntervalHours`                                                                                            | *number*                                                                                                       | :heavy_check_mark:                                                                                             | Hours between automatic scans, 24-2160, in whole days (multiple of 24). Presets: 24, 48, 72, 168, 336, 720.    |