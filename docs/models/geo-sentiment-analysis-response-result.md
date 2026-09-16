# GeoSentimentAnalysisResponseResult

## Example Usage

```typescript
import { GeoSentimentAnalysisResponseResult } from "@usenotra/sdk/models";

let value: GeoSentimentAnalysisResponseResult = {
  fingerprint: "<value>",
  generatedAt: "<value>",
  sampled: 172679,
  eligible: 340857,
  themes: [
    {
      title: "<value>",
      polarity: "positive",
      claims: [],
      evidence: [
        {
          checkId: "<id>",
          quote: "<value>",
          prompt: "<value>",
          engine: "<value>",
          capturedAt: "<value>",
        },
      ],
    },
  ],
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `fingerprint`                        | *string*                             | :heavy_check_mark:                   | N/A                                  |
| `generatedAt`                        | *string*                             | :heavy_check_mark:                   | N/A                                  |
| `sampled`                            | *number*                             | :heavy_check_mark:                   | N/A                                  |
| `eligible`                           | *number*                             | :heavy_check_mark:                   | N/A                                  |
| `themes`                             | [models.Theme](../models/theme.md)[] | :heavy_check_mark:                   | N/A                                  |