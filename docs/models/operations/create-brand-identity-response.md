# CreateBrandIdentityResponse

## Example Usage

```typescript
import { CreateBrandIdentityResponse } from "@usenotra/sdk/models/operations";

let value: CreateBrandIdentityResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [],
  },
  result: {
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
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `headers`                                                                                                    | Record<string, *string*[]>                                                                                   | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `result`                                                                                                     | [operations.CreateBrandIdentityResponseBody](../../models/operations/create-brand-identity-response-body.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |