# Geo

## Overview

Manage generative engine optimization: projects, tracking settings, prompts, prompt sequences, competitors, scans, visibility reads, content gaps and briefs, agent readiness and AI traffic. Project-scoped endpoints require the GEO plan entitlement in addition to their scope; organization-level ingest endpoints require only the traffic scope.

### Available Operations

* [listProjects](#listprojects) - List GEO projects
* [createProject](#createproject) - Create a GEO project
* [getProject](#getproject) - Get a single GEO project
* [deleteProject](#deleteproject) - Delete a GEO project and all of its GEO data
* [updateProject](#updateproject) - Rename a GEO project or relink its brand identity
* [getGeoSettings](#getgeosettings) - Get a project's GEO settings
* [updateGeoSettings](#updategeosettings) - Replace a project's GEO settings
* [listGeoPrompts](#listgeoprompts) - List tracked GEO prompts
* [createGeoPrompt](#creategeoprompt) - Track a new GEO prompt
* [deleteGeoPrompt](#deletegeoprompt) - Stop tracking a GEO prompt
* [updateGeoPrompt](#updategeoprompt) - Enable or disable a tracked GEO prompt
* [importGeoPrompts](#importgeoprompts) - Bulk import GEO prompts
* [listGeoSequences](#listgeosequences) - List GEO prompt sequences
* [createGeoSequence](#creategeosequence) - Create a GEO prompt sequence
* [deleteGeoSequence](#deletegeosequence) - Delete a GEO prompt sequence
* [updateGeoSequence](#updategeosequence) - Update a GEO prompt sequence
* [runGeoSequence](#rungeosequence) - Run a GEO prompt sequence now
* [listGeoCompetitors](#listgeocompetitors) - List tracked GEO competitors
* [upsertGeoCompetitor](#upsertgeocompetitor) - Create or update a tracked GEO competitor
* [suggestGeoCompetitors](#suggestgeocompetitors) - Suggest GEO competitors for a domain
* [deleteGeoCompetitor](#deletegeocompetitor) - Stop tracking a GEO competitor
* [importGeoCompetitors](#importgeocompetitors) - Bulk import GEO competitors
* [listGeoScans](#listgeoscans) - List GEO scans
* [createGeoScan](#creategeoscan) - Trigger a GEO scan
* [getGeoScan](#getgeoscan) - Get a single GEO scan
* [getGeoVisibilityOverview](#getgeovisibilityoverview) - Get mention rates per engine
* [getGeoVisibilityTimeseries](#getgeovisibilitytimeseries) - Get daily mention counts per engine
* [getGeoVisibilityPromptResults](#getgeovisibilitypromptresults) - Get the latest answer per prompt and engine
* [getGeoVisibilityCompetitorShare](#getgeovisibilitycompetitorshare) - Get share of voice across tracked brands
* [getGeoVisibilityLanguageShare](#getgeovisibilitylanguageshare) - Get mention rates per tracked language
* [getGeoVisibilityCompetitorDetail](#getgeovisibilitycompetitordetail) - Get one competitor's mention history
* [listGeoContentGaps](#listgeocontentgaps) - List content gaps
* [listGeoContentBriefs](#listgeocontentbriefs) - List content briefs
* [planGeoContentBrief](#plangeocontentbrief) - Plan a content brief
* [getGeoContentBrief](#getgeocontentbrief) - Get a single content brief
* [approveGeoContentBrief](#approvegeocontentbrief) - Approve a brief and start the writer
* [getGeoAgentReadiness](#getgeoagentreadiness) - Get the latest agent readiness report
* [startGeoAgentReadinessScan](#startgeoagentreadinessscan) - Start an agent readiness scan
* [getGeoTrafficOverview](#getgeotrafficoverview) - Get AI traffic totals and sources
* [getGeoTrafficLog](#getgeotrafficlog) - Get recent AI traffic events
* [listGeoTrafficJourneys](#listgeotrafficjourneys) - List AI traffic journeys
* [getGeoTrafficJourney](#getgeotrafficjourney) - Get one journey's events
* [listGeoTrafficPages](#listgeotrafficpages) - List the most visited pages
* [getGeoIngestSetup](#getgeoingestsetup) - Get the install snippets
* [issueGeoIngestToken](#issuegeoingesttoken) - Issue the tracking token
* [rotateGeoIngestToken](#rotategeoingesttoken) - Rotate the tracking token

## listProjects

List GEO projects

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listProjects" method="get" path="/v1/projects" -->
```typescript
import { Notra } from "@usenotra/sdk";

const notra = new Notra({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await notra.geo.listProjects();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NotraCore } from "@usenotra/sdk/core.js";
import { geoListProjects } from "@usenotra/sdk/funcs/geo-list-projects.js";

// Use `NotraCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const notra = new NotraCore({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await geoListProjects(notra);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("geoListProjects failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ListGeoProjectsResponse](../../models/list-geo-projects-response.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.ErrorResponse         | 400, 401, 402, 403, 404, 409 | application/json             |
| errors.ErrorResponse         | 500, 503                     | application/json             |
| errors.NotraDefaultError     | 4XX, 5XX                     | \*/\*                        |

## createProject

Create a GEO project

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createProject" method="post" path="/v1/projects" -->
```typescript
import { Notra } from "@usenotra/sdk";

const notra = new Notra({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await notra.geo.createProject({
    name: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NotraCore } from "@usenotra/sdk/core.js";
import { geoCreateProject } from "@usenotra/sdk/funcs/geo-create-project.js";

// Use `NotraCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const notra = new NotraCore({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await geoCreateProject(notra, {
    name: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("geoCreateProject failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.CreateGeoProjectRequest](../../models/create-geo-project-request.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.GeoProjectResponse](../../models/geo-project-response.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.ErrorResponse         | 400, 401, 402, 403, 404, 409 | application/json             |
| errors.ErrorResponse         | 500, 503                     | application/json             |
| errors.NotraDefaultError     | 4XX, 5XX                     | \*/\*                        |

## getProject

Get a single GEO project

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getProject" method="get" path="/v1/projects/{projectId}" -->
```typescript
import { Notra } from "@usenotra/sdk";

const notra = new Notra({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await notra.geo.getProject({
    projectId: "b1f2c3d4-0000-4000-8000-000000000000",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NotraCore } from "@usenotra/sdk/core.js";
import { geoGetProject } from "@usenotra/sdk/funcs/geo-get-project.js";

// Use `NotraCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const notra = new NotraCore({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await geoGetProject(notra, {
    projectId: "b1f2c3d4-0000-4000-8000-000000000000",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("geoGetProject failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetProjectRequest](../../models/operations/get-project-request.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.GeoProjectResponse](../../models/geo-project-response.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.ErrorResponse         | 400, 401, 402, 403, 404, 409 | application/json             |
| errors.ErrorResponse         | 500, 503                     | application/json             |
| errors.NotraDefaultError     | 4XX, 5XX                     | \*/\*                        |

## deleteProject

Cascades to the project's GEO settings, prompts, sequences, competitors, scans, checks and reports, and cancels any pending scheduled scan. Agent feedback is kept but detached. The organization's last project cannot be deleted.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="deleteProject" method="delete" path="/v1/projects/{projectId}" -->
```typescript
import { Notra } from "@usenotra/sdk";

const notra = new Notra({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await notra.geo.deleteProject({
    projectId: "b1f2c3d4-0000-4000-8000-000000000000",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NotraCore } from "@usenotra/sdk/core.js";
import { geoDeleteProject } from "@usenotra/sdk/funcs/geo-delete-project.js";

// Use `NotraCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const notra = new NotraCore({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await geoDeleteProject(notra, {
    projectId: "b1f2c3d4-0000-4000-8000-000000000000",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("geoDeleteProject failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteProjectRequest](../../models/operations/delete-project-request.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.DeleteGeoProjectResponse](../../models/delete-geo-project-response.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.ErrorResponse         | 400, 401, 402, 403, 404, 409 | application/json             |
| errors.ErrorResponse         | 500, 503                     | application/json             |
| errors.NotraDefaultError     | 4XX, 5XX                     | \*/\*                        |

## updateProject

Rename a GEO project or relink its brand identity

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateProject" method="patch" path="/v1/projects/{projectId}" -->
```typescript
import { Notra } from "@usenotra/sdk";

const notra = new Notra({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await notra.geo.updateProject({
    projectId: "b1f2c3d4-0000-4000-8000-000000000000",
    body: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NotraCore } from "@usenotra/sdk/core.js";
import { geoUpdateProject } from "@usenotra/sdk/funcs/geo-update-project.js";

// Use `NotraCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const notra = new NotraCore({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await geoUpdateProject(notra, {
    projectId: "b1f2c3d4-0000-4000-8000-000000000000",
    body: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("geoUpdateProject failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateProjectRequest](../../models/operations/update-project-request.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.GeoProjectResponse](../../models/geo-project-response.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.ErrorResponse         | 400, 401, 402, 403, 404, 409 | application/json             |
| errors.ErrorResponse         | 500, 503                     | application/json             |
| errors.NotraDefaultError     | 4XX, 5XX                     | \*/\*                        |

## getGeoSettings

Get a project's GEO settings

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getGeoSettings" method="get" path="/v1/projects/{projectId}/geo/settings" -->
```typescript
import { Notra } from "@usenotra/sdk";

const notra = new Notra({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await notra.geo.getGeoSettings({
    projectId: "b1f2c3d4-0000-4000-8000-000000000000",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NotraCore } from "@usenotra/sdk/core.js";
import { geoGetGEOSettings } from "@usenotra/sdk/funcs/geo-get-geo-settings.js";

// Use `NotraCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const notra = new NotraCore({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await geoGetGEOSettings(notra, {
    projectId: "b1f2c3d4-0000-4000-8000-000000000000",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("geoGetGEOSettings failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetGeoSettingsRequest](../../models/operations/get-geo-settings-request.md)                                                                                        | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.GeoSettingsResponse](../../models/geo-settings-response.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.ErrorResponse         | 400, 401, 402, 403, 404, 409 | application/json             |
| errors.ErrorResponse         | 500, 503                     | application/json             |
| errors.NotraDefaultError     | 4XX, 5XX                     | \*/\*                        |

## updateGeoSettings

Writes the full settings document and re-arms the recurring scan. Engines must be ids from the model catalog this organization can see (the ones `GET /geo/settings` returns) and languages must be supported languages; an unknown value is rejected with a 400 instead of being replaced by a default. Zero data retention is forced off without the ZDR add-on, and engines that are not visible to this caller keep their stored selection. Competitors are managed through the competitors endpoints and are not part of this payload.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateGeoSettings" method="patch" path="/v1/projects/{projectId}/geo/settings" -->
```typescript
import { Notra } from "@usenotra/sdk";

const notra = new Notra({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await notra.geo.updateGeoSettings({
    projectId: "b1f2c3d4-0000-4000-8000-000000000000",
    body: {
      companyName: "Ratke - Welch",
      aliases: [
        "<value 1>",
      ],
      languages: [
        "<value 1>",
        "<value 2>",
      ],
      engines: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      enforceZdr: true,
      nonZdrApprovedEngines: [
        "<value 1>",
      ],
      enabled: false,
      scanIntervalHours: 563097,
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NotraCore } from "@usenotra/sdk/core.js";
import { geoUpdateGEOSettings } from "@usenotra/sdk/funcs/geo-update-geo-settings.js";

// Use `NotraCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const notra = new NotraCore({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await geoUpdateGEOSettings(notra, {
    projectId: "b1f2c3d4-0000-4000-8000-000000000000",
    body: {
      companyName: "Ratke - Welch",
      aliases: [
        "<value 1>",
      ],
      languages: [
        "<value 1>",
        "<value 2>",
      ],
      engines: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      enforceZdr: true,
      nonZdrApprovedEngines: [
        "<value 1>",
      ],
      enabled: false,
      scanIntervalHours: 563097,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("geoUpdateGEOSettings failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateGeoSettingsRequest](../../models/operations/update-geo-settings-request.md)                                                                                  | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.GeoSettingsResponse](../../models/geo-settings-response.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.ErrorResponse         | 400, 401, 402, 403, 404, 409 | application/json             |
| errors.ErrorResponse         | 500, 503                     | application/json             |
| errors.NotraDefaultError     | 4XX, 5XX                     | \*/\*                        |

## listGeoPrompts

Returns custom prompts alongside the prompts derived automatically from the project's brand context.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listGeoPrompts" method="get" path="/v1/projects/{projectId}/geo/prompts" -->
```typescript
import { Notra } from "@usenotra/sdk";

const notra = new Notra({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await notra.geo.listGeoPrompts({
    projectId: "b1f2c3d4-0000-4000-8000-000000000000",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NotraCore } from "@usenotra/sdk/core.js";
import { geoListGEOPrompts } from "@usenotra/sdk/funcs/geo-list-geo-prompts.js";

// Use `NotraCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const notra = new NotraCore({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await geoListGEOPrompts(notra, {
    projectId: "b1f2c3d4-0000-4000-8000-000000000000",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("geoListGEOPrompts failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListGeoPromptsRequest](../../models/operations/list-geo-prompts-request.md)                                                                                        | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ListGeoPromptsResponse](../../models/list-geo-prompts-response.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.ErrorResponse         | 400, 401, 402, 403, 404, 409 | application/json             |
| errors.ErrorResponse         | 500, 503                     | application/json             |
| errors.NotraDefaultError     | 4XX, 5XX                     | \*/\*                        |

## createGeoPrompt

Track a new GEO prompt

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createGeoPrompt" method="post" path="/v1/projects/{projectId}/geo/prompts" -->
```typescript
import { Notra } from "@usenotra/sdk";

const notra = new Notra({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await notra.geo.createGeoPrompt({
    projectId: "b1f2c3d4-0000-4000-8000-000000000000",
    body: {
      prompt: "<value>",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NotraCore } from "@usenotra/sdk/core.js";
import { geoCreateGEOPrompt } from "@usenotra/sdk/funcs/geo-create-geo-prompt.js";

// Use `NotraCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const notra = new NotraCore({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await geoCreateGEOPrompt(notra, {
    projectId: "b1f2c3d4-0000-4000-8000-000000000000",
    body: {
      prompt: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("geoCreateGEOPrompt failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateGeoPromptRequest](../../models/operations/create-geo-prompt-request.md)                                                                                      | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.GeoPromptResponse](../../models/geo-prompt-response.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.ErrorResponse         | 400, 401, 402, 403, 404, 409 | application/json             |
| errors.ErrorResponse         | 500, 503                     | application/json             |
| errors.NotraDefaultError     | 4XX, 5XX                     | \*/\*                        |

## deleteGeoPrompt

Stop tracking a GEO prompt

### Example Usage

<!-- UsageSnippet language="typescript" operationID="deleteGeoPrompt" method="delete" path="/v1/projects/{projectId}/geo/prompts/{promptId}" -->
```typescript
import { Notra } from "@usenotra/sdk";

const notra = new Notra({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await notra.geo.deleteGeoPrompt({
    projectId: "b1f2c3d4-0000-4000-8000-000000000000",
    promptId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NotraCore } from "@usenotra/sdk/core.js";
import { geoDeleteGEOPrompt } from "@usenotra/sdk/funcs/geo-delete-geo-prompt.js";

// Use `NotraCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const notra = new NotraCore({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await geoDeleteGEOPrompt(notra, {
    projectId: "b1f2c3d4-0000-4000-8000-000000000000",
    promptId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("geoDeleteGEOPrompt failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteGeoPromptRequest](../../models/operations/delete-geo-prompt-request.md)                                                                                      | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.DeleteGeoPromptResponse](../../models/delete-geo-prompt-response.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.ErrorResponse         | 400, 401, 402, 403, 404, 409 | application/json             |
| errors.ErrorResponse         | 500, 503                     | application/json             |
| errors.NotraDefaultError     | 4XX, 5XX                     | \*/\*                        |

## updateGeoPrompt

Enable or disable a tracked GEO prompt

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateGeoPrompt" method="patch" path="/v1/projects/{projectId}/geo/prompts/{promptId}" -->
```typescript
import { Notra } from "@usenotra/sdk";

const notra = new Notra({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await notra.geo.updateGeoPrompt({
    projectId: "b1f2c3d4-0000-4000-8000-000000000000",
    promptId: "<id>",
    body: {
      enabled: true,
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NotraCore } from "@usenotra/sdk/core.js";
import { geoUpdateGEOPrompt } from "@usenotra/sdk/funcs/geo-update-geo-prompt.js";

// Use `NotraCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const notra = new NotraCore({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await geoUpdateGEOPrompt(notra, {
    projectId: "b1f2c3d4-0000-4000-8000-000000000000",
    promptId: "<id>",
    body: {
      enabled: true,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("geoUpdateGEOPrompt failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateGeoPromptRequest](../../models/operations/update-geo-prompt-request.md)                                                                                      | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.GeoPromptResponse](../../models/geo-prompt-response.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.ErrorResponse         | 400, 401, 402, 403, 404, 409 | application/json             |
| errors.ErrorResponse         | 500, 503                     | application/json             |
| errors.NotraDefaultError     | 4XX, 5XX                     | \*/\*                        |

## importGeoPrompts

Accepts either structured `rows` or raw `csv` text. Prompts that already exist are skipped, not duplicated.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="importGeoPrompts" method="post" path="/v1/projects/{projectId}/geo/prompts/import" -->
```typescript
import { Notra } from "@usenotra/sdk";

const notra = new Notra({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await notra.geo.importGeoPrompts({
    projectId: "b1f2c3d4-0000-4000-8000-000000000000",
    body: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NotraCore } from "@usenotra/sdk/core.js";
import { geoImportGEOPrompts } from "@usenotra/sdk/funcs/geo-import-geo-prompts.js";

// Use `NotraCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const notra = new NotraCore({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await geoImportGEOPrompts(notra, {
    projectId: "b1f2c3d4-0000-4000-8000-000000000000",
    body: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("geoImportGEOPrompts failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ImportGeoPromptsRequest](../../models/operations/import-geo-prompts-request.md)                                                                                    | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ImportGeoPromptsResponse](../../models/operations/import-geo-prompts-response.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.ErrorResponse          | 400, 401, 402, 403, 404, 409  | application/json              |
| errors.RateLimitErrorResponse | 429                           | application/json              |
| errors.ErrorResponse          | 500, 503                      | application/json              |
| errors.NotraDefaultError      | 4XX, 5XX                      | \*/\*                         |

## listGeoSequences

List GEO prompt sequences

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listGeoSequences" method="get" path="/v1/projects/{projectId}/geo/sequences" -->
```typescript
import { Notra } from "@usenotra/sdk";

const notra = new Notra({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await notra.geo.listGeoSequences({
    projectId: "b1f2c3d4-0000-4000-8000-000000000000",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NotraCore } from "@usenotra/sdk/core.js";
import { geoListGEOSequences } from "@usenotra/sdk/funcs/geo-list-geo-sequences.js";

// Use `NotraCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const notra = new NotraCore({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await geoListGEOSequences(notra, {
    projectId: "b1f2c3d4-0000-4000-8000-000000000000",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("geoListGEOSequences failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListGeoSequencesRequest](../../models/operations/list-geo-sequences-request.md)                                                                                    | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ListGeoSequencesResponse](../../models/list-geo-sequences-response.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.ErrorResponse         | 400, 401, 402, 403, 404, 409 | application/json             |
| errors.ErrorResponse         | 500, 503                     | application/json             |
| errors.NotraDefaultError     | 4XX, 5XX                     | \*/\*                        |

## createGeoSequence

Create a GEO prompt sequence

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createGeoSequence" method="post" path="/v1/projects/{projectId}/geo/sequences" -->
```typescript
import { Notra } from "@usenotra/sdk";

const notra = new Notra({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await notra.geo.createGeoSequence({
    projectId: "b1f2c3d4-0000-4000-8000-000000000000",
    body: {
      name: "<value>",
      steps: [],
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NotraCore } from "@usenotra/sdk/core.js";
import { geoCreateGEOSequence } from "@usenotra/sdk/funcs/geo-create-geo-sequence.js";

// Use `NotraCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const notra = new NotraCore({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await geoCreateGEOSequence(notra, {
    projectId: "b1f2c3d4-0000-4000-8000-000000000000",
    body: {
      name: "<value>",
      steps: [],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("geoCreateGEOSequence failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateGeoSequenceRequest](../../models/operations/create-geo-sequence-request.md)                                                                                  | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.GeoSequenceResponse](../../models/geo-sequence-response.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.ErrorResponse         | 400, 401, 402, 403, 404, 409 | application/json             |
| errors.ErrorResponse         | 500, 503                     | application/json             |
| errors.NotraDefaultError     | 4XX, 5XX                     | \*/\*                        |

## deleteGeoSequence

Delete a GEO prompt sequence

### Example Usage

<!-- UsageSnippet language="typescript" operationID="deleteGeoSequence" method="delete" path="/v1/projects/{projectId}/geo/sequences/{sequenceId}" -->
```typescript
import { Notra } from "@usenotra/sdk";

const notra = new Notra({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await notra.geo.deleteGeoSequence({
    projectId: "b1f2c3d4-0000-4000-8000-000000000000",
    sequenceId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NotraCore } from "@usenotra/sdk/core.js";
import { geoDeleteGEOSequence } from "@usenotra/sdk/funcs/geo-delete-geo-sequence.js";

// Use `NotraCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const notra = new NotraCore({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await geoDeleteGEOSequence(notra, {
    projectId: "b1f2c3d4-0000-4000-8000-000000000000",
    sequenceId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("geoDeleteGEOSequence failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteGeoSequenceRequest](../../models/operations/delete-geo-sequence-request.md)                                                                                  | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.DeleteGeoSequenceResponse](../../models/delete-geo-sequence-response.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.ErrorResponse         | 400, 401, 402, 403, 404, 409 | application/json             |
| errors.ErrorResponse         | 500, 503                     | application/json             |
| errors.NotraDefaultError     | 4XX, 5XX                     | \*/\*                        |

## updateGeoSequence

Update a GEO prompt sequence

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateGeoSequence" method="patch" path="/v1/projects/{projectId}/geo/sequences/{sequenceId}" -->
```typescript
import { Notra } from "@usenotra/sdk";

const notra = new Notra({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await notra.geo.updateGeoSequence({
    projectId: "b1f2c3d4-0000-4000-8000-000000000000",
    sequenceId: "<id>",
    body: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NotraCore } from "@usenotra/sdk/core.js";
import { geoUpdateGEOSequence } from "@usenotra/sdk/funcs/geo-update-geo-sequence.js";

// Use `NotraCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const notra = new NotraCore({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await geoUpdateGEOSequence(notra, {
    projectId: "b1f2c3d4-0000-4000-8000-000000000000",
    sequenceId: "<id>",
    body: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("geoUpdateGEOSequence failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateGeoSequenceRequest](../../models/operations/update-geo-sequence-request.md)                                                                                  | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.GeoSequenceResponse](../../models/geo-sequence-response.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.ErrorResponse         | 400, 401, 402, 403, 404, 409 | application/json             |
| errors.ErrorResponse         | 500, 503                     | application/json             |
| errors.NotraDefaultError     | 4XX, 5XX                     | \*/\*                        |

## runGeoSequence

Runs the sequence synchronously and answers with its result. The call is not queued: the request stays open for the whole run, which plays every turn against every available answer engine and can take several minutes. Use a client timeout of at least five minutes; after four minutes the API stops waiting and answers 409 while the run finishes on its own — do not retry, read the result from the project's GEO checks. The work happens inside the Notra dashboard, which owns the model credentials and billing gates; the public API never calls an answer engine itself. Results also land in the project's GEO checks.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="runGeoSequence" method="post" path="/v1/projects/{projectId}/geo/sequences/{sequenceId}/run" -->
```typescript
import { Notra } from "@usenotra/sdk";

const notra = new Notra({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await notra.geo.runGeoSequence({
    projectId: "b1f2c3d4-0000-4000-8000-000000000000",
    sequenceId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NotraCore } from "@usenotra/sdk/core.js";
import { geoRunGEOSequence } from "@usenotra/sdk/funcs/geo-run-geo-sequence.js";

// Use `NotraCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const notra = new NotraCore({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await geoRunGEOSequence(notra, {
    projectId: "b1f2c3d4-0000-4000-8000-000000000000",
    sequenceId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("geoRunGEOSequence failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RunGeoSequenceRequest](../../models/operations/run-geo-sequence-request.md)                                                                                        | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RunGeoSequenceResponse](../../models/operations/run-geo-sequence-response.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.ErrorResponse          | 400, 401, 402, 403, 404, 409  | application/json              |
| errors.RateLimitErrorResponse | 429                           | application/json              |
| errors.ErrorResponse          | 500, 503                      | application/json              |
| errors.NotraDefaultError      | 4XX, 5XX                      | \*/\*                         |

## listGeoCompetitors

List tracked GEO competitors

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listGeoCompetitors" method="get" path="/v1/projects/{projectId}/geo/competitors" -->
```typescript
import { Notra } from "@usenotra/sdk";

const notra = new Notra({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await notra.geo.listGeoCompetitors({
    projectId: "b1f2c3d4-0000-4000-8000-000000000000",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NotraCore } from "@usenotra/sdk/core.js";
import { geoListGEOCompetitors } from "@usenotra/sdk/funcs/geo-list-geo-competitors.js";

// Use `NotraCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const notra = new NotraCore({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await geoListGEOCompetitors(notra, {
    projectId: "b1f2c3d4-0000-4000-8000-000000000000",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("geoListGEOCompetitors failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListGeoCompetitorsRequest](../../models/operations/list-geo-competitors-request.md)                                                                                | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ListGeoCompetitorsResponse](../../models/list-geo-competitors-response.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.ErrorResponse         | 400, 401, 402, 403, 404, 409 | application/json             |
| errors.ErrorResponse         | 500, 503                     | application/json             |
| errors.NotraDefaultError     | 4XX, 5XX                     | \*/\*                        |

## upsertGeoCompetitor

Matches on name, case-insensitively. Send `previousName` to rename an existing competitor. Returns the full competitor list.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="upsertGeoCompetitor" method="put" path="/v1/projects/{projectId}/geo/competitors" -->
```typescript
import { Notra } from "@usenotra/sdk";

const notra = new Notra({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await notra.geo.upsertGeoCompetitor({
    projectId: "b1f2c3d4-0000-4000-8000-000000000000",
    body: {
      name: "<value>",
      domain: "circular-pantyhose.com",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NotraCore } from "@usenotra/sdk/core.js";
import { geoUpsertGEOCompetitor } from "@usenotra/sdk/funcs/geo-upsert-geo-competitor.js";

// Use `NotraCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const notra = new NotraCore({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await geoUpsertGEOCompetitor(notra, {
    projectId: "b1f2c3d4-0000-4000-8000-000000000000",
    body: {
      name: "<value>",
      domain: "circular-pantyhose.com",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("geoUpsertGEOCompetitor failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpsertGeoCompetitorRequest](../../models/operations/upsert-geo-competitor-request.md)                                                                              | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ListGeoCompetitorsResponse](../../models/list-geo-competitors-response.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.ErrorResponse         | 400, 401, 402, 403, 404, 409 | application/json             |
| errors.ErrorResponse         | 500, 503                     | application/json             |
| errors.NotraDefaultError     | 4XX, 5XX                     | \*/\*                        |

## suggestGeoCompetitors

Discovers likely competitors for a website. Results are cached per organization and domain.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="suggestGeoCompetitors" method="get" path="/v1/projects/{projectId}/geo/competitors/suggestions" -->
```typescript
import { Notra } from "@usenotra/sdk";

const notra = new Notra({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await notra.geo.suggestGeoCompetitors({
    projectId: "b1f2c3d4-0000-4000-8000-000000000000",
    domain: "example.com",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NotraCore } from "@usenotra/sdk/core.js";
import { geoSuggestGEOCompetitors } from "@usenotra/sdk/funcs/geo-suggest-geo-competitors.js";

// Use `NotraCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const notra = new NotraCore({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await geoSuggestGEOCompetitors(notra, {
    projectId: "b1f2c3d4-0000-4000-8000-000000000000",
    domain: "example.com",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("geoSuggestGEOCompetitors failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.SuggestGeoCompetitorsRequest](../../models/operations/suggest-geo-competitors-request.md)                                                                          | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.SuggestGeoCompetitorsResponse](../../models/operations/suggest-geo-competitors-response.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.ErrorResponse          | 400, 401, 402, 403, 404, 409  | application/json              |
| errors.RateLimitErrorResponse | 429                           | application/json              |
| errors.ErrorResponse          | 500, 503                      | application/json              |
| errors.NotraDefaultError      | 4XX, 5XX                      | \*/\*                         |

## deleteGeoCompetitor

Stop tracking a GEO competitor

### Example Usage

<!-- UsageSnippet language="typescript" operationID="deleteGeoCompetitor" method="delete" path="/v1/projects/{projectId}/geo/competitors/{name}" -->
```typescript
import { Notra } from "@usenotra/sdk";

const notra = new Notra({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await notra.geo.deleteGeoCompetitor({
    projectId: "b1f2c3d4-0000-4000-8000-000000000000",
    name: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NotraCore } from "@usenotra/sdk/core.js";
import { geoDeleteGEOCompetitor } from "@usenotra/sdk/funcs/geo-delete-geo-competitor.js";

// Use `NotraCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const notra = new NotraCore({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await geoDeleteGEOCompetitor(notra, {
    projectId: "b1f2c3d4-0000-4000-8000-000000000000",
    name: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("geoDeleteGEOCompetitor failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteGeoCompetitorRequest](../../models/operations/delete-geo-competitor-request.md)                                                                              | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ListGeoCompetitorsResponse](../../models/list-geo-competitors-response.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.ErrorResponse         | 400, 401, 402, 403, 404, 409 | application/json             |
| errors.ErrorResponse         | 500, 503                     | application/json             |
| errors.NotraDefaultError     | 4XX, 5XX                     | \*/\*                        |

## importGeoCompetitors

Accepts either structured `rows` or raw `csv` text. Existing competitors are updated in place rather than duplicated.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="importGeoCompetitors" method="post" path="/v1/projects/{projectId}/geo/competitors/import" -->
```typescript
import { Notra } from "@usenotra/sdk";

const notra = new Notra({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await notra.geo.importGeoCompetitors({
    projectId: "b1f2c3d4-0000-4000-8000-000000000000",
    body: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NotraCore } from "@usenotra/sdk/core.js";
import { geoImportGEOCompetitors } from "@usenotra/sdk/funcs/geo-import-geo-competitors.js";

// Use `NotraCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const notra = new NotraCore({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await geoImportGEOCompetitors(notra, {
    projectId: "b1f2c3d4-0000-4000-8000-000000000000",
    body: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("geoImportGEOCompetitors failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ImportGeoCompetitorsRequest](../../models/operations/import-geo-competitors-request.md)                                                                            | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ImportGeoCompetitorsResponse](../../models/operations/import-geo-competitors-response.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.ErrorResponse          | 400, 401, 402, 403, 404, 409  | application/json              |
| errors.RateLimitErrorResponse | 429                           | application/json              |
| errors.ErrorResponse          | 500, 503                      | application/json              |
| errors.NotraDefaultError      | 4XX, 5XX                      | \*/\*                         |

## listGeoScans

List GEO scans

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listGeoScans" method="get" path="/v1/projects/{projectId}/geo/scans" -->
```typescript
import { Notra } from "@usenotra/sdk";

const notra = new Notra({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await notra.geo.listGeoScans({
    projectId: "b1f2c3d4-0000-4000-8000-000000000000",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NotraCore } from "@usenotra/sdk/core.js";
import { geoListGEOScans } from "@usenotra/sdk/funcs/geo-list-geo-scans.js";

// Use `NotraCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const notra = new NotraCore({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await geoListGEOScans(notra, {
    projectId: "b1f2c3d4-0000-4000-8000-000000000000",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("geoListGEOScans failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListGeoScansRequest](../../models/operations/list-geo-scans-request.md)                                                                                            | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ListGeoScansResponse](../../models/list-geo-scans-response.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.ErrorResponse         | 400, 401, 402, 403, 404, 409 | application/json             |
| errors.ErrorResponse         | 500, 503                     | application/json             |
| errors.NotraDefaultError     | 4XX, 5XX                     | \*/\*                        |

## createGeoScan

Queues a scan with the Notra dashboard, which owns the model credentials and billing gates. The public API never calls an answer engine itself. The scan record is created before the hand-off, so `scanId` is immediately readable via `GET /v1/projects/{projectId}/geo/scans/{scanId}` — poll `statusUrl` (also returned as the `Location` header) until `status` leaves `running`. Returns 409 while a scan for this project is still in flight.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createGeoScan" method="post" path="/v1/projects/{projectId}/geo/scans" -->
```typescript
import { Notra } from "@usenotra/sdk";

const notra = new Notra({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await notra.geo.createGeoScan({
    projectId: "b1f2c3d4-0000-4000-8000-000000000000",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NotraCore } from "@usenotra/sdk/core.js";
import { geoCreateGEOScan } from "@usenotra/sdk/funcs/geo-create-geo-scan.js";

// Use `NotraCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const notra = new NotraCore({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await geoCreateGEOScan(notra, {
    projectId: "b1f2c3d4-0000-4000-8000-000000000000",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("geoCreateGEOScan failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateGeoScanRequest](../../models/operations/create-geo-scan-request.md)                                                                                          | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateGeoScanResponse](../../models/operations/create-geo-scan-response.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.ErrorResponse          | 400, 401, 402, 403, 404, 409  | application/json              |
| errors.RateLimitErrorResponse | 429                           | application/json              |
| errors.ErrorResponse          | 500, 503                      | application/json              |
| errors.NotraDefaultError      | 4XX, 5XX                      | \*/\*                         |

## getGeoScan

Get a single GEO scan

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getGeoScan" method="get" path="/v1/projects/{projectId}/geo/scans/{scanId}" -->
```typescript
import { Notra } from "@usenotra/sdk";

const notra = new Notra({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await notra.geo.getGeoScan({
    projectId: "b1f2c3d4-0000-4000-8000-000000000000",
    scanId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NotraCore } from "@usenotra/sdk/core.js";
import { geoGetGEOScan } from "@usenotra/sdk/funcs/geo-get-geo-scan.js";

// Use `NotraCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const notra = new NotraCore({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await geoGetGEOScan(notra, {
    projectId: "b1f2c3d4-0000-4000-8000-000000000000",
    scanId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("geoGetGEOScan failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetGeoScanRequest](../../models/operations/get-geo-scan-request.md)                                                                                                | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.GeoScanResponse](../../models/geo-scan-response.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.ErrorResponse         | 400, 401, 402, 403, 404, 409 | application/json             |
| errors.ErrorResponse         | 500, 503                     | application/json             |
| errors.NotraDefaultError     | 4XX, 5XX                     | \*/\*                        |

## getGeoVisibilityOverview

Checks, mentions and average position for every answer engine the project tracks. Pass `days` for a rolling window, or `from`/`to` for an explicit one.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getGeoVisibilityOverview" method="get" path="/v1/projects/{projectId}/geo/visibility/overview" -->
```typescript
import { Notra } from "@usenotra/sdk";

const notra = new Notra({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await notra.geo.getGeoVisibilityOverview({
    projectId: "b1f2c3d4-0000-4000-8000-000000000000",
    from: "2026-01-31",
    to: "2026-01-31",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NotraCore } from "@usenotra/sdk/core.js";
import { geoGetGEOVisibilityOverview } from "@usenotra/sdk/funcs/geo-get-geo-visibility-overview.js";

// Use `NotraCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const notra = new NotraCore({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await geoGetGEOVisibilityOverview(notra, {
    projectId: "b1f2c3d4-0000-4000-8000-000000000000",
    from: "2026-01-31",
    to: "2026-01-31",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("geoGetGEOVisibilityOverview failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetGeoVisibilityOverviewRequest](../../models/operations/get-geo-visibility-overview-request.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.GeoVisibilityOverviewResponse](../../models/geo-visibility-overview-response.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.ErrorResponse         | 400, 401, 402, 403, 404, 409 | application/json             |
| errors.ErrorResponse         | 500, 503                     | application/json             |
| errors.NotraDefaultError     | 4XX, 5XX                     | \*/\*                        |

## getGeoVisibilityTimeseries

One point per day and engine. Pass `days` for a rolling window, or `from`/`to` for an explicit one.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getGeoVisibilityTimeseries" method="get" path="/v1/projects/{projectId}/geo/visibility/timeseries" -->
```typescript
import { Notra } from "@usenotra/sdk";

const notra = new Notra({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await notra.geo.getGeoVisibilityTimeseries({
    projectId: "b1f2c3d4-0000-4000-8000-000000000000",
    from: "2026-01-31",
    to: "2026-01-31",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NotraCore } from "@usenotra/sdk/core.js";
import { geoGetGEOVisibilityTimeseries } from "@usenotra/sdk/funcs/geo-get-geo-visibility-timeseries.js";

// Use `NotraCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const notra = new NotraCore({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await geoGetGEOVisibilityTimeseries(notra, {
    projectId: "b1f2c3d4-0000-4000-8000-000000000000",
    from: "2026-01-31",
    to: "2026-01-31",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("geoGetGEOVisibilityTimeseries failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetGeoVisibilityTimeseriesRequest](../../models/operations/get-geo-visibility-timeseries-request.md)                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.GeoVisibilityTimeseriesResponse](../../models/geo-visibility-timeseries-response.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.ErrorResponse         | 400, 401, 402, 403, 404, 409 | application/json             |
| errors.ErrorResponse         | 500, 503                     | application/json             |
| errors.NotraDefaultError     | 4XX, 5XX                     | \*/\*                        |

## getGeoVisibilityPromptResults

The stored answer text, mention position, sentiment and grounding sources for each tracked prompt. Pass `days` for a rolling window, or `from`/`to` for an explicit one.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getGeoVisibilityPromptResults" method="get" path="/v1/projects/{projectId}/geo/visibility/prompt-results" -->
```typescript
import { Notra } from "@usenotra/sdk";

const notra = new Notra({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await notra.geo.getGeoVisibilityPromptResults({
    projectId: "b1f2c3d4-0000-4000-8000-000000000000",
    from: "2026-01-31",
    to: "2026-01-31",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NotraCore } from "@usenotra/sdk/core.js";
import { geoGetGEOVisibilityPromptResults } from "@usenotra/sdk/funcs/geo-get-geo-visibility-prompt-results.js";

// Use `NotraCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const notra = new NotraCore({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await geoGetGEOVisibilityPromptResults(notra, {
    projectId: "b1f2c3d4-0000-4000-8000-000000000000",
    from: "2026-01-31",
    to: "2026-01-31",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("geoGetGEOVisibilityPromptResults failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetGeoVisibilityPromptResultsRequest](../../models/operations/get-geo-visibility-prompt-results-request.md)                                                        | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.GeoVisibilityPromptResultsResponse](../../models/geo-visibility-prompt-results-response.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.ErrorResponse         | 400, 401, 402, 403, 404, 409 | application/json             |
| errors.ErrorResponse         | 500, 503                     | application/json             |
| errors.NotraDefaultError     | 4XX, 5XX                     | \*/\*                        |

## getGeoVisibilityCompetitorShare

Mention counts per brand with a per-brand trend, plus the daily timeseries behind it. Pass `days` for a rolling window, or `from`/`to` for an explicit one.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getGeoVisibilityCompetitorShare" method="get" path="/v1/projects/{projectId}/geo/visibility/competitor-share" -->
```typescript
import { Notra } from "@usenotra/sdk";

const notra = new Notra({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await notra.geo.getGeoVisibilityCompetitorShare({
    projectId: "b1f2c3d4-0000-4000-8000-000000000000",
    from: "2026-01-31",
    to: "2026-01-31",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NotraCore } from "@usenotra/sdk/core.js";
import { geoGetGEOVisibilityCompetitorShare } from "@usenotra/sdk/funcs/geo-get-geo-visibility-competitor-share.js";

// Use `NotraCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const notra = new NotraCore({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await geoGetGEOVisibilityCompetitorShare(notra, {
    projectId: "b1f2c3d4-0000-4000-8000-000000000000",
    from: "2026-01-31",
    to: "2026-01-31",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("geoGetGEOVisibilityCompetitorShare failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetGeoVisibilityCompetitorShareRequest](../../models/operations/get-geo-visibility-competitor-share-request.md)                                                    | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.GeoVisibilityCompetitorShareResponse](../../models/geo-visibility-competitor-share-response.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.ErrorResponse         | 400, 401, 402, 403, 404, 409 | application/json             |
| errors.ErrorResponse         | 500, 503                     | application/json             |
| errors.NotraDefaultError     | 4XX, 5XX                     | \*/\*                        |

## getGeoVisibilityLanguageShare

Checks, mentions and average position broken down by language. Pass `days` for a rolling window, or `from`/`to` for an explicit one.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getGeoVisibilityLanguageShare" method="get" path="/v1/projects/{projectId}/geo/visibility/language-share" -->
```typescript
import { Notra } from "@usenotra/sdk";

const notra = new Notra({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await notra.geo.getGeoVisibilityLanguageShare({
    projectId: "b1f2c3d4-0000-4000-8000-000000000000",
    from: "2026-01-31",
    to: "2026-01-31",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NotraCore } from "@usenotra/sdk/core.js";
import { geoGetGEOVisibilityLanguageShare } from "@usenotra/sdk/funcs/geo-get-geo-visibility-language-share.js";

// Use `NotraCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const notra = new NotraCore({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await geoGetGEOVisibilityLanguageShare(notra, {
    projectId: "b1f2c3d4-0000-4000-8000-000000000000",
    from: "2026-01-31",
    to: "2026-01-31",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("geoGetGEOVisibilityLanguageShare failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetGeoVisibilityLanguageShareRequest](../../models/operations/get-geo-visibility-language-share-request.md)                                                        | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.GeoVisibilityLanguageShareResponse](../../models/geo-visibility-language-share-response.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.ErrorResponse         | 400, 401, 402, 403, 404, 409 | application/json             |
| errors.ErrorResponse         | 500, 503                     | application/json             |
| errors.NotraDefaultError     | 4XX, 5XX                     | \*/\*                        |

## getGeoVisibilityCompetitorDetail

Daily mentions and the prompts that produced them for a single brand. Without a window this falls back to the competitor-detail default rather than the project default, matching the dashboard.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getGeoVisibilityCompetitorDetail" method="get" path="/v1/projects/{projectId}/geo/visibility/competitors/{brand}" -->
```typescript
import { Notra } from "@usenotra/sdk";

const notra = new Notra({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await notra.geo.getGeoVisibilityCompetitorDetail({
    projectId: "b1f2c3d4-0000-4000-8000-000000000000",
    brand: "<value>",
    from: "2026-01-31",
    to: "2026-01-31",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NotraCore } from "@usenotra/sdk/core.js";
import { geoGetGEOVisibilityCompetitorDetail } from "@usenotra/sdk/funcs/geo-get-geo-visibility-competitor-detail.js";

// Use `NotraCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const notra = new NotraCore({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await geoGetGEOVisibilityCompetitorDetail(notra, {
    projectId: "b1f2c3d4-0000-4000-8000-000000000000",
    brand: "<value>",
    from: "2026-01-31",
    to: "2026-01-31",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("geoGetGEOVisibilityCompetitorDetail failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetGeoVisibilityCompetitorDetailRequest](../../models/operations/get-geo-visibility-competitor-detail-request.md)                                                  | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.GeoVisibilityCompetitorDetailResponse](../../models/geo-visibility-competitor-detail-response.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.ErrorResponse         | 400, 401, 402, 403, 404, 409 | application/json             |
| errors.ErrorResponse         | 500, 503                     | application/json             |
| errors.NotraDefaultError     | 4XX, 5XX                     | \*/\*                        |

## listGeoContentGaps

Prompts where competitors are mentioned and this brand is not, plus Search Console queries with no tracked prompt. Each row carries the brief already written for it, when there is one.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listGeoContentGaps" method="get" path="/v1/projects/{projectId}/geo/gaps" -->
```typescript
import { Notra } from "@usenotra/sdk";

const notra = new Notra({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await notra.geo.listGeoContentGaps({
    projectId: "b1f2c3d4-0000-4000-8000-000000000000",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NotraCore } from "@usenotra/sdk/core.js";
import { geoListGEOContentGaps } from "@usenotra/sdk/funcs/geo-list-geo-content-gaps.js";

// Use `NotraCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const notra = new NotraCore({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await geoListGEOContentGaps(notra, {
    projectId: "b1f2c3d4-0000-4000-8000-000000000000",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("geoListGEOContentGaps failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListGeoContentGapsRequest](../../models/operations/list-geo-content-gaps-request.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.GeoContentGapsResponse](../../models/geo-content-gaps-response.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.ErrorResponse         | 400, 401, 402, 403, 404, 409 | application/json             |
| errors.ErrorResponse         | 500, 503                     | application/json             |
| errors.NotraDefaultError     | 4XX, 5XX                     | \*/\*                        |

## listGeoContentBriefs

List content briefs

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listGeoContentBriefs" method="get" path="/v1/projects/{projectId}/geo/briefs" -->
```typescript
import { Notra } from "@usenotra/sdk";

const notra = new Notra({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await notra.geo.listGeoContentBriefs({
    projectId: "b1f2c3d4-0000-4000-8000-000000000000",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NotraCore } from "@usenotra/sdk/core.js";
import { geoListGEOContentBriefs } from "@usenotra/sdk/funcs/geo-list-geo-content-briefs.js";

// Use `NotraCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const notra = new NotraCore({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await geoListGEOContentBriefs(notra, {
    projectId: "b1f2c3d4-0000-4000-8000-000000000000",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("geoListGEOContentBriefs failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListGeoContentBriefsRequest](../../models/operations/list-geo-content-briefs-request.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ListGeoContentBriefsResponse](../../models/list-geo-content-briefs-response.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.ErrorResponse         | 400, 401, 402, 403, 404, 409 | application/json             |
| errors.ErrorResponse         | 500, 503                     | application/json             |
| errors.NotraDefaultError     | 4XX, 5XX                     | \*/\*                        |

## planGeoContentBrief

Researches the topic and writes a brief, then saves it as a draft article. This books AI credits and is billed. Planning happens inside Notra, which owns the model credentials. Set `autoApprove` to start the writer in the same call. When `sourceKind` and `sourceId` point at a gap that already has an open brief, that brief is returned instead of a new one being planned. If planning exceeds four minutes, the API returns 409 while work may still finish in Notra. Do not retry; list the project's GEO briefs to find the result.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="planGeoContentBrief" method="post" path="/v1/projects/{projectId}/geo/briefs" -->
```typescript
import { Notra } from "@usenotra/sdk";

const notra = new Notra({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await notra.geo.planGeoContentBrief({
    projectId: "b1f2c3d4-0000-4000-8000-000000000000",
    body: {
      topic: "<value>",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NotraCore } from "@usenotra/sdk/core.js";
import { geoPlanGEOContentBrief } from "@usenotra/sdk/funcs/geo-plan-geo-content-brief.js";

// Use `NotraCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const notra = new NotraCore({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await geoPlanGEOContentBrief(notra, {
    projectId: "b1f2c3d4-0000-4000-8000-000000000000",
    body: {
      topic: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("geoPlanGEOContentBrief failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PlanGeoContentBriefRequest](../../models/operations/plan-geo-content-brief-request.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PlanGeoContentBriefResponse](../../models/operations/plan-geo-content-brief-response.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.ErrorResponse          | 400, 401, 402, 403, 404, 409  | application/json              |
| errors.RateLimitErrorResponse | 429                           | application/json              |
| errors.ErrorResponse          | 500, 503                      | application/json              |
| errors.NotraDefaultError      | 4XX, 5XX                      | \*/\*                         |

## getGeoContentBrief

Get a single content brief

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getGeoContentBrief" method="get" path="/v1/projects/{projectId}/geo/briefs/{briefId}" -->
```typescript
import { Notra } from "@usenotra/sdk";

const notra = new Notra({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await notra.geo.getGeoContentBrief({
    projectId: "b1f2c3d4-0000-4000-8000-000000000000",
    briefId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NotraCore } from "@usenotra/sdk/core.js";
import { geoGetGEOContentBrief } from "@usenotra/sdk/funcs/geo-get-geo-content-brief.js";

// Use `NotraCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const notra = new NotraCore({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await geoGetGEOContentBrief(notra, {
    projectId: "b1f2c3d4-0000-4000-8000-000000000000",
    briefId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("geoGetGEOContentBrief failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetGeoContentBriefRequest](../../models/operations/get-geo-content-brief-request.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.GeoContentBriefResponse](../../models/geo-content-brief-response.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.ErrorResponse         | 400, 401, 402, 403, 404, 409 | application/json             |
| errors.ErrorResponse         | 500, 503                     | application/json             |
| errors.NotraDefaultError     | 4XX, 5XX                     | \*/\*                        |

## approveGeoContentBrief

Claims the brief and queues the writer with the Notra dashboard. Only briefs in `draft` or `failed` can be approved; anything else returns 409.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="approveGeoContentBrief" method="post" path="/v1/projects/{projectId}/geo/briefs/{briefId}/approve" -->
```typescript
import { Notra } from "@usenotra/sdk";

const notra = new Notra({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await notra.geo.approveGeoContentBrief({
    projectId: "b1f2c3d4-0000-4000-8000-000000000000",
    briefId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NotraCore } from "@usenotra/sdk/core.js";
import { geoApproveGEOContentBrief } from "@usenotra/sdk/funcs/geo-approve-geo-content-brief.js";

// Use `NotraCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const notra = new NotraCore({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await geoApproveGEOContentBrief(notra, {
    projectId: "b1f2c3d4-0000-4000-8000-000000000000",
    briefId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("geoApproveGEOContentBrief failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ApproveGeoContentBriefRequest](../../models/operations/approve-geo-content-brief-request.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ApproveGeoContentBriefResponse](../../models/operations/approve-geo-content-brief-response.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.ErrorResponse          | 400, 401, 402, 403, 404, 409  | application/json              |
| errors.RateLimitErrorResponse | 429                           | application/json              |
| errors.ErrorResponse          | 500, 503                      | application/json              |
| errors.NotraDefaultError      | 4XX, 5XX                      | \*/\*                         |

## getGeoAgentReadiness

The most recent completed report for the project's website, any newer run still in flight or failed, and the score history. Returns stored data only; it never starts a scan.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getGeoAgentReadiness" method="get" path="/v1/projects/{projectId}/geo/agent-readiness" -->
```typescript
import { Notra } from "@usenotra/sdk";

const notra = new Notra({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await notra.geo.getGeoAgentReadiness({
    projectId: "b1f2c3d4-0000-4000-8000-000000000000",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NotraCore } from "@usenotra/sdk/core.js";
import { geoGetGEOAgentReadiness } from "@usenotra/sdk/funcs/geo-get-geo-agent-readiness.js";

// Use `NotraCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const notra = new NotraCore({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await geoGetGEOAgentReadiness(notra, {
    projectId: "b1f2c3d4-0000-4000-8000-000000000000",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("geoGetGEOAgentReadiness failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetGeoAgentReadinessRequest](../../models/operations/get-geo-agent-readiness-request.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.GeoAgentReadinessResponse](../../models/geo-agent-readiness-response.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.ErrorResponse         | 400, 401, 402, 403, 404, 409 | application/json             |
| errors.ErrorResponse         | 500, 503                     | application/json             |
| errors.NotraDefaultError     | 4XX, 5XX                     | \*/\*                        |

## startGeoAgentReadinessScan

Queues a readiness scan for the project's website. A scan already running against the same URL is reused rather than duplicated, in which case `alreadyRunning` is true.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="startGeoAgentReadinessScan" method="post" path="/v1/projects/{projectId}/geo/agent-readiness/scan" -->
```typescript
import { Notra } from "@usenotra/sdk";

const notra = new Notra({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await notra.geo.startGeoAgentReadinessScan({
    projectId: "b1f2c3d4-0000-4000-8000-000000000000",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NotraCore } from "@usenotra/sdk/core.js";
import { geoStartGEOAgentReadinessScan } from "@usenotra/sdk/funcs/geo-start-geo-agent-readiness-scan.js";

// Use `NotraCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const notra = new NotraCore({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await geoStartGEOAgentReadinessScan(notra, {
    projectId: "b1f2c3d4-0000-4000-8000-000000000000",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("geoStartGEOAgentReadinessScan failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.StartGeoAgentReadinessScanRequest](../../models/operations/start-geo-agent-readiness-scan-request.md)                                                              | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.StartGeoAgentReadinessScanResponse](../../models/operations/start-geo-agent-readiness-scan-response.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.ErrorResponse          | 400, 401, 402, 403, 404, 409  | application/json              |
| errors.RateLimitErrorResponse | 429                           | application/json              |
| errors.ErrorResponse          | 500, 503                      | application/json              |
| errors.NotraDefaultError      | 4XX, 5XX                      | \*/\*                         |

## getGeoTrafficOverview

Crawler and AI-referral visit totals, a per-source breakdown and the daily timeseries behind it.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getGeoTrafficOverview" method="get" path="/v1/projects/{projectId}/geo/traffic/overview" -->
```typescript
import { Notra } from "@usenotra/sdk";

const notra = new Notra({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await notra.geo.getGeoTrafficOverview({
    projectId: "b1f2c3d4-0000-4000-8000-000000000000",
    from: "2026-01-31",
    to: "2026-01-31",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NotraCore } from "@usenotra/sdk/core.js";
import { geoGetGEOTrafficOverview } from "@usenotra/sdk/funcs/geo-get-geo-traffic-overview.js";

// Use `NotraCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const notra = new NotraCore({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await geoGetGEOTrafficOverview(notra, {
    projectId: "b1f2c3d4-0000-4000-8000-000000000000",
    from: "2026-01-31",
    to: "2026-01-31",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("geoGetGEOTrafficOverview failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetGeoTrafficOverviewRequest](../../models/operations/get-geo-traffic-overview-request.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.GeoTrafficOverviewResponse](../../models/geo-traffic-overview-response.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.ErrorResponse         | 400, 401, 402, 403, 404, 409 | application/json             |
| errors.ErrorResponse         | 500, 503                     | application/json             |
| errors.NotraDefaultError     | 4XX, 5XX                     | \*/\*                        |

## getGeoTrafficLog

The most recent individual requests from AI crawlers and referrals. This endpoint has no window; use `limit` to bound it.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getGeoTrafficLog" method="get" path="/v1/projects/{projectId}/geo/traffic/log" -->
```typescript
import { Notra } from "@usenotra/sdk";

const notra = new Notra({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await notra.geo.getGeoTrafficLog({
    projectId: "b1f2c3d4-0000-4000-8000-000000000000",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NotraCore } from "@usenotra/sdk/core.js";
import { geoGetGEOTrafficLog } from "@usenotra/sdk/funcs/geo-get-geo-traffic-log.js";

// Use `NotraCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const notra = new NotraCore({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await geoGetGEOTrafficLog(notra, {
    projectId: "b1f2c3d4-0000-4000-8000-000000000000",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("geoGetGEOTrafficLog failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetGeoTrafficLogRequest](../../models/operations/get-geo-traffic-log-request.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.GeoTrafficLogResponse](../../models/geo-traffic-log-response.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.ErrorResponse         | 400, 401, 402, 403, 404, 409 | application/json             |
| errors.ErrorResponse         | 500, 503                     | application/json             |
| errors.NotraDefaultError     | 4XX, 5XX                     | \*/\*                        |

## listGeoTrafficJourneys

Sessions grouped by journey: how many pages one agent read, over what span, and a sample of the paths.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listGeoTrafficJourneys" method="get" path="/v1/projects/{projectId}/geo/traffic/journeys" -->
```typescript
import { Notra } from "@usenotra/sdk";

const notra = new Notra({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await notra.geo.listGeoTrafficJourneys({
    projectId: "b1f2c3d4-0000-4000-8000-000000000000",
    from: "2026-01-31",
    to: "2026-01-31",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NotraCore } from "@usenotra/sdk/core.js";
import { geoListGEOTrafficJourneys } from "@usenotra/sdk/funcs/geo-list-geo-traffic-journeys.js";

// Use `NotraCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const notra = new NotraCore({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await geoListGEOTrafficJourneys(notra, {
    projectId: "b1f2c3d4-0000-4000-8000-000000000000",
    from: "2026-01-31",
    to: "2026-01-31",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("geoListGEOTrafficJourneys failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListGeoTrafficJourneysRequest](../../models/operations/list-geo-traffic-journeys-request.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.GeoTrafficJourneysResponse](../../models/geo-traffic-journeys-response.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.ErrorResponse         | 400, 401, 402, 403, 404, 409 | application/json             |
| errors.ErrorResponse         | 500, 503                     | application/json             |
| errors.NotraDefaultError     | 4XX, 5XX                     | \*/\*                        |

## getGeoTrafficJourney

Get one journey's events

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getGeoTrafficJourney" method="get" path="/v1/projects/{projectId}/geo/traffic/journeys/{journeyId}" -->
```typescript
import { Notra } from "@usenotra/sdk";

const notra = new Notra({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await notra.geo.getGeoTrafficJourney({
    projectId: "b1f2c3d4-0000-4000-8000-000000000000",
    journeyId: "<id>",
    from: "2026-01-31",
    to: "2026-01-31",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NotraCore } from "@usenotra/sdk/core.js";
import { geoGetGEOTrafficJourney } from "@usenotra/sdk/funcs/geo-get-geo-traffic-journey.js";

// Use `NotraCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const notra = new NotraCore({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await geoGetGEOTrafficJourney(notra, {
    projectId: "b1f2c3d4-0000-4000-8000-000000000000",
    journeyId: "<id>",
    from: "2026-01-31",
    to: "2026-01-31",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("geoGetGEOTrafficJourney failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetGeoTrafficJourneyRequest](../../models/operations/get-geo-traffic-journey-request.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.GeoJourneyDetailResponse](../../models/geo-journey-detail-response.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.ErrorResponse         | 400, 401, 402, 403, 404, 409 | application/json             |
| errors.ErrorResponse         | 500, 503                     | application/json             |
| errors.NotraDefaultError     | 4XX, 5XX                     | \*/\*                        |

## listGeoTrafficPages

Which paths AI crawlers and referrals read most, with the previous window's count for comparison.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listGeoTrafficPages" method="get" path="/v1/projects/{projectId}/geo/traffic/pages" -->
```typescript
import { Notra } from "@usenotra/sdk";

const notra = new Notra({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await notra.geo.listGeoTrafficPages({
    projectId: "b1f2c3d4-0000-4000-8000-000000000000",
    from: "2026-01-31",
    to: "2026-01-31",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NotraCore } from "@usenotra/sdk/core.js";
import { geoListGEOTrafficPages } from "@usenotra/sdk/funcs/geo-list-geo-traffic-pages.js";

// Use `NotraCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const notra = new NotraCore({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await geoListGEOTrafficPages(notra, {
    projectId: "b1f2c3d4-0000-4000-8000-000000000000",
    from: "2026-01-31",
    to: "2026-01-31",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("geoListGEOTrafficPages failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListGeoTrafficPagesRequest](../../models/operations/list-geo-traffic-pages-request.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.GeoTrafficPagesResponse](../../models/geo-traffic-pages-response.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.ErrorResponse         | 400, 401, 402, 403, 404, 409 | application/json             |
| errors.ErrorResponse         | 500, 503                     | application/json             |
| errors.NotraDefaultError     | 4XX, 5XX                     | \*/\*                        |

## getGeoIngestSetup

The endpoint and framework snippets needed to send AI traffic to Notra. The snippets read the token from an environment variable; the token itself is issued by `POST /geo/ingest/token`, which requires a write scope.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getGeoIngestSetup" method="get" path="/v1/geo/ingest/setup" -->
```typescript
import { Notra } from "@usenotra/sdk";

const notra = new Notra({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await notra.geo.getGeoIngestSetup();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NotraCore } from "@usenotra/sdk/core.js";
import { geoGetGEOIngestSetup } from "@usenotra/sdk/funcs/geo-get-geo-ingest-setup.js";

// Use `NotraCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const notra = new NotraCore({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await geoGetGEOIngestSetup(notra);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("geoGetGEOIngestSetup failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.GeoIngestSetupResponse](../../models/geo-ingest-setup-response.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.ErrorResponse         | 400, 401, 402, 403, 404, 409 | application/json             |
| errors.ErrorResponse         | 500, 503                     | application/json             |
| errors.NotraDefaultError     | 4XX, 5XX                     | \*/\*                        |

## issueGeoIngestToken

Returns the current tracking token together with the install snippets. Organization-level: pass `projectId` to bind the token to one project. Issuing does not invalidate previously issued tokens; use rotation for that.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="issueGeoIngestToken" method="post" path="/v1/geo/ingest/token" -->
```typescript
import { Notra } from "@usenotra/sdk";

const notra = new Notra({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await notra.geo.issueGeoIngestToken();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NotraCore } from "@usenotra/sdk/core.js";
import { geoIssueGEOIngestToken } from "@usenotra/sdk/funcs/geo-issue-geo-ingest-token.js";

// Use `NotraCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const notra = new NotraCore({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await geoIssueGEOIngestToken(notra);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("geoIssueGEOIngestToken failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.IssueGeoIngestTokenRequest](../../models/operations/issue-geo-ingest-token-request.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.GeoIngestTokenResponse](../../models/geo-ingest-token-response.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.ErrorResponse         | 400, 401, 402, 403, 404, 409 | application/json             |
| errors.ErrorResponse         | 500, 503                     | application/json             |
| errors.NotraDefaultError     | 4XX, 5XX                     | \*/\*                        |

## rotateGeoIngestToken

Invalidates every tracking token previously issued for this organization and returns a fresh one. Deployments still sending the old token stop being accepted immediately.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="rotateGeoIngestToken" method="post" path="/v1/geo/ingest/rotate-token" -->
```typescript
import { Notra } from "@usenotra/sdk";

const notra = new Notra({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await notra.geo.rotateGeoIngestToken();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NotraCore } from "@usenotra/sdk/core.js";
import { geoRotateGEOIngestToken } from "@usenotra/sdk/funcs/geo-rotate-geo-ingest-token.js";

// Use `NotraCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const notra = new NotraCore({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await geoRotateGEOIngestToken(notra);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("geoRotateGEOIngestToken failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RotateGeoIngestTokenRequest](../../models/operations/rotate-geo-ingest-token-request.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.GeoIngestTokenResponse](../../models/geo-ingest-token-response.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.ErrorResponse         | 400, 401, 402, 403, 404, 409 | application/json             |
| errors.ErrorResponse         | 500, 503                     | application/json             |
| errors.NotraDefaultError     | 4XX, 5XX                     | \*/\*                        |