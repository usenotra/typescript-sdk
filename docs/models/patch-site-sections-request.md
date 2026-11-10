# PatchSiteSectionsRequest

## Example Usage

```typescript
import { PatchSiteSectionsRequest } from "@usenotra/sdk/models";

let value: PatchSiteSectionsRequest = {
  blog: "/blog",
  changelog: "/changelog",
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             | Example                                                                 |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `blog`                                                                  | *string*                                                                | :heavy_minus_sign:                                                      | Path of the blog, like /blog. Omit to turn the blog off.                | /blog                                                                   |
| `changelog`                                                             | *string*                                                                | :heavy_minus_sign:                                                      | Path of the changelog, like /changelog. Omit to turn the changelog off. | /changelog                                                              |