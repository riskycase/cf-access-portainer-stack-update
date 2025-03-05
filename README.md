# Hello world javascript action

This action prints sends an empty post request to the endpoint specified behind cloudflare access

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
