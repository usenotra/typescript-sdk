# ListSchedulesTargets

## Example Usage

```typescript
import { ListSchedulesTargets } from "@usenotra/sdk/models/operations";

let value: ListSchedulesTargets = {
  repositoryIds: [
    "51c2f3aa-efdd-4e28-8e69-23fa2dfd3561",
  ],
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   | Example                                                                       |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `repositoryIds`                                                               | *string*[]                                                                    | :heavy_check_mark:                                                            | GitHub integration IDs to generate from, as returned by GET /v1/integrations. | [<br/>"51c2f3aa-efdd-4e28-8e69-23fa2dfd3561"<br/>]                            |