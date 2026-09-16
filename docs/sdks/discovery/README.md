# Discovery

## Overview

Public API status and authenticated workspace discovery.

### Available Operations

* [getPublicApiStatus](#getpublicapistatus) - Check public API reachability
* [getWorkspaces](#getworkspaces) - Get authenticated workspace context

## getPublicApiStatus

Check public API reachability

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getPublicApiStatus" method="get" path="/v1/status" -->
```typescript
import { Notra } from "@usenotra/sdk";

const notra = new Notra();

async function run() {
  const result = await notra.discovery.getPublicApiStatus();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NotraCore } from "@usenotra/sdk/core.js";
import { discoveryGetPublicApiStatus } from "@usenotra/sdk/funcs/discovery-get-public-api-status.js";

// Use `NotraCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const notra = new NotraCore();

async function run() {
  const res = await discoveryGetPublicApiStatus(notra);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("discoveryGetPublicApiStatus failed:", res.error);
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

**Promise\<[models.PublicStatusResponse](../../models/public-status-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.NotraDefaultError | 4XX, 5XX                 | \*/\*                    |

## getWorkspaces

Returns the current workspace and authentication details. OAuth users also receive their accepted memberships and can opt into pending invitations; organization API keys only receive their current workspace. Discovery does not change the workspace bound to the bearer token.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getWorkspaces" method="get" path="/v1/me/workspaces" -->
```typescript
import { Notra } from "@usenotra/sdk";

const notra = new Notra({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await notra.discovery.getWorkspaces();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NotraCore } from "@usenotra/sdk/core.js";
import { discoveryGetWorkspaces } from "@usenotra/sdk/funcs/discovery-get-workspaces.js";

// Use `NotraCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const notra = new NotraCore({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await discoveryGetWorkspaces(notra);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("discoveryGetWorkspaces failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetWorkspacesRequest](../../models/operations/get-workspaces-request.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.GetWorkspacesResponse](../../models/get-workspaces-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorResponse     | 400, 401, 403, 404       | application/json         |
| errors.ErrorResponse     | 503                      | application/json         |
| errors.NotraDefaultError | 4XX, 5XX                 | \*/\*                    |