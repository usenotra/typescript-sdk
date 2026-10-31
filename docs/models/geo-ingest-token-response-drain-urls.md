# GeoIngestTokenResponseDrainUrls

Endpoints a Vercel log drain or Cloudflare Logpush job posts request logs to, authenticated with the tracking token.

## Example Usage

```typescript
import { GeoIngestTokenResponseDrainUrls } from "@usenotra/sdk/models";

let value: GeoIngestTokenResponseDrainUrls = {
  vercel: "<value>",
  cloudflare: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `vercel`           | *string*           | :heavy_check_mark: | N/A                |
| `cloudflare`       | *string*           | :heavy_check_mark: | N/A                |