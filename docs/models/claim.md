# Claim

## Example Usage

```typescript
import { Claim } from "@usenotra/sdk/models";

let value: Claim = {
  statement: "<value>",
  evidence: [],
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `statement`                                           | *string*                                              | :heavy_check_mark:                                    | N/A                                                   |
| `evidence`                                            | [models.ClaimEvidence](../models/claim-evidence.md)[] | :heavy_check_mark:                                    | N/A                                                   |