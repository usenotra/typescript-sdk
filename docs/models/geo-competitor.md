# GeoCompetitor

## Example Usage

```typescript
import { GeoCompetitor } from "@usenotra/sdk/models";

let value: GeoCompetitor = {
  id: "<id>",
  name: "<value>",
  domain: "inconsequential-oil.biz",
  synonyms: [],
  kind: "indirect",
  color: "violet",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `id`                                                         | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `name`                                                       | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `domain`                                                     | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `synonyms`                                                   | *string*[]                                                   | :heavy_check_mark:                                           | N/A                                                          |
| `kind`                                                       | [models.GeoCompetitorKind](../models/geo-competitor-kind.md) | :heavy_check_mark:                                           | N/A                                                          |
| `color`                                                      | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |