# AuthenticationOauth

## Example Usage

```typescript
import { AuthenticationOauth } from "@usenotra/sdk/models";

let value: AuthenticationOauth = {
  type: "oauth",
  accountId: "<id>",
  scopes: [],
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `type`             | *"oauth"*          | :heavy_check_mark: | N/A                |
| `accountId`        | *string*           | :heavy_check_mark: | N/A                |
| `scopes`           | *string*[]         | :heavy_check_mark: | N/A                |