# Placement

## Example Usage

```typescript
import { Placement } from "@usenotra/sdk/models";

let value: Placement = {
  competitorId: "<id>",
  brandName: "<value>",
  brandDomain: "<value>",
  status: "unknown",
  position: 273513,
  hasLink: true,
  evidence: "manual",
  excerpt: "<value>",
  checkedAt: new Date("2024-08-16T06:20:00.835Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `competitorId`                                                                                | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `brandName`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `brandDomain`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `status`                                                                                      | [models.PlacementStatus](../models/placement-status.md)                                       | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `position`                                                                                    | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `hasLink`                                                                                     | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `evidence`                                                                                    | [models.EvidenceEnum](../models/evidence-enum.md)                                             | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `excerpt`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `checkedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |