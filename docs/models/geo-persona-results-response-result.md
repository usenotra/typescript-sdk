# GeoPersonaResultsResponseResult

## Example Usage

```typescript
import { GeoPersonaResultsResponseResult } from "@usenotra/sdk/models";

let value: GeoPersonaResultsResponseResult = {
  scanId: "<id>",
  turn: 9344,
  engine: "<value>",
  prompt: "<value>",
  answer: "<value>",
  mentioned: true,
  position: 7941.09,
  sentiment: "<value>",
  excerpt: "<value>",
  searchQueries: [
    "<value 1>",
  ],
  sources: [
    {
      title: "<value>",
      url: "https://infamous-submitter.org",
      domain: "gentle-sonata.biz",
    },
  ],
  snapshotVersion: "<value>",
  lastCheckedAt: "<value>",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `scanId`                                                                                     | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `turn`                                                                                       | *number*                                                                                     | :heavy_check_mark:                                                                           | Conversation turn, starting at 1.                                                            |
| `engine`                                                                                     | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `prompt`                                                                                     | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `answer`                                                                                     | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `mentioned`                                                                                  | *boolean*                                                                                    | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `position`                                                                                   | *number*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `sentiment`                                                                                  | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `excerpt`                                                                                    | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `searchQueries`                                                                              | *string*[]                                                                                   | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `sources`                                                                                    | [models.GeoPersonaResultsResponseSource](../models/geo-persona-results-response-source.md)[] | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `snapshotVersion`                                                                            | *string*                                                                                     | :heavy_check_mark:                                                                           | Hash of the persona context this answer was played with. Changes when the persona is edited. |
| `lastCheckedAt`                                                                              | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |