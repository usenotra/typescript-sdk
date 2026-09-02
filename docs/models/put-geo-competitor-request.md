# PutGeoCompetitorRequest

## Example Usage

```typescript
import { PutGeoCompetitorRequest } from "@usenotra/sdk/models";

let value: PutGeoCompetitorRequest = {
  name: "<value>",
  domain: "fortunate-deck.name",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `name`                                                                             | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `previousName`                                                                     | *string*                                                                           | :heavy_minus_sign:                                                                 | Set to rename an existing competitor.                                              |
| `domain`                                                                           | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `synonyms`                                                                         | *string*[]                                                                         | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `kind`                                                                             | [models.PutGeoCompetitorRequestKind](../models/put-geo-competitor-request-kind.md) | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `color`                                                                            | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |