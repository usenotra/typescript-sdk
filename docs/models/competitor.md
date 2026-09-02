# Competitor

## Example Usage

```typescript
import { Competitor } from "@usenotra/sdk/models";

let value: Competitor = {
  name: "<value>",
  domain: "rusty-character.org",
  description: null,
  confidence: "high",
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `name`                                       | *string*                                     | :heavy_check_mark:                           | N/A                                          |
| `domain`                                     | *string*                                     | :heavy_check_mark:                           | N/A                                          |
| `description`                                | *string*                                     | :heavy_check_mark:                           | N/A                                          |
| `confidence`                                 | [models.Confidence](../models/confidence.md) | :heavy_check_mark:                           | N/A                                          |