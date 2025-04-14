echo download https://github.com/oasisprotocol/cli/releases

echo $ oasis network show committees > "output-cli/oasis network show committees"
echo $ oasis network show entities > "output-cli/oasis network show entities"
echo $ oasis network show gas-costs > "output-cli/oasis network show gas-costs"
echo $ oasis network show native-token > "output-cli/oasis network show native-token"
echo $ oasis network show nodes > "output-cli/oasis network show nodes"
echo $ oasis network show parameters > "output-cli/oasis network show parameters"
echo $ oasis network show paratimes > "output-cli/oasis network show paratimes"
echo $ oasis network show validators > "output-cli/oasis network show validators"

./oasis network show committees >> "output-cli/oasis network show committees"
./oasis network show entities >> "output-cli/oasis network show entities"
./oasis network show gas-costs >> "output-cli/oasis network show gas-costs"
./oasis network show native-token >> "output-cli/oasis network show native-token"
./oasis network show nodes >> "output-cli/oasis network show nodes"
./oasis network show parameters >> "output-cli/oasis network show parameters"
./oasis network show paratimes >> "output-cli/oasis network show paratimes"
./oasis network show validators >> "output-cli/oasis network show validators"
