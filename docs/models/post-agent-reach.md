# PostAgentReach

Null when the post isn't live on a Notra Site: never published to one, published to another branch, or the Site has no production deployment.

## Example Usage

```typescript
import { PostAgentReach } from "@usenotra/sdk/models";

let value: PostAgentReach = {
  postId: "<id>",
  siteId: "<id>",
  path: "/blog/launch",
  url: "https://example.com/blog/launch",
  configured: false,
  totals: {
    crawled: 195336,
    cited: 413914,
    referred: 802413,
    total: 495393,
  },
  sources: [
    {
      source: "<value>",
      visitorType: "human",
      agent: "<value>",
      category: "<value>",
      confidence: "<value>",
      visits: 506180,
      markdownVisits: 387480,
      paths: 896277,
      lastSeenAt: "<value>",
    },
  ],
  points: [
    {
      day: "<value>",
      visitorType: "ai_referral",
      source: "<value>",
      visits: 759819,
    },
  ],
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           | Example                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `postId`                                                                                                              | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |                                                                                                                       |
| `siteId`                                                                                                              | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |                                                                                                                       |
| `path`                                                                                                                | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | Path the post is served at on its Site. Visits to its Markdown copy (`<path>.md`) and index files are counted too.    | /blog/launch                                                                                                          |
| `url`                                                                                                                 | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   | https://example.com/blog/launch                                                                                       |
| `configured`                                                                                                          | *boolean*                                                                                                             | :heavy_check_mark:                                                                                                    | False when the traffic backend is not configured for this deployment; the payload is then empty rather than an error. |                                                                                                                       |
| `totals`                                                                                                              | [models.PostAgentReachTotals](../models/post-agent-reach-totals.md)                                                   | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |                                                                                                                       |
| `sources`                                                                                                             | [models.PostAgentReachSource](../models/post-agent-reach-source.md)[]                                                 | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |                                                                                                                       |
| `points`                                                                                                              | [models.PostAgentReachPoint](../models/post-agent-reach-point.md)[]                                                   | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |                                                                                                                       |