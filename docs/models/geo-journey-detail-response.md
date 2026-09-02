# GeoJourneyDetailResponse

## Example Usage

```typescript
import { GeoJourneyDetailResponse } from "@usenotra/sdk/models";

let value: GeoJourneyDetailResponse = {
  configured: false,
  events: [
    {
      capturedAt: "<value>",
      path: "/var",
      host: "soupy-seagull.info",
      method: "<value>",
      referer: "deficient-outrun.net",
      country: "Malaysia",
      agent: "<value>",
      category: "<value>",
    },
  ],
  organization: {
    id: "<id>",
    slug: "<value>",
    name: "<value>",
    logo: "<value>",
  },
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `configured`                                                                                                          | *boolean*                                                                                                             | :heavy_check_mark:                                                                                                    | False when the traffic backend is not configured for this deployment; the payload is then empty rather than an error. |
| `events`                                                                                                              | [models.Event](../models/event.md)[]                                                                                  | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `organization`                                                                                                        | [models.GeoJourneyDetailResponseOrganization](../models/geo-journey-detail-response-organization.md)                  | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |