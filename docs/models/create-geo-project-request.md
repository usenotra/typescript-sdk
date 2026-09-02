# CreateGeoProjectRequest

## Example Usage

```typescript
import { CreateGeoProjectRequest } from "@usenotra/sdk/models";

let value: CreateGeoProjectRequest = {
  name: "<value>",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `name`                                                                   | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `brandSettingsId`                                                        | *string*                                                                 | :heavy_minus_sign:                                                       | Brand identity to link. Defaults to the organization's default identity. |