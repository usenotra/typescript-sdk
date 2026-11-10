# GeoWebAnalyticsBreakdownsResponse

## Example Usage

```typescript
import { GeoWebAnalyticsBreakdownsResponse } from "@usenotra/sdk/models";

let value: GeoWebAnalyticsBreakdownsResponse = {
  configured: true,
  pages: [
    {
      host: "pretty-peninsula.net",
      path: "/var/spool",
      views: 152362,
      previousViews: 615186,
      visitors: 391658,
      landings: 779091,
      aiVisitors: 254236,
    },
  ],
  sources: [
    {
      group: "<value>",
      source: "<value>",
      aiProduct: "<value>",
      sessions: 917694,
      previousSessions: 411746,
      visitors: 939850,
    },
  ],
  countries: [],
  devices: [
    {
      value: "<value>",
      visitors: 744513,
    },
  ],
  outcomes: [
    {
      source: "<value>",
      sessions: 375347,
      pagesPerSession: 1149.13,
      engagedRate: 5591.48,
    },
  ],
  outboundLinks: [
    {
      url: "https://eminent-whack.net/",
      clicks: 875552,
      previousClicks: 124562,
      visitors: 447630,
    },
  ],
  vitals: [],
  errors: [],
  languages: [],
  organization: {
    id: "<id>",
    slug: "<value>",
    name: "<value>",
    logo: "<value>",
  },
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `configured`                                                                                                            | *boolean*                                                                                                               | :heavy_check_mark:                                                                                                      | False when the analytics backend is not configured for this deployment; the payload is then empty rather than an error. |
| `imported`                                                                                                              | [models.GeoWebAnalyticsBreakdownsResponseImported](../models/geo-web-analytics-breakdowns-response-imported.md)         | :heavy_minus_sign:                                                                                                      | Latest completed history import. Days up to `until` come from it; native tracking starts the day after.                 |
| `pages`                                                                                                                 | [models.GeoWebAnalyticsBreakdownsResponsePage](../models/geo-web-analytics-breakdowns-response-page.md)[]               | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `sources`                                                                                                               | [models.GeoWebAnalyticsBreakdownsResponseSource](../models/geo-web-analytics-breakdowns-response-source.md)[]           | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `countries`                                                                                                             | [models.Country](../models/country.md)[]                                                                                | :heavy_check_mark:                                                                                                      | ISO 3166-1 alpha-2 country codes.                                                                                       |
| `devices`                                                                                                               | [models.Device](../models/device.md)[]                                                                                  | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `outcomes`                                                                                                              | [models.Outcome](../models/outcome.md)[]                                                                                | :heavy_check_mark:                                                                                                      | How sessions from AI assistants behave compared to others.                                                              |
| `outboundLinks`                                                                                                         | [models.OutboundLink](../models/outbound-link.md)[]                                                                     | :heavy_check_mark:                                                                                                      | Clicks on links to other sites.                                                                                         |
| `vitals`                                                                                                                | [models.Vital](../models/vital.md)[]                                                                                    | :heavy_check_mark:                                                                                                      | Core Web Vitals from real visits.                                                                                       |
| `errors`                                                                                                                | [models.ErrorT](../models/error-t.md)[]                                                                                 | :heavy_check_mark:                                                                                                      | JavaScript errors reported by notra.plus.js.                                                                            |
| `languages`                                                                                                             | [models.Language](../models/language.md)[]                                                                              | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `organization`                                                                                                          | [models.GeoWebAnalyticsBreakdownsResponseOrganization](../models/geo-web-analytics-breakdowns-response-organization.md) | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |