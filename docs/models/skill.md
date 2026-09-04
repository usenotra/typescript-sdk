# Skill

## Example Usage

```typescript
import { Skill } from "@usenotra/sdk/models";

let value: Skill = {
  id: "<id>",
  name: "<value>",
  description: "furthermore boo unsteady affect vet brook circumnavigate brr",
  isSystem: false,
  updatedAt: "1735684802093",
  content: "<value>",
  createdAt: "1726613849734",
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `id`                                                                                    | *string*                                                                                | :heavy_check_mark:                                                                      | N/A                                                                                     |
| `name`                                                                                  | *string*                                                                                | :heavy_check_mark:                                                                      | N/A                                                                                     |
| `description`                                                                           | *string*                                                                                | :heavy_check_mark:                                                                      | N/A                                                                                     |
| `isSystem`                                                                              | *boolean*                                                                               | :heavy_check_mark:                                                                      | True for built-in skills provided by Notra. System skills cannot be renamed or deleted. |
| `updatedAt`                                                                             | *string*                                                                                | :heavy_check_mark:                                                                      | N/A                                                                                     |
| `content`                                                                               | *string*                                                                                | :heavy_check_mark:                                                                      | N/A                                                                                     |
| `createdAt`                                                                             | *string*                                                                                | :heavy_check_mark:                                                                      | N/A                                                                                     |