# UpdateGeoSettingsRequest

## Example Usage

```typescript
import { UpdateGeoSettingsRequest } from "@usenotra/sdk/models/operations";

let value: UpdateGeoSettingsRequest = {
  projectId: "b1f2c3d4-0000-4000-8000-000000000000",
  body: {
    companyName: "Gleichner - Windler",
    aliases: [],
    languages: [
      "<value 1>",
    ],
    engines: [
      "<value 1>",
      "<value 2>",
    ],
    enforceZdr: true,
    nonZdrApprovedEngines: [
      "<value 1>",
    ],
    enabled: false,
    scanIntervalHours: 766480,
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `projectId`                                                                  | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          | b1f2c3d4-0000-4000-8000-000000000000                                         |
| `body`                                                                       | [models.PatchGeoSettingsRequest](../../models/patch-geo-settings-request.md) | :heavy_check_mark:                                                           | N/A                                                                          |                                                                              |