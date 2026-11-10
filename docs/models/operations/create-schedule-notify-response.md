# CreateScheduleNotifyResponse

Where to announce new content after a successful run: Slack posts to the organization's notification channel, email goes to the workspace owners.

## Example Usage

```typescript
import { CreateScheduleNotifyResponse } from "@usenotra/sdk/models/operations";

let value: CreateScheduleNotifyResponse = {
  slack: true,
  email: false,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `slack`            | *boolean*          | :heavy_check_mark: | N/A                |
| `email`            | *boolean*          | :heavy_check_mark: | N/A                |