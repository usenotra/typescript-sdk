# SuggestGeoCompetitorsResponse

## Example Usage

```typescript
import { SuggestGeoCompetitorsResponse } from "@usenotra/sdk/models/operations";

let value: SuggestGeoCompetitorsResponse = {
  headers: {},
  result: {
    domain: "impressionable-deed.net",
    field: "<value>",
    competitors: [
      {
        name: "<value>",
        domain: "common-freckle.biz",
        description: null,
        confidence: "high",
      },
    ],
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

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `headers`                                                                                      | Record<string, *string*[]>                                                                     | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `result`                                                                                       | [models.GeoCompetitorSuggestionsResponse](../../models/geo-competitor-suggestions-response.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |