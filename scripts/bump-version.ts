// After a sync, bumps the version so merging the sync PR publishes a release:
// minor when the API spec changed, patch when only the notra.js pins changed.
// Usage: bun scripts/bump-version.ts, prints the new version or nothing.
import { $ } from "bun";

const changed = async (path: string) => (await $`git diff --quiet -- ${path}`.nothrow()).exitCode !== 0;
const spec = await changed("spec/openapi.json");
const pins = await changed("src/tracking/script/releases.ts");
if (spec || pins) {
  const pkgFile = new URL("../package.json", import.meta.url);
  const pkg = (await Bun.file(pkgFile).json()) as { version: string };
  const [major = 0, minor = 0, patch = 0] = pkg.version.split(".").map(Number);
  const version = spec ? `${major}.${minor + 1}.0` : `${major}.${minor}.${patch + 1}`;
  await Bun.write(pkgFile, (await Bun.file(pkgFile).text()).replace(`"version": "${pkg.version}"`, `"version": "${version}"`));
  const versionFile = new URL("../src/version.ts", import.meta.url);
  await Bun.write(versionFile, (await Bun.file(versionFile).text()).replace(`"${pkg.version}"`, `"${version}"`));
  const notes = [spec ? "- Synced with the latest Notra API spec." : "", pins ? "- Pins the latest notra.js builds, with their integrity hashes." : ""].filter(Boolean).join("\n");
  const changelogFile = new URL("../CHANGELOG.md", import.meta.url);
  const changelog = await Bun.file(changelogFile).text();
  await Bun.write(changelogFile, changelog.replace("# Changelog\n", `# Changelog\n\n## ${version}\n\n${notes}\n`));
  console.log(version);
}
