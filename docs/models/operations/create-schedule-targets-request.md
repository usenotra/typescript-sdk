# CreateScheduleTargetsRequest

Data sources each run reads from. Set at least one GitHub or Linear integration.

## Example Usage

```typescript
import { CreateScheduleTargetsRequest } from "@usenotra/sdk/models/operations";

let value: CreateScheduleTargetsRequest = {
  repositoryIds: [
    "51c2f3aa-efdd-4e28-8e69-23fa2dfd3561",
  ],
  linearIntegrationIds: [
    "7f9a2b3c-1d4e-4f5a-9b6c-8d7e6f5a4b3c",
  ],
};
```

## Fields

| Field                                                                                                                                                | Type                                                                                                                                                 | Required                                                                                                                                             | Description                                                                                                                                          | Example                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `repositoryIds`                                                                                                                                      | *string*[]                                                                                                                                           | :heavy_minus_sign:                                                                                                                                   | GitHub integration IDs to generate from, as returned in the github array of GET /v1/integrations. Defaults to none when linearIntegrationIds is set. | [<br/>"51c2f3aa-efdd-4e28-8e69-23fa2dfd3561"<br/>]                                                                                                   |
| `linearIntegrationIds`                                                                                                                               | *string*[]                                                                                                                                           | :heavy_minus_sign:                                                                                                                                   | Linear integration IDs to generate from, as returned in the linear array of GET /v1/integrations.                                                    | [<br/>"7f9a2b3c-1d4e-4f5a-9b6c-8d7e6f5a4b3c"<br/>]                                                                                                   |