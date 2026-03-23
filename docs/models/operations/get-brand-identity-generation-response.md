# GetBrandIdentityGenerationResponse

Brand identity generation status fetched successfully

## Example Usage

```typescript
import { GetBrandIdentityGenerationResponse } from "@usenotra/sdk/models/operations";

let value: GetBrandIdentityGenerationResponse = {
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
    step: null,
    currentStep: 507881,
    totalSteps: 229386,
    workflowRunId: "<id>",
    error: "<value>",
    createdAt: "1725031580283",
    updatedAt: "1735670782573",
    completedAt: "<value>",
  },
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `organization`                                                                                                             | [operations.GetBrandIdentityGenerationOrganization](../../models/operations/get-brand-identity-generation-organization.md) | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `job`                                                                                                                      | [operations.GetBrandIdentityGenerationJob](../../models/operations/get-brand-identity-generation-job.md)                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |