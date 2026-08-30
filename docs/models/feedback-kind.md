# FeedbackKind

What kind of feedback this is.

## Example Usage

```typescript
import { FeedbackKind } from "@usenotra/sdk/models";

let value: FeedbackKind = "bug";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"bug" | "feature" | "praise" | "question" | "other" | Unrecognized<string>
```