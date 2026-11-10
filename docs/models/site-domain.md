# SiteDomain

## Example Usage

```typescript
import { SiteDomain } from "@usenotra/sdk/models";

let value: SiteDomain = {
  id: "<id>",
  hostname: "unwieldy-ecliptic.info",
  kind: "proxy",
  status: "pending",
  isPrimary: true,
  records: [
    {
      type: "TXT",
      name: "<value>",
      value: "<value>",
      purpose: "ownership",
    },
  ],
  lastError: "<value>",
  verifiedAt: null,
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `id`                                                       | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `hostname`                                                 | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `kind`                                                     | [models.SiteDomainKind](../models/site-domain-kind.md)     | :heavy_check_mark:                                         | N/A                                                        |
| `status`                                                   | [models.SiteDomainStatus](../models/site-domain-status.md) | :heavy_check_mark:                                         | N/A                                                        |
| `isPrimary`                                                | *boolean*                                                  | :heavy_check_mark:                                         | N/A                                                        |
| `records`                                                  | [models.RecordT](../models/record-t.md)[]                  | :heavy_check_mark:                                         | N/A                                                        |
| `lastError`                                                | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `verifiedAt`                                               | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |