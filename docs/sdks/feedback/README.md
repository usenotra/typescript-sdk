# Feedback

## Overview

Collect and triage feedback submitted by AI agents. Submission accepts a write-only feedback token (nfb_...) or an API key with feedback.write; reading and triage require an API key.

### Available Operations

* [listFeedback](#listfeedback) - List feedback
* [submitFeedback](#submitfeedback) - Submit feedback
* [getFeedback](#getfeedback) - Get a single feedback entry
* [updateFeedback](#updatefeedback) - Update feedback status

## listFeedback

List feedback

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listFeedback" method="get" path="/v1/feedback" -->
```typescript
import { Notra } from "@usenotra/sdk";

const notra = new Notra({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await notra.feedback.listFeedback({
    status: "new",
    kind: "bug",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NotraCore } from "@usenotra/sdk/core.js";
import { feedbackListFeedback } from "@usenotra/sdk/funcs/feedback-list-feedback.js";

// Use `NotraCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const notra = new NotraCore({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await feedbackListFeedback(notra, {
    status: "new",
    kind: "bug",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("feedbackListFeedback failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListFeedbackRequest](../../models/operations/list-feedback-request.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ListFeedbackResponse](../../models/list-feedback-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorResponse     | 400, 401, 403            | application/json         |
| errors.ErrorResponse     | 503                      | application/json         |
| errors.NotraDefaultError | 4XX, 5XX                 | \*/\*                    |

## submitFeedback

Record feedback from an AI agent or integration. Accepts a write-only feedback token (Authorization: Bearer nfb_...) or an API key with the feedback.write scope.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="submitFeedback" method="post" path="/v1/feedback" -->
```typescript
import { Notra } from "@usenotra/sdk";

const notra = new Notra({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await notra.feedback.submitFeedback({
    message: "The search tool times out when the query has quotes.",
    title: "Search times out on quoted queries",
    kind: "bug",
    sentiment: "negative",
    source: "mcp",
    agentClient: "claude-code",
    agentModel: "claude-opus-5",
    toolVersion: "1.2.0",
    contextUrl: "https://docs.example.com/api/search",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NotraCore } from "@usenotra/sdk/core.js";
import { feedbackSubmitFeedback } from "@usenotra/sdk/funcs/feedback-submit-feedback.js";

// Use `NotraCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const notra = new NotraCore({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await feedbackSubmitFeedback(notra, {
    message: "The search tool times out when the query has quotes.",
    title: "Search times out on quoted queries",
    kind: "bug",
    sentiment: "negative",
    source: "mcp",
    agentClient: "claude-code",
    agentModel: "claude-opus-5",
    toolVersion: "1.2.0",
    contextUrl: "https://docs.example.com/api/search",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("feedbackSubmitFeedback failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.SubmitFeedbackRequest](../../models/submit-feedback-request.md)                                                                                                        | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.SubmitFeedbackResponse](../../models/operations/submit-feedback-response.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.ErrorResponse          | 400, 401, 403, 404            | application/json              |
| errors.RateLimitErrorResponse | 429                           | application/json              |
| errors.ErrorResponse          | 503                           | application/json              |
| errors.NotraDefaultError      | 4XX, 5XX                      | \*/\*                         |

## getFeedback

Get a single feedback entry

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getFeedback" method="get" path="/v1/feedback/{feedbackId}" -->
```typescript
import { Notra } from "@usenotra/sdk";

const notra = new Notra({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await notra.feedback.getFeedback({
    feedbackId: "fb_123",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NotraCore } from "@usenotra/sdk/core.js";
import { feedbackGetFeedback } from "@usenotra/sdk/funcs/feedback-get-feedback.js";

// Use `NotraCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const notra = new NotraCore({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await feedbackGetFeedback(notra, {
    feedbackId: "fb_123",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("feedbackGetFeedback failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetFeedbackRequest](../../models/operations/get-feedback-request.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.FeedbackResponse](../../models/feedback-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorResponse     | 400, 401, 403, 404       | application/json         |
| errors.ErrorResponse     | 503                      | application/json         |
| errors.NotraDefaultError | 4XX, 5XX                 | \*/\*                    |

## updateFeedback

Update feedback status

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateFeedback" method="patch" path="/v1/feedback/{feedbackId}" -->
```typescript
import { Notra } from "@usenotra/sdk";

const notra = new Notra({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await notra.feedback.updateFeedback({
    feedbackId: "fb_123",
    body: {
      status: "new",
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
import { feedbackUpdateFeedback } from "@usenotra/sdk/funcs/feedback-update-feedback.js";

// Use `NotraCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const notra = new NotraCore({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await feedbackUpdateFeedback(notra, {
    feedbackId: "fb_123",
    body: {
      status: "new",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("feedbackUpdateFeedback failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateFeedbackRequest](../../models/operations/update-feedback-request.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.FeedbackResponse](../../models/feedback-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorResponse     | 400, 401, 403, 404       | application/json         |
| errors.ErrorResponse     | 503                      | application/json         |
| errors.NotraDefaultError | 4XX, 5XX                 | \*/\*                    |