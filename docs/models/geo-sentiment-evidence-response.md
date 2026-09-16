# GeoSentimentEvidenceResponse

## Example Usage

```typescript
import { GeoSentimentEvidenceResponse } from "@usenotra/sdk/models";

let value: GeoSentimentEvidenceResponse = {
  items: [
    {
      id: "<id>",
      scanId: "<id>",
      promptId: "<id>",
      prompt: "<value>",
      engine: "<value>",
      language: "<value>",
      capturedAt: "<value>",
      answer: "<value>",
      excerpt: "<value>",
    },
  ],
  nextCursor: "<value>",
  organization: {
    id: "<id>",
    slug: "<value>",
    name: "<value>",
    logo: "<value>",
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `items`                                                                                                      | [models.Item](../models/item.md)[]                                                                           | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `nextCursor`                                                                                                 | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `organization`                                                                                               | [models.GeoSentimentEvidenceResponseOrganization](../models/geo-sentiment-evidence-response-organization.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |