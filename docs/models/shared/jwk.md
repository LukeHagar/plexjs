# Jwk

JSON Web Key for device authentication

## Example Usage

```typescript
import { Jwk } from "@parke.dev/plexjs/models/shared";

let value: Jwk = {
  crv: "Ed25519",
  kty: "OKP",
};
```

## Fields

| Field              | Type               | Required           | Description        | Example            |
| ------------------ | ------------------ | ------------------ | ------------------ | ------------------ |
| `crv`              | *string*           | :heavy_minus_sign: | N/A                | Ed25519            |
| `kid`              | *string*           | :heavy_minus_sign: | N/A                |                    |
| `kty`              | *string*           | :heavy_minus_sign: | N/A                | OKP                |
| `x`                | *string*           | :heavy_minus_sign: | N/A                |                    |