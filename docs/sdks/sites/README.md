# Sites

## Overview

Notra Sites are hosted blogs and changelogs built from a GitHub repository. Read Sites and their deployments, start builds, preview posts on a Site, open pull requests that publish posts to it, and manage blog.json authors and the author page through staged Design changes. Domains, settings, rollbacks and deletion stay in the dashboard.

### Available Operations

* [listSites](#listsites) - List Notra Sites
* [listSiteAuthors](#listsiteauthors) - List a site's authors
* [upsertSiteAuthor](#upsertsiteauthor) - Create or update a site author
* [deleteSiteAuthor](#deletesiteauthor) - Delete a site author
* [importSiteAuthors](#importsiteauthors) - Import Notra authors into a site
* [updateSiteAuthorPage](#updatesiteauthorpage) - Set the author page layout
* [publishSite](#publishsite) - Publish a site's Design changes
* [getSite](#getsite) - Get a Site
* [listSiteDeployments](#listsitedeployments) - List a Site's deployments
* [startSiteDeployment](#startsitedeployment) - Deploy the production branch
* [getSiteDeployment](#getsitedeployment) - Get a deployment and its build log
* [redeploySiteDeployment](#redeploysitedeployment) - Rebuild a deployment
* [createSitePostPreview](#createsitepostpreview) - Preview a post on a Site
* [getSitePostPreview](#getsitepostpreview) - Get a post preview
* [publishPostToSite](#publishposttosite) - Publish a post to a Site

## listSites

Returns the organization's Notra Sites, oldest first. Sites with a blogMount have authors.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listSites" method="get" path="/v1/sites" -->
```typescript
import { Notra } from "@usenotra/sdk";

const notra = new Notra({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await notra.sites.listSites();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NotraCore } from "@usenotra/sdk/core.js";
import { sitesListSites } from "@usenotra/sdk/funcs/sites-list-sites.js";

// Use `NotraCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const notra = new NotraCore({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await sitesListSites(notra);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sitesListSites failed:", res.error);
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

**Promise\<[operations.ListSitesResponse](../../models/operations/list-sites-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorResponse     | 400, 401, 403, 404, 409  | application/json         |
| errors.ErrorResponse     | 503, 504                 | application/json         |
| errors.NotraDefaultError | 4XX, 5XX                 | \*/\*                    |

## listSiteAuthors

Returns the authors in the site's blog.json, including unpublished Design changes, with how many Notra posts credit each one, plus the author page layout.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listSiteAuthors" method="get" path="/v1/sites/{siteId}/authors" -->
```typescript
import { Notra } from "@usenotra/sdk";

const notra = new Notra({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await notra.sites.listSiteAuthors({
    siteId: "site_8f2kq1",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NotraCore } from "@usenotra/sdk/core.js";
import { sitesListSiteAuthors } from "@usenotra/sdk/funcs/sites-list-site-authors.js";

// Use `NotraCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const notra = new NotraCore({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await sitesListSiteAuthors(notra, {
    siteId: "site_8f2kq1",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sitesListSiteAuthors failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListSiteAuthorsRequest](../../models/operations/list-site-authors-request.md)                                                                                      | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.SiteAuthors](../../models/site-authors.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorResponse     | 400, 401, 403, 404, 409  | application/json         |
| errors.ErrorResponse     | 503, 504                 | application/json         |
| errors.NotraDefaultError | 4XX, 5XX                 | \*/\*                    |

## upsertSiteAuthor

Creates the author or replaces all of its fields. Send previousId to rename an author; renaming one that is live or credited on Notra posts needs force: true, since those posts lose the link. Changes are saved as unpublished Design changes to the site's blog.json, the same draft the dashboard's Design tab shows, and go live when published with POST /v1/sites/{siteId}/publish or from the dashboard.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="upsertSiteAuthor" method="put" path="/v1/sites/{siteId}/authors/{authorId}" -->
```typescript
import { Notra } from "@usenotra/sdk";

const notra = new Notra({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await notra.sites.upsertSiteAuthor({
    siteId: "site_8f2kq1",
    authorId: "jane-doe",
    body: {
      name: "Jane Doe",
      title: "Head of Product",
      avatar: "/images/jane.png",
      x: "https://x.com/janedoe",
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
import { sitesUpsertSiteAuthor } from "@usenotra/sdk/funcs/sites-upsert-site-author.js";

// Use `NotraCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const notra = new NotraCore({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await sitesUpsertSiteAuthor(notra, {
    siteId: "site_8f2kq1",
    authorId: "jane-doe",
    body: {
      name: "Jane Doe",
      title: "Head of Product",
      avatar: "/images/jane.png",
      x: "https://x.com/janedoe",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sitesUpsertSiteAuthor failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpsertSiteAuthorRequest](../../models/operations/upsert-site-author-request.md)                                                                                    | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UpsertSiteAuthorResponse](../../models/operations/upsert-site-author-response.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.ErrorResponse          | 400, 401, 403, 404, 409       | application/json              |
| errors.RateLimitErrorResponse | 429                           | application/json              |
| errors.ErrorResponse          | 503, 504                      | application/json              |
| errors.NotraDefaultError      | 4XX, 5XX                      | \*/\*                         |

## deleteSiteAuthor

Removes the author from blog.json. Deleting one that is live or credited on Notra posts needs force=true; those posts then show the id as a plain name. Changes are saved as unpublished Design changes to the site's blog.json, the same draft the dashboard's Design tab shows, and go live when published with POST /v1/sites/{siteId}/publish or from the dashboard.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="deleteSiteAuthor" method="delete" path="/v1/sites/{siteId}/authors/{authorId}" -->
```typescript
import { Notra } from "@usenotra/sdk";

const notra = new Notra({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await notra.sites.deleteSiteAuthor({
    siteId: "site_8f2kq1",
    authorId: "jane-doe",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NotraCore } from "@usenotra/sdk/core.js";
import { sitesDeleteSiteAuthor } from "@usenotra/sdk/funcs/sites-delete-site-author.js";

// Use `NotraCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const notra = new NotraCore({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await sitesDeleteSiteAuthor(notra, {
    siteId: "site_8f2kq1",
    authorId: "jane-doe",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sitesDeleteSiteAuthor failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteSiteAuthorRequest](../../models/operations/delete-site-author-request.md)                                                                                    | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteSiteAuthorResponse](../../models/operations/delete-site-author-response.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.ErrorResponse          | 400, 401, 403, 404, 409       | application/json              |
| errors.RateLimitErrorResponse | 429                           | application/json              |
| errors.ErrorResponse          | 503, 504                      | application/json              |
| errors.NotraDefaultError      | 4XX, 5XX                      | \*/\*                         |

## importSiteAuthors

Copies Notra authors (GET /v1/posts/authors) into blog.json, using their slug as the id. Avatars on https URLs are kept; dashboard uploads are listed in avatarsSkipped. Changes are saved as unpublished Design changes to the site's blog.json, the same draft the dashboard's Design tab shows, and go live when published with POST /v1/sites/{siteId}/publish or from the dashboard.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="importSiteAuthors" method="post" path="/v1/sites/{siteId}/authors/import" -->
```typescript
import { Notra } from "@usenotra/sdk";

const notra = new Notra({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await notra.sites.importSiteAuthors({
    siteId: "site_8f2kq1",
    body: {
      authorIds: [
        "auth_8f2kq1",
      ],
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
import { sitesImportSiteAuthors } from "@usenotra/sdk/funcs/sites-import-site-authors.js";

// Use `NotraCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const notra = new NotraCore({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await sitesImportSiteAuthors(notra, {
    siteId: "site_8f2kq1",
    body: {
      authorIds: [
        "auth_8f2kq1",
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sitesImportSiteAuthors failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ImportSiteAuthorsRequest](../../models/operations/import-site-authors-request.md)                                                                                  | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ImportSiteAuthorsResponse](../../models/operations/import-site-authors-response.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.ErrorResponse          | 400, 401, 403, 404, 409       | application/json              |
| errors.RateLimitErrorResponse | 429                           | application/json              |
| errors.ErrorResponse          | 503, 504                      | application/json              |
| errors.NotraDefaultError      | 4XX, 5XX                      | \*/\*                         |

## updateSiteAuthorPage

Sets blog.authorPage, the layout of every author page. Changes are saved as unpublished Design changes to the site's blog.json, the same draft the dashboard's Design tab shows, and go live when published with POST /v1/sites/{siteId}/publish or from the dashboard.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateSiteAuthorPage" method="patch" path="/v1/sites/{siteId}/author-page" -->
```typescript
import { Notra } from "@usenotra/sdk";

const notra = new Notra({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await notra.sites.updateSiteAuthorPage({
    siteId: "site_8f2kq1",
    body: {
      layout: "stacked",
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
import { sitesUpdateSiteAuthorPage } from "@usenotra/sdk/funcs/sites-update-site-author-page.js";

// Use `NotraCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const notra = new NotraCore({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await sitesUpdateSiteAuthorPage(notra, {
    siteId: "site_8f2kq1",
    body: {
      layout: "stacked",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sitesUpdateSiteAuthorPage failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateSiteAuthorPageRequest](../../models/operations/update-site-author-page-request.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UpdateSiteAuthorPageResponse](../../models/operations/update-site-author-page-response.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.ErrorResponse          | 400, 401, 403, 404, 409       | application/json              |
| errors.RateLimitErrorResponse | 429                           | application/json              |
| errors.ErrorResponse          | 503, 504                      | application/json              |
| errors.NotraDefaultError      | 4XX, 5XX                      | \*/\*                         |

## publishSite

Commits the unpublished blog.json changes, with the images they use, to the site's production branch and deploys it, like Publish in the dashboard. Returns 409 with code SITE_HAS_OTHER_CHANGES when other files have unpublished changes, so work staged in the dashboard is never published by accident; publish those from the dashboard.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="publishSite" method="post" path="/v1/sites/{siteId}/publish" -->
```typescript
import { Notra } from "@usenotra/sdk";

const notra = new Notra({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await notra.sites.publishSite({
    siteId: "site_8f2kq1",
    body: {
      message: "Add Jane Doe as an author",
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
import { sitesPublishSite } from "@usenotra/sdk/funcs/sites-publish-site.js";

// Use `NotraCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const notra = new NotraCore({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await sitesPublishSite(notra, {
    siteId: "site_8f2kq1",
    body: {
      message: "Add Jane Doe as an author",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sitesPublishSite failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PublishSiteRequest](../../models/operations/publish-site-request.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PublishSiteResponse](../../models/operations/publish-site-response.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.ErrorResponse          | 400, 401, 403, 404, 409       | application/json              |
| errors.RateLimitErrorResponse | 429                           | application/json              |
| errors.ErrorResponse          | 503, 504                      | application/json              |
| errors.NotraDefaultError      | 4XX, 5XX                      | \*/\*                         |

## getSite

Returns a Site's settings, live deployment, custom domains with their DNS records, and open previews.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getSite" method="get" path="/v1/sites/{siteId}" -->
```typescript
import { Notra } from "@usenotra/sdk";

const notra = new Notra({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await notra.sites.getSite({
    siteId: "site_8f2kq1",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NotraCore } from "@usenotra/sdk/core.js";
import { sitesGetSite } from "@usenotra/sdk/funcs/sites-get-site.js";

// Use `NotraCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const notra = new NotraCore({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await sitesGetSite(notra, {
    siteId: "site_8f2kq1",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sitesGetSite failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetSiteRequest](../../models/operations/get-site-request.md)                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.GetSiteResponse](../../models/get-site-response.md)\>**

### Errors

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.ErrorResponse              | 400, 401, 402, 403, 404, 409, 429 | application/json                  |
| errors.ErrorResponse              | 502, 503, 504                     | application/json                  |
| errors.NotraDefaultError          | 4XX, 5XX                          | \*/\*                             |

## listSiteDeployments

Lists production and preview builds, newest first, with their status, commit and compiler diagnostics. Live deployments are always included.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listSiteDeployments" method="get" path="/v1/sites/{siteId}/deployments" -->
```typescript
import { Notra } from "@usenotra/sdk";

const notra = new Notra({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await notra.sites.listSiteDeployments({
    siteId: "site_8f2kq1",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NotraCore } from "@usenotra/sdk/core.js";
import { sitesListSiteDeployments } from "@usenotra/sdk/funcs/sites-list-site-deployments.js";

// Use `NotraCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const notra = new NotraCore({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await sitesListSiteDeployments(notra, {
    siteId: "site_8f2kq1",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sitesListSiteDeployments failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListSiteDeploymentsRequest](../../models/operations/list-site-deployments-request.md)                                                                              | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ListSiteDeploymentsResponse](../../models/list-site-deployments-response.md)\>**

### Errors

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.ErrorResponse              | 400, 401, 402, 403, 404, 409, 429 | application/json                  |
| errors.ErrorResponse              | 502, 503, 504                     | application/json                  |
| errors.NotraDefaultError          | 4XX, 5XX                          | \*/\*                             |

## startSiteDeployment

Queues a production build of the newest commit on the Site's production branch. Poll GET /v1/sites/{siteId}/deployments/{deploymentId} until the status is final.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="startSiteDeployment" method="post" path="/v1/sites/{siteId}/deployments" -->
```typescript
import { Notra } from "@usenotra/sdk";

const notra = new Notra({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await notra.sites.startSiteDeployment({
    siteId: "site_8f2kq1",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NotraCore } from "@usenotra/sdk/core.js";
import { sitesStartSiteDeployment } from "@usenotra/sdk/funcs/sites-start-site-deployment.js";

// Use `NotraCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const notra = new NotraCore({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await sitesStartSiteDeployment(notra, {
    siteId: "site_8f2kq1",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sitesStartSiteDeployment failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.StartSiteDeploymentRequest](../../models/operations/start-site-deployment-request.md)                                                                              | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.StartSiteDeploymentResponse](../../models/start-site-deployment-response.md)\>**

### Errors

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.ErrorResponse              | 400, 401, 402, 403, 404, 409, 429 | application/json                  |
| errors.ErrorResponse              | 502, 503, 504                     | application/json                  |
| errors.NotraDefaultError          | 4XX, 5XX                          | \*/\*                             |

## getSiteDeployment

Returns one deployment with its compiler diagnostics and the newest build log output. Use it to follow a build or find out why one failed.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getSiteDeployment" method="get" path="/v1/sites/{siteId}/deployments/{deploymentId}" -->
```typescript
import { Notra } from "@usenotra/sdk";

const notra = new Notra({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await notra.sites.getSiteDeployment({
    siteId: "site_8f2kq1",
    deploymentId: "dep_123",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NotraCore } from "@usenotra/sdk/core.js";
import { sitesGetSiteDeployment } from "@usenotra/sdk/funcs/sites-get-site-deployment.js";

// Use `NotraCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const notra = new NotraCore({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await sitesGetSiteDeployment(notra, {
    siteId: "site_8f2kq1",
    deploymentId: "dep_123",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sitesGetSiteDeployment failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetSiteDeploymentRequest](../../models/operations/get-site-deployment-request.md)                                                                                  | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.GetSiteDeploymentResponse](../../models/get-site-deployment-response.md)\>**

### Errors

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.ErrorResponse              | 400, 401, 402, 403, 404, 409, 429 | application/json                  |
| errors.ErrorResponse              | 502, 503, 504                     | application/json                  |
| errors.NotraDefaultError          | 4XX, 5XX                          | \*/\*                             |

## redeploySiteDeployment

Queues a new build of the same commit, for example to retry a failed build. Rebuilding a production deployment older than the live one is a rollback and is refused; roll back in the dashboard.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="redeploySiteDeployment" method="post" path="/v1/sites/{siteId}/deployments/{deploymentId}/redeploy" -->
```typescript
import { Notra } from "@usenotra/sdk";

const notra = new Notra({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await notra.sites.redeploySiteDeployment({
    siteId: "site_8f2kq1",
    deploymentId: "dep_123",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NotraCore } from "@usenotra/sdk/core.js";
import { sitesRedeploySiteDeployment } from "@usenotra/sdk/funcs/sites-redeploy-site-deployment.js";

// Use `NotraCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const notra = new NotraCore({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await sitesRedeploySiteDeployment(notra, {
    siteId: "site_8f2kq1",
    deploymentId: "dep_123",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sitesRedeploySiteDeployment failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RedeploySiteDeploymentRequest](../../models/operations/redeploy-site-deployment-request.md)                                                                        | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.StartSiteDeploymentResponse](../../models/start-site-deployment-response.md)\>**

### Errors

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.ErrorResponse              | 400, 401, 402, 403, 404, 409, 429 | application/json                  |
| errors.ErrorResponse              | 502, 503, 504                     | application/json                  |
| errors.NotraDefaultError          | 4XX, 5XX                          | \*/\*                             |

## createSitePostPreview

Builds a preview of the Site with the post added, without writing to the repository, and returns its URL. Workspace members open protected previews after signing in; set a password to share it with others. Starts a site build; poll GET /v1/sites/{siteId}/post-previews/{postId} until it is live.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createSitePostPreview" method="post" path="/v1/sites/{siteId}/post-previews" -->
```typescript
import { Notra } from "@usenotra/sdk";

const notra = new Notra({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await notra.sites.createSitePostPreview({
    siteId: "site_8f2kq1",
    body: {
      postId: "post_123",
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
import { sitesCreateSitePostPreview } from "@usenotra/sdk/funcs/sites-create-site-post-preview.js";

// Use `NotraCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const notra = new NotraCore({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await sitesCreateSitePostPreview(notra, {
    siteId: "site_8f2kq1",
    body: {
      postId: "post_123",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sitesCreateSitePostPreview failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateSitePostPreviewRequest](../../models/operations/create-site-post-preview-request.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.SitePostPreviewResponse](../../models/site-post-preview-response.md)\>**

### Errors

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.ErrorResponse              | 400, 401, 402, 403, 404, 409, 429 | application/json                  |
| errors.ErrorResponse              | 502, 503, 504                     | application/json                  |
| errors.NotraDefaultError          | 4XX, 5XX                          | \*/\*                             |

## getSitePostPreview

Returns the status and URL of a post's preview on a Site.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getSitePostPreview" method="get" path="/v1/sites/{siteId}/post-previews/{postId}" -->
```typescript
import { Notra } from "@usenotra/sdk";

const notra = new Notra({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await notra.sites.getSitePostPreview({
    siteId: "site_8f2kq1",
    postId: "post_123",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NotraCore } from "@usenotra/sdk/core.js";
import { sitesGetSitePostPreview } from "@usenotra/sdk/funcs/sites-get-site-post-preview.js";

// Use `NotraCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const notra = new NotraCore({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await sitesGetSitePostPreview(notra, {
    siteId: "site_8f2kq1",
    postId: "post_123",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sitesGetSitePostPreview failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetSitePostPreviewRequest](../../models/operations/get-site-post-preview-request.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.SitePostPreviewResponse](../../models/site-post-preview-response.md)\>**

### Errors

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.ErrorResponse              | 400, 401, 402, 403, 404, 409, 429 | application/json                  |
| errors.ErrorResponse              | 502, 503, 504                     | application/json                  |
| errors.NotraDefaultError          | 4XX, 5XX                          | \*/\*                             |

## publishPostToSite

Opens a pull request that adds a blog post or changelog to the Site's repository, with its images and frontmatter, or updates the post's open pull request. The Site goes live with the post once the pull request is merged, even when the repository publishes directly from the dashboard.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="publishPostToSite" method="post" path="/v1/sites/{siteId}/publications" -->
```typescript
import { Notra } from "@usenotra/sdk";

const notra = new Notra({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await notra.sites.publishPostToSite({
    siteId: "site_8f2kq1",
    body: {
      postId: "post_123",
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
import { sitesPublishPostToSite } from "@usenotra/sdk/funcs/sites-publish-post-to-site.js";

// Use `NotraCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const notra = new NotraCore({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await sitesPublishPostToSite(notra, {
    siteId: "site_8f2kq1",
    body: {
      postId: "post_123",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sitesPublishPostToSite failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PublishPostToSiteRequest](../../models/operations/publish-post-to-site-request.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.PublishSitePostResponse](../../models/publish-site-post-response.md)\>**

### Errors

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.ErrorResponse              | 400, 401, 402, 403, 404, 409, 429 | application/json                  |
| errors.ErrorResponse              | 502, 503, 504                     | application/json                  |
| errors.NotraDefaultError          | 4XX, 5XX                          | \*/\*                             |