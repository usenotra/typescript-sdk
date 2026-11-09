import { NotraApi } from "../generated/api.js";
import { Transport, parseBody } from "./transport.js";
import type { HttpMethod, NotraOptions, RequestOptions } from "./types.js";

/**
 * The Notra API client.
 *
 * ```ts
 * const notra = new Notra(); // reads NOTRA_API_KEY
 * const { projects } = await notra.geo.listGeoProjects();
 * ```
 */
export class Notra extends NotraApi {
  constructor(options: NotraOptions = {}) {
    super(new Transport(options));
  }

  /**
   * Calls any endpoint with this client's auth, retries and errors, for
   * endpoints newer than this SDK version. Prefer the typed methods.
   */
  async request<T = unknown>(
    method: HttpMethod,
    path: string,
    init: { query?: Record<string, unknown>; body?: unknown } = {},
    options?: RequestOptions
  ): Promise<T> {
    const response = await this.transport.send({ method, path, query: init.query, body: init.body }, options);
    return (await parseBody(response)) as T;
  }
}
