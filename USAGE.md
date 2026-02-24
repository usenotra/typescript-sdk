<!-- Start SDK Example Usage [usage] -->
```typescript
import { Notra } from "@usenotra/sdk";

const notra = new Notra({
  bearerAuth: process.env["NOTRA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await notra.content.listPosts({
    organizationId: "org_123",
  });

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->