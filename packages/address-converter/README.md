# Address converter

A simple converter between `ETH` address and `Ethermint`/`plugchain` addresses.

## Installation

```sh
npm install @onp/address-converter
```

## Usage

### Converter

```ts
import { ethToGx, gxToEth } from '@onp/address-converter'

let address = ethToGx('0x14574a6DFF2Ddf9e07828b4345d3040919AF5652')
// "gx1z3t55m0l9h0eupuz3dp5t5cypyv674jjg6cx74"

let address = gxToEth('gx1z3t55m0l9h0eupuz3dp5t5cypyv674jjg6cx74')
// "0x14574a6DFF2Ddf9e07828b4345d3040919AF5652"
```

### Decoders

```ts
import { ETH, PLUGCHAIN } from '@onp/address-converter'
let hex = ETH.decoder('0xe2D61e49ff8a9d724CC54d338D8076F878aC6b71')
// hex.toString('hex') === "e2d61e49ff8a9d724cc54d338d8076f878ac6b71"

hex = PLUGCHAIN.decoder('gx1uttpuj0l32whynx9f5ecmqrklpu2c6m32s50qk')
// hex.toString('hex') === "e2d61e49ff8a9d724cc54d338d8076f878ac6b71"
```

### Encoders

```ts
import { ETH, PLUGCHAIN } from '@onp/address-converter'
let address = ETH.encoder(
  Buffer.from('e2d61e49ff8a9d724cc54d338d8076f878ac6b71', 'hex'),
)
// address === "0xe2D61e49ff8a9d724CC54d338D8076F878aC6b71"

address = PLUGCHAIN.encoder(
  Buffer.from('e2d61e49ff8a9d724cc54d338d8076f878ac6b71', 'hex'),
)
// address === "gx1uttpuj0l32whynx9f5ecmqrklpu2c6m32s50qk"
```