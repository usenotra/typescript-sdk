# Elicitation

## Example Usage

```typescript
import { Elicitation } from "@usenotra/sdk/models";

let value: Elicitation = {
  method: "<value>",
  tool: "<value>",
  requests: 318361,
  accepted: 830559,
  declined: 679253,
  cancelled: 607019,
  errors: 381312,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `method`           | *string*           | :heavy_check_mark: | N/A                |
| `tool`             | *string*           | :heavy_check_mark: | N/A                |
| `requests`         | *number*           | :heavy_check_mark: | N/A                |
| `accepted`         | *number*           | :heavy_check_mark: | N/A                |
| `declined`         | *number*           | :heavy_check_mark: | N/A                |
| `cancelled`        | *number*           | :heavy_check_mark: | N/A                |
| `errors`           | *number*           | :heavy_check_mark: | N/A                |