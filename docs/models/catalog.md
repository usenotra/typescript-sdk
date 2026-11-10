# Catalog

Tools from the latest tools/list that were never called in the window. Null before a listing is seen.

## Example Usage

```typescript
import { Catalog } from "@usenotra/sdk/models";

let value: Catalog = {
  listedAt: "<value>",
  unusedTools: [],
};
```

## Fields

| Field                                           | Type                                            | Required                                        | Description                                     |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `listedAt`                                      | *string*                                        | :heavy_check_mark:                              | N/A                                             |
| `unusedTools`                                   | [models.UnusedTool](../models/unused-tool.md)[] | :heavy_check_mark:                              | N/A                                             |