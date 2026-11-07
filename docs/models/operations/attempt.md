# Attempt

## Example Usage

```typescript
import { Attempt } from "@usenotra/sdk/models/operations";

let value: Attempt = {
  id: "<id>",
  deliveryId: "<id>",
  attemptNumber: 3667.05,
  startedAt: "<value>",
  finishedAt: "<value>",
  statusCode: 1934.8,
  error: "<value>",
  durationMs: 4676.53,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `id`               | *string*           | :heavy_check_mark: | N/A                |
| `deliveryId`       | *string*           | :heavy_check_mark: | N/A                |
| `attemptNumber`    | *number*           | :heavy_check_mark: | N/A                |
| `startedAt`        | *string*           | :heavy_check_mark: | N/A                |
| `finishedAt`       | *string*           | :heavy_check_mark: | N/A                |
| `statusCode`       | *number*           | :heavy_check_mark: | N/A                |
| `error`            | *string*           | :heavy_check_mark: | N/A                |
| `durationMs`       | *number*           | :heavy_check_mark: | N/A                |