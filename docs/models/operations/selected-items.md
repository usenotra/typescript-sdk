# SelectedItems

## Example Usage

```typescript
import { SelectedItems } from "@usenotra/sdk/models/operations";

let value: SelectedItems = {};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `commitShas`                                                                     | *string*[]                                                                       | :heavy_minus_sign:                                                               | N/A                                                                              |
| `pullRequestNumbers`                                                             | [operations.PullRequestNumber](../../models/operations/pull-request-number.md)[] | :heavy_minus_sign:                                                               | N/A                                                                              |
| `releaseTagNames`                                                                | *operations.ReleaseTagNameUnion*[]                                               | :heavy_minus_sign:                                                               | N/A                                                                              |