# PlanGeoContentBriefResponse

## Example Usage

```typescript
import { PlanGeoContentBriefResponse } from "@usenotra/sdk/models";

let value: PlanGeoContentBriefResponse = {
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
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `briefId`                                                                                                   | *string*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `brief`                                                                                                     | [models.GeoContentBriefDocument](../models/geo-content-brief-document.md)                                   | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `status`                                                                                                    | [models.PlanGeoContentBriefResponseStatus](../models/plan-geo-content-brief-response-status.md)             | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `runId`                                                                                                     | *string*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `postId`                                                                                                    | *string*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `organization`                                                                                              | [models.PlanGeoContentBriefResponseOrganization](../models/plan-geo-content-brief-response-organization.md) | :heavy_check_mark:                                                                                          | N/A                                                                                                         |