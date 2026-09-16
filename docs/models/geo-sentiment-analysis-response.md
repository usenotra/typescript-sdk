# GeoSentimentAnalysisResponse

## Example Usage

```typescript
import { GeoSentimentAnalysisResponse } from "@usenotra/sdk/models";

let value: GeoSentimentAnalysisResponse = {
  status: "unavailable",
  result: {
    fingerprint: "<value>",
    generatedAt: "<value>",
    sampled: 237250,
    eligible: 825125,
    themes: [],
  },
  message: "<value>",
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
| `status`                                                                                                     | [models.GeoSentimentAnalysisResponseStatus](../models/geo-sentiment-analysis-response-status.md)             | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `result`                                                                                                     | [models.GeoSentimentAnalysisResponseResult](../models/geo-sentiment-analysis-response-result.md)             | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `message`                                                                                                    | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `organization`                                                                                               | [models.GeoSentimentAnalysisResponseOrganization](../models/geo-sentiment-analysis-response-organization.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |