# GeoTrafficJourneysResponse

## Example Usage

```typescript
import { GeoTrafficJourneysResponse } from "@usenotra/sdk/models";

let value: GeoTrafficJourneysResponse = {
  configured: true,
  journeys: [],
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
| `journeys`                                                                                                            | [models.Journey](../models/journey.md)[]                                                                              | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `organization`                                                                                                        | [models.GeoTrafficJourneysResponseOrganization](../models/geo-traffic-journeys-response-organization.md)              | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |