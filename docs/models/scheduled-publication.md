# ScheduledPublication

## Example Usage

```typescript
import { ScheduledPublication } from "@usenotra/sdk/models";

let value: ScheduledPublication = {
  id: "<id>",
  destination: "notra",
  config: {
    destination: "github",
    repositoryId: "<id>",
    merge: true,
  },
  status: "publishing",
  scheduledAt: new Date("2024-04-25T19:42:18.390Z"),
  timeZone: "Europe/Mariehamn",
  attempts: 701547,
  errorCode: "<value>",
  lastError: "<value>",
  resultUrl: "https://lone-waist.name/",
  publishedAt: new Date("2026-07-24T10:54:13.236Z"),
};
```

## Fields

| Field                                                                                                                                       | Type                                                                                                                                        | Required                                                                                                                                    | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                        | *string*                                                                                                                                    | :heavy_check_mark:                                                                                                                          | N/A                                                                                                                                         |
| `destination`                                                                                                                               | [models.DestinationEnum](../models/destination-enum.md)                                                                                     | :heavy_check_mark:                                                                                                                          | N/A                                                                                                                                         |
| `config`                                                                                                                                    | *models.Config*                                                                                                                             | :heavy_check_mark:                                                                                                                          | N/A                                                                                                                                         |
| `status`                                                                                                                                    | [models.ScheduledPublicationStatus](../models/scheduled-publication-status.md)                                                              | :heavy_check_mark:                                                                                                                          | scheduled → publishing → published or failed. Failed destinations are retried automatically for transient errors before they end up failed. |
| `scheduledAt`                                                                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                               | :heavy_check_mark:                                                                                                                          | N/A                                                                                                                                         |
| `timeZone`                                                                                                                                  | *string*                                                                                                                                    | :heavy_check_mark:                                                                                                                          | N/A                                                                                                                                         |
| `attempts`                                                                                                                                  | *number*                                                                                                                                    | :heavy_check_mark:                                                                                                                          | N/A                                                                                                                                         |
| `errorCode`                                                                                                                                 | *string*                                                                                                                                    | :heavy_check_mark:                                                                                                                          | N/A                                                                                                                                         |
| `lastError`                                                                                                                                 | *string*                                                                                                                                    | :heavy_check_mark:                                                                                                                          | N/A                                                                                                                                         |
| `resultUrl`                                                                                                                                 | *string*                                                                                                                                    | :heavy_check_mark:                                                                                                                          | Pull request or social post URL once published.                                                                                             |
| `publishedAt`                                                                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                               | :heavy_check_mark:                                                                                                                          | N/A                                                                                                                                         |