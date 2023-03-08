/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { Component, useState } from 'react';
import type { PropsWithChildren } from 'react';
import CheckBox from '@react-native-community/checkbox';
import RadioGroup, { RadioButtonProps } from 'react-native-radio-buttons-group';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  FlatList
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

function GenerateFlatList({ chosenPlacesofPower }) {

  return <FlatList
    data={chosenPlacesofPower
    }
    renderItem={({ item }) => <Text>{item}</Text>}
  />;
}

// function App(): JSX.Element {
export default class App extends Component {
  state = {
    numberOfPlayers: 2,
    hasLuxEtTenebrae: false,
    hasPerlaeImperii: false,
    isVisible: false,
    possiblePlacesOfPower
      : [['Catacombs of the Dead', 'Sacrificial Pit'],
      ['Coral Castle', 'Sunken Reef'],
      ['Dwarven Mines', 'Cursed Forge'],
      [`Alchemist's Tower`, 'Sacred Grove'],
      [`Sorceror's Bestiary`, `Dragon's Lair`]
      ]
  };

  chosenPlacesofPower: string[] = []

  Generate() {
    this.setState({
      possiblePlacesOfPower
        : [['Catacombs of the Dead', 'Sacrificial Pit'],
        ['Coral Castle', 'Sunken Reef'],
        ['Dwarven Mines', 'Cursed Forge'],
        [`Alchemist's Tower`, 'Sacred Grove'],
        [`Sorceror's Bestiary`, `Dragon's Lair`]
        ]
    }, () => { this.ChoosePoPTiles(); });
  }

  ChoosePoPTiles() {
    this.chosenPlacesofPower = []
    var expansionPlacesOfPower = []
    this.setState({ isVisible: true });
    var totalPlacesOfPowerToChoose = 5;
    if (this.state.hasLuxEtTenebrae || this.state.hasPerlaeImperii) {
      totalPlacesOfPowerToChoose = this.state.numberOfPlayers + 2;
      if (this.state.hasLuxEtTenebrae) {
        expansionPlacesOfPower.push(['Temple of the Abyss', 'Gate of Hell']);
        expansionPlacesOfPower.push(['Dragon Aerie', 'Crystal Keep']);
      }
      if (this.state.hasPerlaeImperii) {
        expansionPlacesOfPower.push(['Blood Isle', 'Pearl Bed']);
        expansionPlacesOfPower.push(['Alchemical Workshop', 'Mystical Menagerie']);
      }
      console.log(`expansionPlacesOfPower = ${expansionPlacesOfPower}`);
      this.setState({ possiblePlacesOfPower: [...this.state.possiblePlacesOfPower, ...expansionPlacesOfPower] }, () => { this.ChoosePoPTileFaces(totalPlacesOfPowerToChoose); });
    }
  }

  ChoosePoPTileFaces(totalPlacesOfPowerToChoose: number) {
    console.log(this.state.possiblePlacesOfPower);
    // initialize an array to keep track of if a randomized number has already been chosen or not
    let randomNumChosenArr = [];
    for (let i = 0; i < totalPlacesOfPowerToChoose; i++) {
      randomNumChosenArr.push(false);
    }
    console.log('');
    console.log(`length of possiblePlacesOfPower = ${(this.state.possiblePlacesOfPower).length}`);
    console.log('');
    while (totalPlacesOfPowerToChoose > 0) {
      var randomNum = Math.floor(Math.random() * this.state.possiblePlacesOfPower.length);
      if (!(randomNumChosenArr[randomNum])) {
        console.log(`randomNum = ${randomNum}`);

        console.log(`totalPlacesOfPowerToChoose = ${totalPlacesOfPowerToChoose}`);
        var chosenTile = this.state.possiblePlacesOfPower[randomNum];
        console.log(`chosenTile = ${chosenTile}`);
        randomNumChosenArr[randomNum] = true;

        // randomly choose side of the tile and add to array of chosenPlacesofPower

        var sideOfTile = chosenTile[Math.round(Math.random())];
        this.chosenPlacesofPower
          .push(sideOfTile);
        console.log(`chosenPlacesofPower = ${this.chosenPlacesofPower}`);
        console.log('');

        totalPlacesOfPowerToChoose -= 1;
      }
    }
  }

  render() {
    return (
      <View>
        <Header />
        <View>
          <View>
            <Text>Expansions</Text>
            <View>
              <Text>{`Lux et Tenebrae: ${this.state.hasLuxEtTenebrae}`}</Text>
              <CheckBox
                disabled={false}
                value={this.state.hasLuxEtTenebrae}
                onValueChange={(value) => this.setState({ hasLuxEtTenebrae: value })}
              />
            </View>
            <View>
              <Text>{`Perlae Imperii: ${this.state.hasPerlaeImperii}`}</Text>
              <CheckBox
                disabled={false}
                value={this.state.hasPerlaeImperii}
                onValueChange={(value) => this.setState({ hasPerlaeImperii: value })}
              />
            </View>
          </View>
          <View>
            <View>
              <Button
                title="Generate Randomized Places of Power"
                onPress={() => this.Generate()}
              />
              {/* {this.state.isVisible?<Text>`{this.chosenPlacesofPower
          }`</Text>:null} */}
              {this.state.isVisible
                ? <GenerateFlatList
                  chosenPlacesofPower
                  ={this.chosenPlacesofPower
                  }
                />
                : null}
            </View>
          </View>
        </View>
      </View>
    );
  }
}

// export default App;
