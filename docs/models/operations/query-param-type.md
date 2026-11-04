# QueryParamType

Activity to list: pull requests merged into the default branch, commits on the default branch, or releases published in the repository.

## Example Usage

```typescript
import { QueryParamType } from "@usenotra/sdk/models/operations";

let value: QueryParamType = "pull_requests";
```

## Values

```typescript
"pull_requests" | "commits" | "releases"
```