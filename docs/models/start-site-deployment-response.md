# StartSiteDeploymentResponse

## Example Usage

```typescript
import { StartSiteDeploymentResponse } from "@usenotra/sdk/models";

let value: StartSiteDeploymentResponse = {
  deployment: {
    id: "<id>",
    kind: "preview",
    previewKey: "<value>",
    trigger: "toolchain",
    status: "skipped",
    live: true,
    liveSince: "<value>",
    branch: "<value>",
    commitSha: "<value>",
    commitMessage: "<value>",
    commitAuthor: "<value>",
    pullRequestNumber: null,
    url: "https://mushy-follower.name/",
    fileCount: 281090,
    totalBytes: 218486,
    buildDurationMs: null,
    errorMessage: "<value>",
    skipReason: null,
    diagnostics: [
      {
        severity: "error",
        file: "<value>",
        code: "<value>",
        message: "<value>",
      },
    ],
    createdAt: "1706618949321",
    startedAt: "<value>",
    finishedAt: "<value>",
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

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `deployment`                                                                                               | [models.SiteDeployment](../models/site-deployment.md)                                                      | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `organization`                                                                                             | [models.StartSiteDeploymentResponseOrganization](../models/start-site-deployment-response-organization.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |