# Res-Arcana-Randomizer
My first attempt at making a mobile app - 
the goal of this project is to create a mobile app to randomize Res Arcana places of power.

The user should be able to check which expansions for the game they have, and thus affect the pool of places of power to randomize and generate from.
The user should be able to select the number of players playing, ranging from two to five, as this affects the total places of power in play for the game and is affected by if the user is using any expansions or not.
With either expansion, the number of places of power in play is as follows:
Player count / Places of power
2 / 4
3 / 5
4 / 6
5 / 7

Besides the caveat of expansions affecting the places of power in play (if only the base game is used, then all five tiles for the places of power are used), each place of power tile is double-sided, i.e. each tile has two places of power on it.
As such, the following must occur:
- The appropriate number of tiles must be randomly chosen, based on if only using the base game, and if not, the total number of players
- A place of power must be randomly chosen from each chosen tile
