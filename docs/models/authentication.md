# Authentication


## Supported Types

### `models.AuthenticationAPIKey`

```typescript
const value: models.AuthenticationAPIKey = {
  type: "apiKey",
};
```

### `models.AuthenticationOauth`

```typescript
const value: models.AuthenticationOauth = {
  type: "oauth",
  accountId: "<id>",
  scopes: [],
};
```

