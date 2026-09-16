# Opportunity

## Example Usage

```typescript
import { Opportunity } from "@usenotra/sdk/models";

let value: Opportunity = {
  status: "lost",
  priority: "high",
  assigneeMemberId: "<id>",
  pocMemberId: "<id>",
  notes: "<value>",
  dueAt: new Date("2026-04-11T21:54:51.319Z"),
  id: "<id>",
  createdByUserId: "<id>",
  resolvedAt: new Date("2025-01-27T00:23:08.172Z"),
  createdAt: new Date("2026-09-15T10:26:18.318Z"),
  updatedAt: new Date("2025-10-19T18:18:47.503Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `status`                                                                                      | [models.OpportunityStatus](../models/opportunity-status.md)                                   | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `priority`                                                                                    | [models.Priority](../models/priority.md)                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `assigneeMemberId`                                                                            | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `pocMemberId`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `notes`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `dueAt`                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdByUserId`                                                                             | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `resolvedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |