# PostAgentReachTotals

## Example Usage

```typescript
import { PostAgentReachTotals } from "@usenotra/sdk/models";

let value: PostAgentReachTotals = {
  crawled: 621521,
  cited: 760511,
  referred: 862755,
  total: 674217,
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `crawled`                                                        | *number*                                                         | :heavy_check_mark:                                               | Training and search-index crawler visits.                        |
| `cited`                                                          | *number*                                                         | :heavy_check_mark:                                               | Visits from assistants reading the page while answering someone. |
| `referred`                                                       | *number*                                                         | :heavy_check_mark:                                               | People who clicked through from an AI answer.                    |
| `total`                                                          | *number*                                                         | :heavy_check_mark:                                               | N/A                                                              |