# Journey

## Example Usage

```typescript
import { Journey } from "@usenotra/sdk/models";

let value: Journey = {
  journeyId: "<id>",
  source: "<value>",
  visitorType: "ai_referral",
  pages: 101121,
  distinctPaths: 542101,
  firstSeenAt: "<value>",
  lastSeenAt: "<value>",
  samplePaths: [
    "<value 1>",
    "<value 2>",
  ],
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `journeyId`                                                                                             | *string*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `source`                                                                                                | *string*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `visitorType`                                                                                           | [models.GeoTrafficJourneysResponseVisitorType](../models/geo-traffic-journeys-response-visitor-type.md) | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `pages`                                                                                                 | *number*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `distinctPaths`                                                                                         | *number*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `firstSeenAt`                                                                                           | *string*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `lastSeenAt`                                                                                            | *string*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `samplePaths`                                                                                           | *string*[]                                                                                              | :heavy_check_mark:                                                                                      | N/A                                                                                                     |