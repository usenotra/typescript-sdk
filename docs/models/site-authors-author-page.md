# SiteAuthorsAuthorPage

Layout of every author page: inline puts the avatar beside the name, stacked puts it above.

## Example Usage

```typescript
import { SiteAuthorsAuthorPage } from "@usenotra/sdk/models";

let value: SiteAuthorsAuthorPage = "inline";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"inline" | "stacked" | Unrecognized<string>
```