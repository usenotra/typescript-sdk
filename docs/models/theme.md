# Theme

## Example Usage

```typescript
import { Theme } from "@usenotra/sdk/models";

let value: Theme = {
  title: "<value>",
  polarity: "positive",
  claims: [
    {
      statement: "<value>",
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
  evidence: [
    {
      checkId: "<id>",
      quote: "<value>",
      prompt: "<value>",
      engine: "<value>",
      capturedAt: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `title`                                                                                                | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `polarity`                                                                                             | [models.Polarity](../models/polarity.md)                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `claims`                                                                                               | [models.Claim](../models/claim.md)[]                                                                   | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `evidence`                                                                                             | [models.GeoSentimentAnalysisResponseEvidence](../models/geo-sentiment-analysis-response-evidence.md)[] | :heavy_check_mark:                                                                                     | N/A                                                                                                    |