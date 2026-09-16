# GeoPromptHistoryResponse

## Example Usage

```typescript
import { GeoPromptHistoryResponse } from "@usenotra/sdk/models";

let value: GeoPromptHistoryResponse = {
  configured: false,
  promptId: "<id>",
  checks: [],
  organization: {
    id: "<id>",
    slug: "<value>",
    name: "<value>",
    logo: "<value>",
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `configured`                                                                                         | *boolean*                                                                                            | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `promptId`                                                                                           | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `checks`                                                                                             | [models.Check](../models/check.md)[]                                                                 | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `organization`                                                                                       | [models.GeoPromptHistoryResponseOrganization](../models/geo-prompt-history-response-organization.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |