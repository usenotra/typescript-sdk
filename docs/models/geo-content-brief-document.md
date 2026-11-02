# GeoContentBriefDocument

## Example Usage

```typescript
import { GeoContentBriefDocument } from "@usenotra/sdk/models";

let value: GeoContentBriefDocument = {
  targetPrompt: "<value>",
  intent: "<value>",
  contentSubtype: "faq",
  workingTitle: "<value>",
  audience: "<value>",
  jobToBeDone: "<value>",
  sections: [],
  questionsToAnswer: [
    "<value 1>",
    "<value 2>",
  ],
  internalLinks: [],
  acceptanceChecklist: [
    "<value 1>",
  ],
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `targetPrompt`                                                                                          | *string*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `intent`                                                                                                | *string*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `contentSubtype`                                                                                        | [models.GeoContentBriefDocumentContentSubtype](../models/geo-content-brief-document-content-subtype.md) | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `workingTitle`                                                                                          | *string*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `audience`                                                                                              | *string*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `jobToBeDone`                                                                                           | *string*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `sections`                                                                                              | [models.GeoContentBriefDocumentSection](../models/geo-content-brief-document-section.md)[]              | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `questionsToAnswer`                                                                                     | *string*[]                                                                                              | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `internalLinks`                                                                                         | [models.GeoContentBriefDocumentInternalLink](../models/geo-content-brief-document-internal-link.md)[]   | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `acceptanceChecklist`                                                                                   | *string*[]                                                                                              | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `recommendedAngle`                                                                                      | *string*                                                                                                | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |
| `competitorsToCounter`                                                                                  | *string*[]                                                                                              | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |
| `sourcesToReference`                                                                                    | *string*[]                                                                                              | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |
| `missingCoverage`                                                                                       | *string*[]                                                                                              | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |
| `baseline`                                                                                              | [models.GeoContentBriefDocumentBaseline](../models/geo-content-brief-document-baseline.md)              | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |