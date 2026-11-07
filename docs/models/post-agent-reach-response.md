# PostAgentReachResponse

## Example Usage

```typescript
import { PostAgentReachResponse } from "@usenotra/sdk/models";

let value: PostAgentReachResponse = {
  organization: {
    id: "<id>",
    slug: "<value>",
    name: "<value>",
    logo: "<value>",
  },
  agentReach: {
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
  },
};
```

## Fields

| Field                                                                                                                                         | Type                                                                                                                                          | Required                                                                                                                                      | Description                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `organization`                                                                                                                                | [models.PostAgentReachResponseOrganization](../models/post-agent-reach-response-organization.md)                                              | :heavy_check_mark:                                                                                                                            | N/A                                                                                                                                           |
| `agentReach`                                                                                                                                  | [models.PostAgentReach](../models/post-agent-reach.md)                                                                                        | :heavy_check_mark:                                                                                                                            | Null when the post isn't live on a Notra Site: never published to one, published to another branch, or the Site has no production deployment. |