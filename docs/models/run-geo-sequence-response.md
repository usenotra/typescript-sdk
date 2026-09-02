# RunGeoSequenceResponse

## Example Usage

```typescript
import { RunGeoSequenceResponse } from "@usenotra/sdk/models";

let value: RunGeoSequenceResponse = {
  checks: 956196,
  mentions: 201737,
  engines: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  organization: {
    id: "<id>",
    slug: "<value>",
    name: "<value>",
    logo: "<value>",
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `checks`                                                                                         | *number*                                                                                         | :heavy_check_mark:                                                                               | Recorded answers across every engine that responded.                                             |
| `mentions`                                                                                       | *number*                                                                                         | :heavy_check_mark:                                                                               | How many of those answers mentioned the tracked brand.                                           |
| `engines`                                                                                        | *string*[]                                                                                       | :heavy_check_mark:                                                                               | Engines the conversation was played against.                                                     |
| `organization`                                                                                   | [models.RunGeoSequenceResponseOrganization](../models/run-geo-sequence-response-organization.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |