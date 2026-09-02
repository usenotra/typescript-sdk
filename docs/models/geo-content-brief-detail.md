# GeoContentBriefDetail

## Example Usage

```typescript
import { GeoContentBriefDetail } from "@usenotra/sdk/models";

let value: GeoContentBriefDetail = {
  id: "<id>",
  topic: "<value>",
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
  status: "writing",
  autoApproved: true,
  runId: "<id>",
  postId: "<id>",
  humanized: false,
  error: "<value>",
  createdAt: "1708128683867",
  updatedAt: "1735631249471",
  completedAt: "<value>",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `id`                                                                               | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `topic`                                                                            | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `brief`                                                                            | [models.GeoContentBriefDocument](../models/geo-content-brief-document.md)          | :heavy_check_mark:                                                                 | N/A                                                                                |
| `status`                                                                           | [models.GeoContentBriefDetailStatus](../models/geo-content-brief-detail-status.md) | :heavy_check_mark:                                                                 | N/A                                                                                |
| `autoApproved`                                                                     | *boolean*                                                                          | :heavy_check_mark:                                                                 | N/A                                                                                |
| `runId`                                                                            | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `postId`                                                                           | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `humanized`                                                                        | *boolean*                                                                          | :heavy_check_mark:                                                                 | N/A                                                                                |
| `error`                                                                            | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `createdAt`                                                                        | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `updatedAt`                                                                        | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `completedAt`                                                                      | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |