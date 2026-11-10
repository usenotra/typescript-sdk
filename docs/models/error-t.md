# ErrorT

## Example Usage

```typescript
import { ErrorT } from "@usenotra/sdk/models";

let value: ErrorT = {
  message: "<value>",
  source: "<value>",
  events: 81384,
  views: 897212,
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `message`                                                      | *string*                                                       | :heavy_check_mark:                                             | Scrubbed before storage: no query strings, emails or long ids. |
| `source`                                                       | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `events`                                                       | *number*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `views`                                                        | *number*                                                       | :heavy_check_mark:                                             | N/A                                                            |