# GeoVisibilityPromptResultSummariesResponseResult

## Example Usage

```typescript
import { GeoVisibilityPromptResultSummariesResponseResult } from "@usenotra/sdk/models";

let value: GeoVisibilityPromptResultSummariesResponseResult = {
  promptId: "<id>",
  engine: "<value>",
  prompt: "<value>",
  mentioned: true,
  ownedSourceCited: true,
  position: 272884,
  sentiment: "<value>",
  competitors: [
    "<value 1>",
  ],
  lastCheckedAt: "<value>",
  checkId: "<id>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `promptId`         | *string*           | :heavy_check_mark: | N/A                |
| `engine`           | *string*           | :heavy_check_mark: | N/A                |
| `prompt`           | *string*           | :heavy_check_mark: | N/A                |
| `mentioned`        | *boolean*          | :heavy_check_mark: | N/A                |
| `ownedSourceCited` | *boolean*          | :heavy_check_mark: | N/A                |
| `position`         | *number*           | :heavy_check_mark: | N/A                |
| `sentiment`        | *string*           | :heavy_check_mark: | N/A                |
| `competitors`      | *string*[]         | :heavy_check_mark: | N/A                |
| `lastCheckedAt`    | *string*           | :heavy_check_mark: | N/A                |
| `checkId`          | *string*           | :heavy_check_mark: | N/A                |