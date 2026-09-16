# Citations

## Example Usage

```typescript
import { Citations } from "@usenotra/sdk/models";

let value: Citations = {
  windowCount: 543054,
  totalCount: 186339,
  promptCount: 692406,
  engines: [
    "<value 1>",
    "<value 2>",
  ],
  firstCitedAt: new Date("2025-04-06T20:40:56.081Z"),
  lastCitedAt: new Date("2025-08-28T02:41:33.995Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `windowCount`                                                                                 | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `totalCount`                                                                                  | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `promptCount`                                                                                 | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `engines`                                                                                     | *string*[]                                                                                    | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `firstCitedAt`                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `lastCitedAt`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |