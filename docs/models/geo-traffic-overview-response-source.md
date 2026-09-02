# GeoTrafficOverviewResponseSource

## Example Usage

```typescript
import { GeoTrafficOverviewResponseSource } from "@usenotra/sdk/models";

let value: GeoTrafficOverviewResponseSource = {
  source: "<value>",
  visitorType: "human",
  agent: "<value>",
  category: "<value>",
  confidence: "<value>",
  visits: 969620,
  markdownVisits: 662666,
  paths: 638260,
  lastSeenAt: "<value>",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `source`                                                     | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `visitorType`                                                | [models.SourceVisitorType](../models/source-visitor-type.md) | :heavy_check_mark:                                           | N/A                                                          |
| `agent`                                                      | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `category`                                                   | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `confidence`                                                 | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `visits`                                                     | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `previousVisits`                                             | *number*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `markdownVisits`                                             | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `paths`                                                      | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `lastSeenAt`                                                 | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |