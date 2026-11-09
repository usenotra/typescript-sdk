# GeoIngestTokenResponseWebScript

notra.js: the auto-updating URL and the current build pinned with Subresource Integrity. Only present when web analytics is enabled for the workspace.

## Example Usage

```typescript
import { GeoIngestTokenResponseWebScript } from "@usenotra/sdk/models";

let value: GeoIngestTokenResponseWebScript = {
  url: "https://warlike-hubris.org/",
  pinnedUrl: "https://sniveling-kiss.name/",
  integrity: "<value>",
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `url`                                                                                             | *string*                                                                                          | :heavy_check_mark:                                                                                | Always serves the latest build.                                                                   |
| `pinnedUrl`                                                                                       | *string*                                                                                          | :heavy_check_mark:                                                                                | Serves exactly this build forever; it never updates.                                              |
| `integrity`                                                                                       | *string*                                                                                          | :heavy_check_mark:                                                                                | Subresource Integrity value for pinnedUrl (sha384). Use it with crossorigin="anonymous".          |
| `collectUrl`                                                                                      | *string*                                                                                          | :heavy_minus_sign:                                                                                | Where page views go when the script loads from Notra's script host; set it as the tag's data-api. |