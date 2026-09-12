# Schedules

## Overview

Manage scheduled content generation. Organization is inferred from the API key (identity.externalId).

### Available Operations

* [listSchedules](#listschedules) - List schedules
* [createSchedule](#createschedule) - Create a schedule
* [deleteSchedule](#deleteschedule) - Delete a schedule
* [updateSchedule](#updateschedule) - Update a schedule

## listSchedules

Returns the organization's cron schedules, newest first. repositoryMap maps each targeted GitHub integration ID to an owner/repo label.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listSchedules" method="get" path="/v1/schedules" -->
```typescript
import { Notra } from "@usenotra/sdk";

const notra = new Notra({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await notra.schedules.listSchedules({
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
import { schedulesListSchedules } from "@usenotra/sdk/funcs/schedules-list-schedules.js";

// Use `NotraCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const notra = new NotraCore({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await schedulesListSchedules(notra, {
    repositoryIds: "repo_123,repo_456",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("schedulesListSchedules failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListSchedulesRequest](../../models/operations/list-schedules-request.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListSchedulesResponse](../../models/operations/list-schedules-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorResponse     | 400, 401, 403, 404       | application/json         |
| errors.ErrorResponse     | 500, 503                 | application/json         |
| errors.NotraDefaultError | 4XX, 5XX                 | \*/\*                    |

## createSchedule

Creates a recurring schedule that generates one content type from the selected GitHub integrations. Times are in UTC. A schedule with the same source, targets, output, and lookback settings as an existing one is rejected with 409.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createSchedule" method="post" path="/v1/schedules" -->
```typescript
import { Notra } from "@usenotra/sdk";

const notra = new Notra({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await notra.schedules.createSchedule({
    name: "<value>",
    sourceType: "cron",
    sourceConfig: {
      cron: {
        frequency: "weekly",
        hour: 678210,
        minute: 400553,
        dayOfWeek: 1,
        dayOfMonth: 1,
        intervalDays: 3,
        anchorDate: "2026-09-03",
      },
    },
    targets: {
      repositoryIds: [],
    },
    outputType: "changelog",
    outputConfig: {
      brandVoiceId: "51c2f3aa-efdd-4e28-8e69-23fa2dfd3561",
      instructions: "Write a tutorial-style post that walks through one feature shipped in this window, with code samples.",
    },
    enabled: false,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NotraCore } from "@usenotra/sdk/core.js";
import { schedulesCreateSchedule } from "@usenotra/sdk/funcs/schedules-create-schedule.js";

// Use `NotraCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const notra = new NotraCore({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await schedulesCreateSchedule(notra, {
    name: "<value>",
    sourceType: "cron",
    sourceConfig: {
      cron: {
        frequency: "weekly",
        hour: 678210,
        minute: 400553,
        dayOfWeek: 1,
        dayOfMonth: 1,
        intervalDays: 3,
        anchorDate: "2026-09-03",
      },
    },
    targets: {
      repositoryIds: [],
    },
    outputType: "changelog",
    outputConfig: {
      brandVoiceId: "51c2f3aa-efdd-4e28-8e69-23fa2dfd3561",
      instructions: "Write a tutorial-style post that walks through one feature shipped in this window, with code samples.",
    },
    enabled: false,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("schedulesCreateSchedule failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateScheduleRequest](../../models/operations/create-schedule-request.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateScheduleResponse](../../models/operations/create-schedule-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorResponse     | 400, 401, 403, 404, 409  | application/json         |
| errors.ErrorResponse     | 500, 503                 | application/json         |
| errors.NotraDefaultError | 4XX, 5XX                 | \*/\*                    |

## deleteSchedule

Deletes the schedule and stops future runs. Posts generated by earlier runs are kept.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="deleteSchedule" method="delete" path="/v1/schedules/{scheduleId}" -->
```typescript
import { Notra } from "@usenotra/sdk";

const notra = new Notra({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await notra.schedules.deleteSchedule({
    scheduleId: "sched_123",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NotraCore } from "@usenotra/sdk/core.js";
import { schedulesDeleteSchedule } from "@usenotra/sdk/funcs/schedules-delete-schedule.js";

// Use `NotraCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const notra = new NotraCore({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await schedulesDeleteSchedule(notra, {
    scheduleId: "sched_123",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("schedulesDeleteSchedule failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteScheduleRequest](../../models/operations/delete-schedule-request.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteScheduleResponse](../../models/operations/delete-schedule-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorResponse     | 400, 401, 403, 404       | application/json         |
| errors.ErrorResponse     | 500, 503                 | application/json         |
| errors.NotraDefaultError | 4XX, 5XX                 | \*/\*                    |

## updateSchedule

Replaces the schedule. Send the full schedule body; fields that are omitted are not preserved from the existing schedule.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateSchedule" method="patch" path="/v1/schedules/{scheduleId}" -->
```typescript
import { Notra } from "@usenotra/sdk";

const notra = new Notra({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await notra.schedules.updateSchedule({
    scheduleId: "sched_123",
    body: {
      name: "<value>",
      sourceType: "cron",
      sourceConfig: {
        cron: {
          frequency: "monthly",
          hour: 973458,
          minute: 221042,
          dayOfWeek: 1,
          dayOfMonth: 1,
          intervalDays: 3,
          anchorDate: "2026-09-03",
        },
      },
      targets: {
        repositoryIds: [],
      },
      outputType: "changelog",
      outputConfig: {
        brandVoiceId: "51c2f3aa-efdd-4e28-8e69-23fa2dfd3561",
        instructions: "Write a tutorial-style post that walks through one feature shipped in this window, with code samples.",
      },
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
import { schedulesUpdateSchedule } from "@usenotra/sdk/funcs/schedules-update-schedule.js";

// Use `NotraCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const notra = new NotraCore({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await schedulesUpdateSchedule(notra, {
    scheduleId: "sched_123",
    body: {
      name: "<value>",
      sourceType: "cron",
      sourceConfig: {
        cron: {
          frequency: "monthly",
          hour: 973458,
          minute: 221042,
          dayOfWeek: 1,
          dayOfMonth: 1,
          intervalDays: 3,
          anchorDate: "2026-09-03",
        },
      },
      targets: {
        repositoryIds: [],
      },
      outputType: "changelog",
      outputConfig: {
        brandVoiceId: "51c2f3aa-efdd-4e28-8e69-23fa2dfd3561",
        instructions: "Write a tutorial-style post that walks through one feature shipped in this window, with code samples.",
      },
      enabled: false,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("schedulesUpdateSchedule failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateScheduleRequest](../../models/operations/update-schedule-request.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UpdateScheduleResponse](../../models/operations/update-schedule-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorResponse     | 400, 401, 403, 404, 409  | application/json         |
| errors.ErrorResponse     | 500, 503                 | application/json         |
| errors.NotraDefaultError | 4XX, 5XX                 | \*/\*                    |