# CreateBrandIdentityRequest

## Example Usage

```typescript
import { CreateBrandIdentityRequest } from "@usenotra/sdk/models/operations";

let value: CreateBrandIdentityRequest = {
  name: "Notra",
  websiteUrl: "https://usenotra.com",
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  | Example                                                                                                      |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `name`                                                                                                       | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | Display name. Must be unique within the organization. Defaults to "Untitled Brand Voice".                    | Notra                                                                                                        |
| `websiteUrl`                                                                                                 | *string*                                                                                                     | :heavy_check_mark:                                                                                           | Public website to analyze for company details, tone, and audience. The scheme is optional; https is assumed. | https://usenotra.com                                                                                         |