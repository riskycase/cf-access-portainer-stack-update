# Hello world javascript action

This action prints "Hello World" or "Hello" + the name of a person to greet to the log.

## Inputs

### `cf-client-id`

**Required** Client ID provided by Cloudflare Access

### `cf-client-secret`

**Required** Client secret provided by Cloudflare Access

### `endpoint`

**Required** Endpoint to make post request to

## Example usage

```yaml
uses: riskycase/cf-access-portainer-stack-update
with:
  cf-client-id: ${{ secrets.cf-client-id }}
  cf-client-secret: ${{ secrets.cf-client-secret }}
  endpoint: ${{ secrets.endpoint }}
```
