# GeoPersonaGenerationJob

The project's latest generation job, or `null` when none ran recently.

## Example Usage

```typescript
import { GeoPersonaGenerationJob } from "@usenotra/sdk/models";

let value: GeoPersonaGenerationJob = {
  id: "<id>",
  status: "queued",
  personaId: null,
  startedAt: "<value>",
  error: "<value>",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `id`                                                                                   | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `status`                                                                               | [models.GeoPersonaGenerationJobStatus](../models/geo-persona-generation-job-status.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `personaId`                                                                            | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `startedAt`                                                                            | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `error`                                                                                | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |