# Prompt

## Example Usage

```typescript
import { Prompt } from "@usenotra/sdk/models";

let value: Prompt = {
  promptId: "<id>",
  prompt: "<value>",
  engine: "<value>",
  capturedAt: "<value>",
  mentioned: true,
  position: 390311,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `promptId`         | *string*           | :heavy_check_mark: | N/A                |
| `prompt`           | *string*           | :heavy_check_mark: | N/A                |
| `engine`           | *string*           | :heavy_check_mark: | N/A                |
| `capturedAt`       | *string*           | :heavy_check_mark: | N/A                |
| `mentioned`        | *boolean*          | :heavy_check_mark: | N/A                |
| `position`         | *number*           | :heavy_check_mark: | N/A                |