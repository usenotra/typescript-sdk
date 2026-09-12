# GeoContentBriefDocumentBaseline

## Example Usage

```typescript
import { GeoContentBriefDocumentBaseline } from "@usenotra/sdk/models";

let value: GeoContentBriefDocumentBaseline = {
  sourcePromptId: "<id>",
  mentionedEngines: 4136.22,
  totalEngines: 8864,
  engines: [],
  competitorMentions: [],
  citedDomains: [],
  capturedAt: "<value>",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `sourcePromptId`                                                                         | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `mentionedEngines`                                                                       | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `totalEngines`                                                                           | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `engines`                                                                                | [models.GeoContentBriefDocumentEngine](../models/geo-content-brief-document-engine.md)[] | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `competitorMentions`                                                                     | [models.CompetitorMention](../models/competitor-mention.md)[]                            | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `citedDomains`                                                                           | [models.CitedDomain](../models/cited-domain.md)[]                                        | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `capturedAt`                                                                             | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |