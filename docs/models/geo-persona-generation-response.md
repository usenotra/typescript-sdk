# GeoPersonaGenerationResponse

## Example Usage

```typescript
import { GeoPersonaGenerationResponse } from "@usenotra/sdk/models";

let value: GeoPersonaGenerationResponse = {
  job: {
    id: "<id>",
    status: "completed",
    personaId: "<id>",
    startedAt: "<value>",
    error: "<value>",
  },
  organization: {
    id: "<id>",
    slug: "<value>",
    name: "<value>",
    logo: null,
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `job`                                                                                                        | [models.GeoPersonaGenerationJob](../models/geo-persona-generation-job.md)                                    | :heavy_check_mark:                                                                                           | The project's latest generation job, or `null` when none ran recently.                                       |
| `organization`                                                                                               | [models.GeoPersonaGenerationResponseOrganization](../models/geo-persona-generation-response-organization.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |