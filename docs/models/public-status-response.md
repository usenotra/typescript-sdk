# PublicStatusResponse

## Example Usage

```typescript
import { PublicStatusResponse } from "@usenotra/sdk/models";

let value: PublicStatusResponse = {
  status: "ok",
  service: "Notra API",
  version: "<value>",
  public: true,
  authentication: {
    type: "bearer",
    resourceMetadata: "https://useless-toothpick.biz/",
    guide: "https://unconscious-quart.name/",
  },
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `status`                                             | [models.Status](../models/status.md)                 | :heavy_check_mark:                                   | N/A                                                  |
| `service`                                            | [models.Service](../models/service.md)               | :heavy_check_mark:                                   | N/A                                                  |
| `version`                                            | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `public`                                             | *true*                                               | :heavy_check_mark:                                   | N/A                                                  |
| `authentication`                                     | [models.Authentication](../models/authentication.md) | :heavy_check_mark:                                   | N/A                                                  |