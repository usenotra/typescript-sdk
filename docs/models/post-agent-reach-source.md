# PostAgentReachSource

## Example Usage

```typescript
import { PostAgentReachSource } from "@usenotra/sdk/models";

let value: PostAgentReachSource = {
  source: "<value>",
  visitorType: "crawler",
  agent: "<value>",
  category: "<value>",
  confidence: "<value>",
  visits: 635883,
  markdownVisits: 598331,
  paths: 502468,
  lastSeenAt: "<value>",
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `source`                                                                                    | *string*                                                                                    | :heavy_check_mark:                                                                          | N/A                                                                                         |
| `visitorType`                                                                               | [models.PostAgentReachSourceVisitorType](../models/post-agent-reach-source-visitor-type.md) | :heavy_check_mark:                                                                          | N/A                                                                                         |
| `agent`                                                                                     | *string*                                                                                    | :heavy_check_mark:                                                                          | N/A                                                                                         |
| `category`                                                                                  | *string*                                                                                    | :heavy_check_mark:                                                                          | N/A                                                                                         |
| `confidence`                                                                                | *string*                                                                                    | :heavy_check_mark:                                                                          | N/A                                                                                         |
| `visits`                                                                                    | *number*                                                                                    | :heavy_check_mark:                                                                          | N/A                                                                                         |
| `previousVisits`                                                                            | *number*                                                                                    | :heavy_minus_sign:                                                                          | N/A                                                                                         |
| `markdownVisits`                                                                            | *number*                                                                                    | :heavy_check_mark:                                                                          | N/A                                                                                         |
| `previousMarkdownVisits`                                                                    | *number*                                                                                    | :heavy_minus_sign:                                                                          | N/A                                                                                         |
| `paths`                                                                                     | *number*                                                                                    | :heavy_check_mark:                                                                          | N/A                                                                                         |
| `previousPaths`                                                                             | *number*                                                                                    | :heavy_minus_sign:                                                                          | N/A                                                                                         |
| `lastSeenAt`                                                                                | *string*                                                                                    | :heavy_check_mark:                                                                          | N/A                                                                                         |