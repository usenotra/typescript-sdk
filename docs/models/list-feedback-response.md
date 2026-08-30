# ListFeedbackResponse

## Example Usage

```typescript
import { ListFeedbackResponse } from "@usenotra/sdk/models";

let value: ListFeedbackResponse = {
  feedback: [],
  pagination: {
    limit: 130570,
    currentPage: 423981,
    nextPage: 860948,
    previousPage: 410397,
    totalPages: 712666,
    totalItems: 590451,
  },
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `feedback`                                   | [models.Feedback](../models/feedback.md)[]   | :heavy_check_mark:                           | N/A                                          |
| `pagination`                                 | [models.Pagination](../models/pagination.md) | :heavy_check_mark:                           | N/A                                          |