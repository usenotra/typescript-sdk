# CreateBrandIdentityResponseBody

Brand identity generation queued successfully

## Example Usage

```typescript
import { CreateBrandIdentityResponseBody } from "@usenotra/sdk/models/operations";

let value: CreateBrandIdentityResponseBody = {
  organization: {
    id: "<id>",
    slug: "<value>",
    name: "<value>",
    logo: "<value>",
  },
  job: {
    id: "<id>",
    organizationId: "<id>",
    brandIdentityId: "<id>",
    status: "queued",
    step: "scraping",
    currentStep: 991247,
    totalSteps: 29106,
    workflowRunId: "<id>",
    error: "<value>",
    createdAt: "1733840772523",
    updatedAt: "1735664099058",
    completedAt: "<value>",
  },
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `organization`                                                                                              | [operations.CreateBrandIdentityOrganization](../../models/operations/create-brand-identity-organization.md) | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `job`                                                                                                       | [operations.CreateBrandIdentityJob](../../models/operations/create-brand-identity-job.md)                   | :heavy_check_mark:                                                                                          | N/A                                                                                                         |