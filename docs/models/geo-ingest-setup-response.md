# GeoIngestSetupResponse

## Example Usage

```typescript
import { GeoIngestSetupResponse } from "@usenotra/sdk/models";

let value: GeoIngestSetupResponse = {
  ingestUrl: "https://vibrant-marksman.com/",
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
    logo: "<value>",
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `ingestUrl`                                                                                      | *string*                                                                                         | :heavy_check_mark:                                                                               | Endpoint the tracking snippet posts events to.                                                   |
| `snippet`                                                                                        | *string*                                                                                         | :heavy_check_mark:                                                                               | Install snippet for the default framework (Next.js).                                             |
| `snippets`                                                                                       | [models.GeoIngestSetupResponseSnippets](../models/geo-ingest-setup-response-snippets.md)         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `organization`                                                                                   | [models.GeoIngestSetupResponseOrganization](../models/geo-ingest-setup-response-organization.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |