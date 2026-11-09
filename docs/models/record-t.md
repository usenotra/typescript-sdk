# RecordT

## Example Usage

```typescript
import { RecordT } from "@usenotra/sdk/models";

let value: RecordT = {
  type: "A",
  name: "<value>",
  value: "<value>",
  purpose: "certificate",
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `type`                                                 | [models.SiteDomainType](../models/site-domain-type.md) | :heavy_check_mark:                                     | N/A                                                    |
| `name`                                                 | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `value`                                                | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `purpose`                                              | [models.Purpose](../models/purpose.md)                 | :heavy_check_mark:                                     | N/A                                                    |