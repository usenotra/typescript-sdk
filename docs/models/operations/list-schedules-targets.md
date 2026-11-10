# ListSchedulesTargets

## Example Usage

```typescript
import { ListSchedulesTargets } from "@usenotra/sdk/models/operations";

let value: ListSchedulesTargets = {
  repositoryIds: [
    "<value 1>",
    "<value 2>",
  ],
};
```

## Fields

| Field                                                                                                                                                                             | Type                                                                                                                                                                              | Required                                                                                                                                                                          | Description                                                                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `repositoryIds`                                                                                                                                                                   | *string*[]                                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                                | GitHub integration IDs to generate from, as returned in the github array of GET /v1/integrations.                                                                                 |
| `linearIntegrationIds`                                                                                                                                                            | *string*[]                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                | Linear integration IDs to generate from, as returned in the linear array of GET /v1/integrations. When omitted, runs read every enabled Linear integration; send [] to read none. |