# InputResponse

## Example Usage

```typescript
import { InputResponse } from "@usenotra/sdk/models";

let value: InputResponse = {
  requestId: "<id>",
  optionId: "<id>",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `requestId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `optionId`                                                                     | *string*                                                                       | :heavy_check_mark:                                                             | The chosen option id from the input.requested event, e.g. "approve" or "deny". |