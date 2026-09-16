# GeoChangesResponseEvent

## Example Usage

```typescript
import { GeoChangesResponseEvent } from "@usenotra/sdk/models";

let value: GeoChangesResponseEvent = {
  kind: "lost_mention",
  promptId: "<id>",
  prompt: "<value>",
  engine: "<value>",
  previous: {
    mentioned: true,
    position: 7089.79,
  },
  current: {
    mentioned: true,
    position: 629.15,
  },
  competitors: [],
  domains: [],
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `kind`                                                                          | [models.GeoChangesResponseKind](../models/geo-changes-response-kind.md)         | :heavy_check_mark:                                                              | N/A                                                                             |
| `promptId`                                                                      | *string*                                                                        | :heavy_check_mark:                                                              | N/A                                                                             |
| `prompt`                                                                        | *string*                                                                        | :heavy_check_mark:                                                              | N/A                                                                             |
| `engine`                                                                        | *string*                                                                        | :heavy_check_mark:                                                              | N/A                                                                             |
| `previous`                                                                      | [models.GeoChangesResponsePrevious](../models/geo-changes-response-previous.md) | :heavy_check_mark:                                                              | N/A                                                                             |
| `current`                                                                       | [models.GeoChangesResponseCurrent](../models/geo-changes-response-current.md)   | :heavy_check_mark:                                                              | N/A                                                                             |
| `competitors`                                                                   | *string*[]                                                                      | :heavy_check_mark:                                                              | N/A                                                                             |
| `domains`                                                                       | *string*[]                                                                      | :heavy_check_mark:                                                              | N/A                                                                             |