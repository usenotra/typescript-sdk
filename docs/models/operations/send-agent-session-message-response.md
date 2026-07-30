# SendAgentSessionMessageResponse

## Example Usage

```typescript
import { SendAgentSessionMessageResponse } from "@usenotra/sdk/models/operations";

let value: SendAgentSessionMessageResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key2": [],
  },
  result: {},
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                             | Record<string, *string*[]>                                                                                            | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `result`                                                                                                              | [operations.SendAgentSessionMessageResponseBody](../../models/operations/send-agent-session-message-response-body.md) | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |