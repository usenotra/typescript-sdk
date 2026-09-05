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
    competitors: [],
    languages: [
      "<value 1>",
      "<value 2>",
    ],
    engines: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    enforceZdr: false,
    nonZdrApprovedEngines: [
      "<value 1>",
    ],
    pausedAutoPromptIds: [
      "<value 1>",
      "<value 2>",
    ],
    enabled: true,
    scanIntervalHours: 206237,
    scanStartedAt: "<value>",
    lastScanAt: "<value>",
    isScanning: true,
    createdAt: "1726578150624",
    updatedAt: "1735685702232",
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