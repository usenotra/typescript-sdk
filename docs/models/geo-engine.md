# GeoEngine

## Example Usage

```typescript
import { GeoEngine } from "@usenotra/sdk/models";

let value: GeoEngine = {
  id: "google/ai-overview",
  label: "<value>",
  provider: "<value>",
  zdr: "some",
  default: true,
  supportsGroundedChecks: true,
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        | Example                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                               | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | Engine id to pass in the `engines` setting.                                                                        | google/ai-overview                                                                                                 |
| `label`                                                                                                            | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |                                                                                                                    |
| `provider`                                                                                                         | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |                                                                                                                    |
| `zdr`                                                                                                              | [models.Zdr](../models/zdr.md)                                                                                     | :heavy_check_mark:                                                                                                 | Zero data retention coverage. Engines with `none` need `enforceZdr: false` or an entry in `nonZdrApprovedEngines`. |                                                                                                                    |
| `default`                                                                                                          | *boolean*                                                                                                          | :heavy_check_mark:                                                                                                 | Part of the default engine set for new projects.                                                                   |                                                                                                                    |
| `supportsGroundedChecks`                                                                                           | *boolean*                                                                                                          | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |                                                                                                                    |