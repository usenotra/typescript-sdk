# UpdateFeedbackRequest

## Example Usage

```typescript
import { UpdateFeedbackRequest } from "@usenotra/sdk/models/operations";

let value: UpdateFeedbackRequest = {
  feedbackId: "fb_123",
  body: {
    status: "new",
  },
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             | Example                                                                 |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `feedbackId`                                                            | *string*                                                                | :heavy_check_mark:                                                      | N/A                                                                     | fb_123                                                                  |
| `body`                                                                  | [models.UpdateFeedbackRequest](../../models/update-feedback-request.md) | :heavy_check_mark:                                                      | N/A                                                                     |                                                                         |