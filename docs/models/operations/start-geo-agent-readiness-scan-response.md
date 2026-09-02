# StartGeoAgentReadinessScanResponse

## Example Usage

```typescript
import { StartGeoAgentReadinessScanResponse } from "@usenotra/sdk/models/operations";

let value: StartGeoAgentReadinessScanResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    reportId: "<id>",
    alreadyRunning: true,
    organization: {
      id: "<id>",
      slug: "<value>",
      name: "<value>",
      logo: null,
    },
  },
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `headers`                                                                                 | Record<string, *string*[]>                                                                | :heavy_check_mark:                                                                        | N/A                                                                                       |
| `result`                                                                                  | [models.GeoAgentReadinessScanResponse](../../models/geo-agent-readiness-scan-response.md) | :heavy_check_mark:                                                                        | N/A                                                                                       |