# EventTriggers

## Overview

Manage event-based content generation triggered by GitHub webhooks. Organization is inferred from the API key (identity.externalId).

### Available Operations

* [listEventTriggers](#listeventtriggers) - List event triggers
* [createEventTrigger](#createeventtrigger) - Create an event trigger
* [getEventTrigger](#geteventtrigger) - Get an event trigger
* [deleteEventTrigger](#deleteeventtrigger) - Delete an event trigger
* [updateEventTrigger](#updateeventtrigger) - Update an event trigger

## listEventTriggers

List event triggers

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listEventTriggers" method="get" path="/v1/event-triggers" -->
```typescript
import { Notra } from "@usenotra/sdk";

const notra = new Notra({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await notra.eventTriggers.listEventTriggers({
    repositoryIds: "repo_123,repo_456",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NotraCore } from "@usenotra/sdk/core.js";
import { eventTriggersListEventTriggers } from "@usenotra/sdk/funcs/event-triggers-list-event-triggers.js";

// Use `NotraCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const notra = new NotraCore({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await eventTriggersListEventTriggers(notra, {
    repositoryIds: "repo_123,repo_456",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("eventTriggersListEventTriggers failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListEventTriggersRequest](../../models/operations/list-event-triggers-request.md)                                                                                  | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListEventTriggersResponse](../../models/operations/list-event-triggers-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorResponse     | 400, 401, 403, 404       | application/json         |
| errors.ErrorResponse     | 500, 503                 | application/json         |
| errors.NotraDefaultError | 4XX, 5XX                 | \*/\*                    |

## createEventTrigger

Create an event trigger

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createEventTrigger" method="post" path="/v1/event-triggers" -->
```typescript
import { Notra } from "@usenotra/sdk";

const notra = new Notra({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await notra.eventTriggers.createEventTrigger({
    sourceType: "github_webhook",
    sourceConfig: {
      eventTypes: [],
    },
    targets: {
      repositoryIds: [],
    },
    outputType: "image",
    enabled: true,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NotraCore } from "@usenotra/sdk/core.js";
import { eventTriggersCreateEventTrigger } from "@usenotra/sdk/funcs/event-triggers-create-event-trigger.js";

// Use `NotraCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const notra = new NotraCore({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await eventTriggersCreateEventTrigger(notra, {
    sourceType: "github_webhook",
    sourceConfig: {
      eventTypes: [],
    },
    targets: {
      repositoryIds: [],
    },
    outputType: "image",
    enabled: true,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("eventTriggersCreateEventTrigger failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateEventTriggerRequest](../../models/operations/create-event-trigger-request.md)                                                                                | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateEventTriggerResponse](../../models/operations/create-event-trigger-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorResponse     | 400, 401, 403, 404, 409  | application/json         |
| errors.ErrorResponse     | 500, 503                 | application/json         |
| errors.NotraDefaultError | 4XX, 5XX                 | \*/\*                    |

## getEventTrigger

Get an event trigger

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getEventTrigger" method="get" path="/v1/event-triggers/{triggerId}" -->
```typescript
import { Notra } from "@usenotra/sdk";

const notra = new Notra({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await notra.eventTriggers.getEventTrigger({
    triggerId: "trig_123",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NotraCore } from "@usenotra/sdk/core.js";
import { eventTriggersGetEventTrigger } from "@usenotra/sdk/funcs/event-triggers-get-event-trigger.js";

// Use `NotraCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const notra = new NotraCore({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await eventTriggersGetEventTrigger(notra, {
    triggerId: "trig_123",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("eventTriggersGetEventTrigger failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetEventTriggerRequest](../../models/operations/get-event-trigger-request.md)                                                                                      | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetEventTriggerResponse](../../models/operations/get-event-trigger-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorResponse     | 400, 401, 403, 404       | application/json         |
| errors.ErrorResponse     | 500, 503                 | application/json         |
| errors.NotraDefaultError | 4XX, 5XX                 | \*/\*                    |

## deleteEventTrigger

Delete an event trigger

### Example Usage

<!-- UsageSnippet language="typescript" operationID="deleteEventTrigger" method="delete" path="/v1/event-triggers/{triggerId}" -->
```typescript
import { Notra } from "@usenotra/sdk";

const notra = new Notra({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await notra.eventTriggers.deleteEventTrigger({
    triggerId: "trig_123",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NotraCore } from "@usenotra/sdk/core.js";
import { eventTriggersDeleteEventTrigger } from "@usenotra/sdk/funcs/event-triggers-delete-event-trigger.js";

// Use `NotraCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const notra = new NotraCore({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await eventTriggersDeleteEventTrigger(notra, {
    triggerId: "trig_123",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("eventTriggersDeleteEventTrigger failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteEventTriggerRequest](../../models/operations/delete-event-trigger-request.md)                                                                                | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteEventTriggerResponse](../../models/operations/delete-event-trigger-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorResponse     | 400, 401, 403, 404       | application/json         |
| errors.ErrorResponse     | 500, 503                 | application/json         |
| errors.NotraDefaultError | 4XX, 5XX                 | \*/\*                    |

## updateEventTrigger

Update an event trigger

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateEventTrigger" method="patch" path="/v1/event-triggers/{triggerId}" -->
```typescript
import { Notra } from "@usenotra/sdk";

const notra = new Notra({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await notra.eventTriggers.updateEventTrigger({
    triggerId: "trig_123",
    body: {
      sourceType: "github_webhook",
      sourceConfig: {
        eventTypes: [
          "push",
        ],
      },
      targets: {
        repositoryIds: [],
      },
      outputType: "twitter_post",
      enabled: false,
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
import { eventTriggersUpdateEventTrigger } from "@usenotra/sdk/funcs/event-triggers-update-event-trigger.js";

// Use `NotraCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const notra = new NotraCore({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await eventTriggersUpdateEventTrigger(notra, {
    triggerId: "trig_123",
    body: {
      sourceType: "github_webhook",
      sourceConfig: {
        eventTypes: [
          "push",
        ],
      },
      targets: {
        repositoryIds: [],
      },
      outputType: "twitter_post",
      enabled: false,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("eventTriggersUpdateEventTrigger failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateEventTriggerRequest](../../models/operations/update-event-trigger-request.md)                                                                                | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UpdateEventTriggerResponse](../../models/operations/update-event-trigger-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorResponse     | 400, 401, 403, 404, 409  | application/json         |
| errors.ErrorResponse     | 500, 503                 | application/json         |
| errors.NotraDefaultError | 4XX, 5XX                 | \*/\*                    |