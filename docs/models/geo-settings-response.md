# GeoSettingsResponse

## Example Usage

```typescript
import { GeoSettingsResponse } from "@usenotra/sdk/models";

let value: GeoSettingsResponse = {
  configured: false,
  settings: {
    id: "<id>",
    organizationId: "<id>",
    projectId: "<id>",
    companyName: "Barton - Strosin",
    aliases: [
      "<value 1>",
      "<value 2>",
    ],
    conversionPaths: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    domains: [],
    competitors: [
      "<value 1>",
      "<value 2>",
    ],
    languages: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    engines: [
      "<value 1>",
      "<value 2>",
    ],
    enforceZdr: true,
    nonZdrApprovedEngines: [
      "<value 1>",
      "<value 2>",
    ],
    trackWithoutSearch: true,
    pausedAutoPromptIds: [],
    removedAutoPromptIds: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    enabled: false,
    scanIntervalHours: 376504,
    scanStartedAt: "<value>",
    lastScanAt: "<value>",
    isScanning: true,
    createdAt: "1717946538278",
    updatedAt: "1735661707720",
  },
  organization: {
    id: "<id>",
    slug: "<value>",
    name: "<value>",
    logo: "<value>",
  },
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `configured`                                                                              | *boolean*                                                                                 | :heavy_check_mark:                                                                        | Whether the analytics backend is configured.                                              |
| `settings`                                                                                | [models.GeoSettings](../models/geo-settings.md)                                           | :heavy_check_mark:                                                                        | N/A                                                                                       |
| `organization`                                                                            | [models.GeoSettingsResponseOrganization](../models/geo-settings-response-organization.md) | :heavy_check_mark:                                                                        | N/A                                                                                       |