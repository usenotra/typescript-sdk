# GeoCompetitorSuggestionsResponse

## Example Usage

```typescript
import { GeoCompetitorSuggestionsResponse } from "@usenotra/sdk/models";

let value: GeoCompetitorSuggestionsResponse = {
  domain: "trivial-translation.name",
  field: "<value>",
  competitors: [],
  organization: {
    id: "<id>",
    slug: "<value>",
    name: "<value>",
    logo: "<value>",
  },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `domain`                                                                                                             | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `field`                                                                                                              | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `competitors`                                                                                                        | [models.Competitor](../models/competitor.md)[]                                                                       | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `organization`                                                                                                       | [models.GeoCompetitorSuggestionsResponseOrganization](../models/geo-competitor-suggestions-response-organization.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |