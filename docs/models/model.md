# Model

Model to respond with. Defaults to auto, which lets Notra choose.

## Example Usage

```typescript
import { Model } from "@usenotra/sdk/models";

let value: Model = "auto";
```

## Values

```typescript
"auto" | "anthropic/claude-opus-5" | "anthropic/claude-opus-4.8" | "anthropic/claude-sonnet-5" | "anthropic/claude-sonnet-4.6" | "anthropic/claude-haiku-4.5" | "openai/gpt-5.4" | "openai/gpt-5.5"
```