# Memory

## Example Usage

```typescript
import { Memory } from "@usenotra/sdk/models";

let value: Memory = {
  id: "<id>",
  kind: "preference",
  content: "<value>",
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `id`                                                   | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `kind`                                                 | [models.GeoPersonaKind](../models/geo-persona-kind.md) | :heavy_check_mark:                                     | N/A                                                    |
| `content`                                              | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |