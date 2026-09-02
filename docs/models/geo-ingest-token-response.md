# GeoIngestTokenResponse

## Example Usage

```typescript
import { GeoIngestTokenResponse } from "@usenotra/sdk/models";

let value: GeoIngestTokenResponse = {
  ingestUrl: "https://yearly-giggle.org/",
  snippet: "<value>",
  snippets: {
    next: "<value>",
    nuxt: "<value>",
    netlify: "<value>",
  },
  organization: {
    id: "<id>",
    slug: "<value>",
    name: "<value>",
    logo: null,
  },
  token: "<value>",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `ingestUrl`                                                                                      | *string*                                                                                         | :heavy_check_mark:                                                                               | Endpoint the tracking snippet posts events to.                                                   |
| `snippet`                                                                                        | *string*                                                                                         | :heavy_check_mark:                                                                               | Install snippet for the default framework (Next.js).                                             |
| `snippets`                                                                                       | [models.GeoIngestTokenResponseSnippets](../models/geo-ingest-token-response-snippets.md)         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `organization`                                                                                   | [models.GeoIngestTokenResponseOrganization](../models/geo-ingest-token-response-organization.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `token`                                                                                          | *string*                                                                                         | :heavy_check_mark:                                                                               | Tracking token. Shown once per request; rotating invalidates every previously issued token.      |