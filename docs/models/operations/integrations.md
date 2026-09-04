# Integrations

Source integrations to draw activity from. Omit this and github.repositories to use every connected GitHub integration.

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

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `github`                                                                       | *string*[]                                                                     | :heavy_minus_sign:                                                             | GitHub integration IDs to use as sources, as returned by GET /v1/integrations. | [<br/>"integration_1",<br/>"integration_2"<br/>]                               |
| `linear`                                                                       | *string*[]                                                                     | :heavy_minus_sign:                                                             | Linear integration IDs to use as sources, as returned by GET /v1/integrations. | [<br/>"linear_integration_1"<br/>]                                             |