# CreateBrandIdentityResponse

Brand identity generation queued successfully

## Example Usage

```typescript
import { CreateBrandIdentityResponse } from "@usenotra/sdk/models/operations";

let value: CreateBrandIdentityResponse = {
  organization: {
    id: "<id>",
    slug: "<value>",
    name: "<value>",
    logo: null,
  },
  job: {
    id: "<id>",
    organizationId: "<id>",
    brandIdentityId: "<id>",
    status: "completed",
    step: "scraping",
    currentStep: 683313,
    totalSteps: 102503,
    workflowRunId: "<id>",
    error: null,
    createdAt: "1730997023176",
    updatedAt: "1735686467041",
    completedAt: "<value>",
  },
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `organization`                                                                                              | [operations.CreateBrandIdentityOrganization](../../models/operations/create-brand-identity-organization.md) | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `job`                                                                                                       | [operations.CreateBrandIdentityJob](../../models/operations/create-brand-identity-job.md)                   | :heavy_check_mark:                                                                                          | N/A                                                                                                         |