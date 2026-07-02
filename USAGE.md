<!-- Start SDK Example Usage [usage] -->
```typescript
import { Notra } from "@usenotra/sdk";

const notra = new Notra();

async function run() {
  const result = await notra.discovery.getPublicApiStatus();

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->