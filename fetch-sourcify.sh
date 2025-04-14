curl "https://sourcify.dev/server/v2/contracts/23294?sort=desc&limit=200" | jq > output-sourcify/verified-sapphire-contracts.json
curl "https://sourcify.dev/server/v2/contracts/23294?sort=desc&limit=200&afterMatchId=5324909" | jq >> output-sourcify/verified-sapphire-contracts.json

curl "https://sourcify.dev/server/v2/contract/23294/0x39d22B78A7651A76Ffbde2aaAB5FD92666Aca520?fields=all" | jq > output-sourcify/verified-sapphire-contract.json
