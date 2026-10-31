# GeoContentBriefResponse

## Example Usage

```typescript
import { GeoContentBriefResponse } from "@usenotra/sdk/models";

let value: GeoContentBriefResponse = {
  brief: {
    id: "<id>",
    topic: "<value>",
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
    status: "failed",
    autoApproved: false,
    runId: "<id>",
    postId: "<id>",
    humanized: true,
    error: "<value>",
    createdAt: "1723373988523",
    updatedAt: "1735627721735",
    completedAt: null,
  },
  organization: {
    id: "<id>",
    slug: "<value>",
    name: "<value>",
    logo: "<value>",
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `brief`                                                                                            | [models.GeoContentBriefDetail](../models/geo-content-brief-detail.md)                              | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `organization`                                                                                     | [models.GeoContentBriefResponseOrganization](../models/geo-content-brief-response-organization.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |