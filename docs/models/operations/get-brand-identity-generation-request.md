# GetBrandIdentityGenerationRequest

## Example Usage

```typescript
import { GetBrandIdentityGenerationRequest } from "@usenotra/sdk/models/operations";

let value: GetBrandIdentityGenerationRequest = {
  jobId: "brand_job_5f0c3b2a9d4e4c1f8a7b6c5d4e3f2a1b",
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            | Example                                                |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `jobId`                                                | *string*                                               | :heavy_check_mark:                                     | Job ID returned by POST /v1/brand-identities/generate. | brand_job_5f0c3b2a9d4e4c1f8a7b6c5d4e3f2a1b             |