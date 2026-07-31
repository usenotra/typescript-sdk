# CreateAgentSessionResponse

## Example Usage

```typescript
import { CreateAgentSessionResponse } from "@usenotra/sdk/models/operations";

let value: CreateAgentSessionResponse = {
  headers: {},
  result: {
    ok: true,
    sessionId: "<id>",
    continuationToken: "<value>",
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `headers`                                                                          | Record<string, *string*[]>                                                         | :heavy_check_mark:                                                                 | N/A                                                                                |
| `result`                                                                           | [models.CreateAgentSessionResponse](../../models/create-agent-session-response.md) | :heavy_check_mark:                                                                 | N/A                                                                                |