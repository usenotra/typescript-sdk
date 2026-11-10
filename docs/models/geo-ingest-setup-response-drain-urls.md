# GeoIngestSetupResponseDrainUrls

Endpoints a Vercel log drain or Cloudflare Logpush job posts request logs to, authenticated with the tracking token.

## Example Usage

```typescript
import { GeoIngestSetupResponseDrainUrls } from "@usenotra/sdk/models";

let value: GeoIngestSetupResponseDrainUrls = {
  vercel: "<value>",
  cloudflare: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `vercel`           | *string*           | :heavy_check_mark: | N/A                |
| `cloudflare`       | *string*           | :heavy_check_mark: | N/A                |