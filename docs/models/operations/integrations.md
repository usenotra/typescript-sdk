# Integrations

## Example Usage

```typescript
import { Integrations } from "@usenotra/sdk/models/operations";

let value: Integrations = {
  github: [
    "integration_1",
    "integration_2",
  ],
  linear: [
    "linear_integration_1",
  ],
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          | Example                              |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `github`                             | *string*[]                           | :heavy_minus_sign:                   | N/A                                  | [<br/>"integration_1",<br/>"integration_2"<br/>] |
| `linear`                             | *string*[]                           | :heavy_minus_sign:                   | N/A                                  | [<br/>"linear_integration_1"<br/>]   |