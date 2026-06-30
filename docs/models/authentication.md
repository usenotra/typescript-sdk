# Authentication

## Example Usage

```typescript
import { Authentication } from "@usenotra/sdk/models";

let value: Authentication = {
  type: "bearer",
  resourceMetadata: "https://measly-warming.biz/",
  guide: "https://yellowish-newsprint.org",
};
```

## Fields

| Field                                     | Type                                      | Required                                  | Description                               |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `type`                                    | [models.TypeEnum](../models/type-enum.md) | :heavy_check_mark:                        | N/A                                       |
| `resourceMetadata`                        | *string*                                  | :heavy_check_mark:                        | N/A                                       |
| `guide`                                   | *string*                                  | :heavy_check_mark:                        | N/A                                       |