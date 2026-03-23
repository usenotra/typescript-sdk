# CreateBrandIdentityJob

## Example Usage

```typescript
import { CreateBrandIdentityJob } from "@usenotra/sdk/models/operations";

let value: CreateBrandIdentityJob = {
  id: "<id>",
  organizationId: "<id>",
  brandIdentityId: "<id>",
  status: "completed",
  step: "extracting",
  currentStep: 628178,
  totalSteps: 334603,
  workflowRunId: "<id>",
  error: "<value>",
  createdAt: "1733830707519",
  updatedAt: "1735646720295",
  completedAt: "<value>",
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `id`                                                                                            | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `organizationId`                                                                                | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `brandIdentityId`                                                                               | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `status`                                                                                        | [operations.CreateBrandIdentityStatus](../../models/operations/create-brand-identity-status.md) | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `step`                                                                                          | [operations.CreateBrandIdentityStep](../../models/operations/create-brand-identity-step.md)     | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `currentStep`                                                                                   | *number*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `totalSteps`                                                                                    | *number*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `workflowRunId`                                                                                 | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `error`                                                                                         | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `createdAt`                                                                                     | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `updatedAt`                                                                                     | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `completedAt`                                                                                   | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |