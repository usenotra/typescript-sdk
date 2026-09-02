# GeoAgentReadinessScanResponse

## Example Usage

```typescript
import { GeoAgentReadinessScanResponse } from "@usenotra/sdk/models";

let value: GeoAgentReadinessScanResponse = {
  reportId: "<id>",
  alreadyRunning: true,
  organization: {
    id: "<id>",
    slug: "<value>",
    name: "<value>",
    logo: null,
  },
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `reportId`                                                                                                      | *string*                                                                                                        | :heavy_check_mark:                                                                                              | N/A                                                                                                             |
| `alreadyRunning`                                                                                                | *boolean*                                                                                                       | :heavy_check_mark:                                                                                              | True when an in-flight scan for the same URL was reused instead of starting a new one.                          |
| `organization`                                                                                                  | [models.GeoAgentReadinessScanResponseOrganization](../models/geo-agent-readiness-scan-response-organization.md) | :heavy_check_mark:                                                                                              | N/A                                                                                                             |