# SubmitOrganizationFeedbackRequest

## Example Usage

```typescript
import { SubmitOrganizationFeedbackRequest } from "@usenotra/sdk/models/operations";

let value: SubmitOrganizationFeedbackRequest = {
  organizationSlug: "acme",
  body: {
    message: "The search tool times out when the query has quotes.",
    title: "Search times out on quoted queries",
    kind: "bug",
    sentiment: "negative",
    source: "mcp",
    agentClient: "claude-code",
    agentModel: "claude-opus-5",
    toolVersion: "1.2.0",
    contextUrl: "https://docs.example.com/api/search",
  },
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 | Example                                                                     |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `organizationSlug`                                                          | *string*                                                                    | :heavy_check_mark:                                                          | Your organization slug, as shown in your feedback URL on the Feedback page. | acme                                                                        |
| `body`                                                                      | [models.SubmitFeedbackRequest](../../models/submit-feedback-request.md)     | :heavy_check_mark:                                                          | N/A                                                                         |                                                                             |