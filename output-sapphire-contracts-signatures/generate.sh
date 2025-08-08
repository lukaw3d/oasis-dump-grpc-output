git clone git@github.com:oasisprotocol/sapphire-paratime.git
cd sapphire-paratime
pnpm i
docker run -v "${PWD}:${PWD}" --workdir "${PWD}" --rm -it ethereum/solc:stable --include-path contracts/node_modules --base-path . contracts/**/*.sol --hashes \
  | node -e 'console.log(require("fs").readFileSync(0, "utf-8").replace(/^[0-9a-fA-F]{5,}/mg, hex => hex + " " + Buffer.from(hex, "hex").toString("base64")))'
