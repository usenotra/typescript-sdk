# GetGeoPersonaResultsRequest

## Example Usage

```typescript
import { GetGeoPersonaResultsRequest } from "@usenotra/sdk/models/operations";

let value: GetGeoPersonaResultsRequest = {
  projectId: "b1f2c3d4-0000-4000-8000-000000000000",
  personaId: "<id>",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    | Example                                                                                        |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `projectId`                                                                                    | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            | b1f2c3d4-0000-4000-8000-000000000000                                                           |
| `personaId`                                                                                    | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |                                                                                                |
| `scanId`                                                                                       | *string*                                                                                       | :heavy_minus_sign:                                                                             | Scan to read. Defaults to the latest scan that played this persona; ids are listed in `scans`. |                                                                                                |