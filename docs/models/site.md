# Site

## Example Usage

```typescript
import { Site } from "@usenotra/sdk/models";

let value: Site = {
  id: "site_8f2kq1",
  name: "Acme",
  url: "https://acme.notra.site/blog",
  status: "active",
  live: true,
  blogMount: "/blog",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            | Example                                                                                                |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                   | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    | site_8f2kq1                                                                                            |
| `name`                                                                                                 | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    | Acme                                                                                                   |
| `url`                                                                                                  | *string*                                                                                               | :heavy_check_mark:                                                                                     | Where the site serves its first area, such as its blog.                                                | https://acme.notra.site/blog                                                                           |
| `status`                                                                                               | *string*                                                                                               | :heavy_check_mark:                                                                                     | active, or suspended while the site is paused.                                                         | active                                                                                                 |
| `live`                                                                                                 | *boolean*                                                                                              | :heavy_check_mark:                                                                                     | The site has a production deployment serving visitors.                                                 | true                                                                                                   |
| `blogMount`                                                                                            | *string*                                                                                               | :heavy_check_mark:                                                                                     | Path the blog is served under, or null when the site has no blog. Only sites with a blog have authors. | /blog                                                                                                  |