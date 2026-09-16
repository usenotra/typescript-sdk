# GeoShelfListResponseSource

## Example Usage

```typescript
import { GeoShelfListResponseSource } from "@usenotra/sdk/models";

let value: GeoShelfListResponseSource = {
  id: "<id>",
  url: "https://weighty-reservation.org",
  domain: "suburban-story.net",
  title: "<value>",
  kind: "community",
  ownership: "own",
  origin: "manual",
  fetchStatus: "pending",
  lastFetchedAt: null,
  citations: {
    windowCount: 687974,
    totalCount: 763877,
    promptCount: 969335,
    engines: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    firstCitedAt: new Date("2025-11-06T19:20:06.393Z"),
    lastCitedAt: new Date("2024-05-25T13:11:23.095Z"),
  },
  placements: [
    {
      competitorId: "<id>",
      brandName: "<value>",
      brandDomain: "<value>",
      status: "present",
      position: 778561,
      hasLink: false,
      evidence: "fetch",
      excerpt: "<value>",
      checkedAt: new Date("2025-02-11T04:11:50.271Z"),
    },
  ],
  opportunity: {
    status: "open",
    priority: "low",
    assigneeMemberId: "<id>",
    pocMemberId: "<id>",
    notes: "<value>",
    dueAt: null,
    id: "<id>",
    createdByUserId: "<id>",
    resolvedAt: null,
    createdAt: new Date("2026-09-28T04:20:33.726Z"),
    updatedAt: new Date("2025-08-23T08:28:30.263Z"),
  },
  createdByUserId: "<id>",
  createdAt: new Date("2026-09-18T19:26:01.426Z"),
  updatedAt: new Date("2025-07-29T00:03:03.790Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `url`                                                                                         | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `domain`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `title`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `kind`                                                                                        | [models.GeoShelfListResponseKind](../models/geo-shelf-list-response-kind.md)                  | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `ownership`                                                                                   | [models.Ownership](../models/ownership.md)                                                    | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `origin`                                                                                      | [models.Origin](../models/origin.md)                                                          | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `fetchStatus`                                                                                 | [models.FetchStatus](../models/fetch-status.md)                                               | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `lastFetchedAt`                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `citations`                                                                                   | [models.Citations](../models/citations.md)                                                    | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `placements`                                                                                  | [models.Placement](../models/placement.md)[]                                                  | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `opportunity`                                                                                 | [models.Opportunity](../models/opportunity.md)                                                | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdByUserId`                                                                             | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |