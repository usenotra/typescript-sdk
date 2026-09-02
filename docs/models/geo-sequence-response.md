# GeoSequenceResponse

## Example Usage

```typescript
import { GeoSequenceResponse } from "@usenotra/sdk/models";

let value: GeoSequenceResponse = {
  sequence: {
    id: "<id>",
    name: "<value>",
    steps: [
      "<value 1>",
    ],
    enabled: false,
    createdAt: "1716604685793",
  },
  organization: {
    id: "<id>",
    slug: "<value>",
    name: "<value>",
    logo: "<value>",
  },
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `sequence`                                                                                | [models.GeoSequence](../models/geo-sequence.md)                                           | :heavy_check_mark:                                                                        | N/A                                                                                       |
| `organization`                                                                            | [models.GeoSequenceResponseOrganization](../models/geo-sequence-response-organization.md) | :heavy_check_mark:                                                                        | N/A                                                                                       |