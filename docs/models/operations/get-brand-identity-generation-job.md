# GetBrandIdentityGenerationJob

## Example Usage

```typescript
import { GetBrandIdentityGenerationJob } from "@usenotra/sdk/models/operations";

let value: GetBrandIdentityGenerationJob = {
  id: "<id>",
  organizationId: "<id>",
  brandIdentityId: "<id>",
  status: "running",
  step: "saving",
  currentStep: 767445,
  totalSteps: 15059,
  workflowRunId: "<id>",
  error: "<value>",
  createdAt: "1728757537720",
  updatedAt: "1735645847829",
  completedAt: "<value>",
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                           | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `organizationId`                                                                                               | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `brandIdentityId`                                                                                              | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `status`                                                                                                       | [operations.GetBrandIdentityGenerationStatus](../../models/operations/get-brand-identity-generation-status.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `step`                                                                                                         | [operations.GetBrandIdentityGenerationStep](../../models/operations/get-brand-identity-generation-step.md)     | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `currentStep`                                                                                                  | *number*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `totalSteps`                                                                                                   | *number*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `workflowRunId`                                                                                                | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `error`                                                                                                        | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `createdAt`                                                                                                    | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `updatedAt`                                                                                                    | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `completedAt`                                                                                                  | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |