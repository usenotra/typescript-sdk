# PlanGeoContentBriefResponse

## Example Usage

```typescript
import { PlanGeoContentBriefResponse } from "@usenotra/sdk/models/operations";

let value: PlanGeoContentBriefResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key1": [
      "<value 1>",
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
      contentSubtype: "faq",
      workingTitle: "<value>",
      audience: "<value>",
      jobToBeDone: "<value>",
      sections: [
        {
          heading: "<value>",
          goal: "<value>",
          claims: [
            "<value 1>",
            "<value 2>",
            "<value 3>",
          ],
        },
      ],
      questionsToAnswer: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      internalLinks: [],
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