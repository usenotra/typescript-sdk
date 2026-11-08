# UiRender

## Example Usage

```typescript
import { UiRender } from "@usenotra/sdk/models";

let value: UiRender = {
  resource: "<value>",
  tools: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  renders: 577579,
  sessions: 933610,
  errors: 849840,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `resource`         | *string*           | :heavy_check_mark: | N/A                |
| `tools`            | *string*[]         | :heavy_check_mark: | N/A                |
| `renders`          | *number*           | :heavy_check_mark: | N/A                |
| `sessions`         | *number*           | :heavy_check_mark: | N/A                |
| `errors`           | *number*           | :heavy_check_mark: | N/A                |