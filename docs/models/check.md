# Check

## Example Usage

```typescript
import { Check } from "@usenotra/sdk/models";

let value: Check = {
  id: "<id>",
  scanId: "<id>",
  engine: "<value>",
  mentioned: false,
  position: 419.47,
  sentiment: "<value>",
  competitors: [],
  language: "<value>",
  capturedAt: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `id`               | *string*           | :heavy_check_mark: | N/A                |
| `scanId`           | *string*           | :heavy_check_mark: | N/A                |
| `engine`           | *string*           | :heavy_check_mark: | N/A                |
| `mentioned`        | *boolean*          | :heavy_check_mark: | N/A                |
| `ownedSourceCited` | *boolean*          | :heavy_minus_sign: | N/A                |
| `position`         | *number*           | :heavy_check_mark: | N/A                |
| `sentiment`        | *string*           | :heavy_check_mark: | N/A                |
| `competitors`      | *string*[]         | :heavy_check_mark: | N/A                |
| `language`         | *string*           | :heavy_check_mark: | N/A                |
| `capturedAt`       | *string*           | :heavy_check_mark: | N/A                |