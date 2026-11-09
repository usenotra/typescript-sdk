# GetSiteResponse

## Example Usage

```typescript
import { GetSiteResponse } from "@usenotra/sdk/models";

let value: GetSiteResponse = {
  site: {
    id: "<id>",
    projectId: "<id>",
    name: "<value>",
    slug: "<value>",
    status: "active",
    suspendedReason: "<value>",
    repository: {
      id: "<id>",
      owner: "<value>",
      name: "<value>",
    },
    productionBranch: "<value>",
    rootDirectory: "<value>",
    liveUrl: "https://example.com/blog",
    publicOrigin: "<value>",
    aliasOrigin: "<value>",
    mounts: {},
    previewsEnabled: false,
    previewVisibility: "protected",
    smartDeployments: true,
    analyticsEnabled: false,
    liveDeploymentId: null,
    rollbackActive: false,
    liveSince: null,
    createdAt: "1731041206059",
  },
  domains: [
    {
      id: "<id>",
      hostname: "bossy-bonfire.org",
      kind: "proxy",
      status: "pending",
      isPrimary: true,
      records: [],
      lastError: "<value>",
      verifiedAt: "<value>",
    },
  ],
  previews: [],
  organization: {
    id: "<id>",
    slug: "<value>",
    name: "<value>",
    logo: "<value>",
  },
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `site`                                                                            | [models.SiteDetail](../models/site-detail.md)                                     | :heavy_check_mark:                                                                | N/A                                                                               |
| `domains`                                                                         | [models.SiteDomain](../models/site-domain.md)[]                                   | :heavy_check_mark:                                                                | N/A                                                                               |
| `previews`                                                                        | [models.SitePreview](../models/site-preview.md)[]                                 | :heavy_check_mark:                                                                | N/A                                                                               |
| `organization`                                                                    | [models.GetSiteResponseOrganization](../models/get-site-response-organization.md) | :heavy_check_mark:                                                                | N/A                                                                               |