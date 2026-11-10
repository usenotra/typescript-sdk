# RunGeoPersonaResponse

## Example Usage

```typescript
import { RunGeoPersonaResponse } from "@usenotra/sdk/models";

let value: RunGeoPersonaResponse = {
  checks: 856732,
  mentions: 160182,
  engines: [],
  organization: {
    id: "<id>",
    slug: "<value>",
    name: "<value>",
    logo: "<value>",
  },
};
```

## Fields

| Field                                                                                                                                          | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `checks`                                                                                                                                       | *number*                                                                                                                                       | :heavy_check_mark:                                                                                                                             | Answers recorded during this request by the API-based engines that responded.                                                                  |
| `mentions`                                                                                                                                     | *number*                                                                                                                                       | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `engines`                                                                                                                                      | *string*[]                                                                                                                                     | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `queuedScanId`                                                                                                                                 | *string*                                                                                                                                       | :heavy_minus_sign:                                                                                                                             | Scan that plays the persona in the tracked consumer apps in the background, or `null`. Poll `GET /v1/projects/{projectId}/geo/scans/{scanId}`. |
| `queuedEngines`                                                                                                                                | *string*[]                                                                                                                                     | :heavy_minus_sign:                                                                                                                             | N/A                                                                                                                                            |
| `organization`                                                                                                                                 | [models.RunGeoPersonaResponseOrganization](../models/run-geo-persona-response-organization.md)                                                 | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |