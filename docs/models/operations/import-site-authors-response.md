# ImportSiteAuthorsResponse

## Example Usage

```typescript
import { ImportSiteAuthorsResponse } from "@usenotra/sdk/models/operations";

let value: ImportSiteAuthorsResponse = {
  headers: {},
  result: {
    site: {
      id: "<id>",
      name: "<value>",
    },
    authors: [
      {
        id: "jane-doe",
        ref: "site:jane-doe",
        name: "Jane Doe",
        title: "Head of Product",
        bio: null,
        avatar: "/images/jane.png",
        avatarUrl: "https://acme.notra.site/blog/images/jane.png",
        url: "https://janedoe.dev",
        x: "https://x.com/janedoe",
        linkedin: "<value>",
        github: "<value>",
        youtube: "<value>",
        bluesky: null,
        mastodon: "<value>",
        threads: "<value>",
        instagram: "<value>",
        live: true,
        posts: 3,
      },
    ],
    authorPage: "inline",
    hasUnpublishedChanges: true,
    imported: [
      "jane-doe",
    ],
    avatarsSkipped: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `headers`                                                                        | Record<string, *string*[]>                                                       | :heavy_check_mark:                                                               | N/A                                                                              |
| `result`                                                                         | [models.ImportSiteAuthorsResponse](../../models/import-site-authors-response.md) | :heavy_check_mark:                                                               | N/A                                                                              |