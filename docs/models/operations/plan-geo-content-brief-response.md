# PlanGeoContentBriefResponse

## Example Usage

```typescript
import { PlanGeoContentBriefResponse } from "@usenotra/sdk/models/operations";

let value: PlanGeoContentBriefResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
    "key2": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    briefId: "<id>",
    brief: {
      targetPrompt: "<value>",
      intent: "<value>",
      contentSubtype: "comparison",
      workingTitle: "<value>",
      audience: "<value>",
      jobToBeDone: "<value>",
      sections: [],
      questionsToAnswer: [
        "<value 1>",
        "<value 2>",
      ],
      internalLinks: [
        {
          url: "https://unusual-doubter.name",
          anchor: "<value>",
          why: "<value>",
        },
      ],
      acceptanceChecklist: [
        "<value 1>",
        "<value 2>",
      ],
    },
    status: "completed",
    runId: "<id>",
    postId: "<id>",
    organization: {
      id: "<id>",
      slug: "<value>",
      name: "<value>",
      logo: "<value>",
    },
  },
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `headers`                                                                             | Record<string, *string*[]>                                                            | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `result`                                                                              | [models.PlanGeoContentBriefResponse](../../models/plan-geo-content-brief-response.md) | :heavy_check_mark:                                                                    | N/A                                                                                   |