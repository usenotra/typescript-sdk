# Diagnostic

## Example Usage

```typescript
import { Diagnostic } from "@usenotra/sdk/models";

let value: Diagnostic = {
  severity: "warning",
  file: "<value>",
  code: "<value>",
  message: "<value>",
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `severity`                               | [models.Severity](../models/severity.md) | :heavy_check_mark:                       | N/A                                      |
| `file`                                   | *string*                                 | :heavy_check_mark:                       | N/A                                      |
| `line`                                   | *number*                                 | :heavy_minus_sign:                       | N/A                                      |
| `column`                                 | *number*                                 | :heavy_minus_sign:                       | N/A                                      |
| `code`                                   | *string*                                 | :heavy_check_mark:                       | N/A                                      |
| `message`                                | *string*                                 | :heavy_check_mark:                       | N/A                                      |