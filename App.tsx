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
  Button
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

// function Section({ children, title }: SectionProps): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }

// function App(): JSX.Element {
export default class App extends Component {
  state = {
    numberOfPlayers: 2,
    hasLuxEtTenebrae: false,
    hasPerlaeImperii: false,
    isVisible: false,
    possiblePlacesOfPower
    : {
      1: ['Catacombs of the Dead', 'Sacrificial Pit'],
      2: ['Coral Castle', 'Sunken Reef'],
      3: ['Dwarven Mines', 'Cursed Forge'],
      4: [`Alchemist's Tower`, 'Sacred Grove'],
      5: [`Sorceror's Bestiary`, `Dragon's Lair`]
    }
  };

  randomizedPlacesOfPower: string[] = []

  ResetPossiblePlacesOfPower() {
    this.setState({ possiblePlacesOfPower
      : {
      1: ['Catacombs of the Dead', 'Sacrificial Pit'],
      2: ['Coral Castle', 'Sunken Reef'],
      3: ['Dwarven Mines', 'Cursed Forge'],
      4: [`Alchemist's Tower`, 'Sacred Grove'],
      5: [`Sorceror's Bestiary`, `Dragon's Lair`]
    }})
  }

  RandomizePlacesOfPower() {
    this.ResetPossiblePlacesOfPower();
    this.randomizedPlacesOfPower = []
    console.log(`Press happened.\nhasLuxEtTenebrae = ${this.state.hasLuxEtTenebrae}\nhasPerlaeImperii = ${this.state.hasPerlaeImperii}\nCount of players: ${this.state.numberOfPlayers}`);
    this.setState({isVisible: true});
    var totalPlacesOfPowerToChoose = 5;
    if (this.state.hasLuxEtTenebrae || this.state.hasPerlaeImperii) {
      totalPlacesOfPowerToChoose = this.state.numberOfPlayers + 2;
      // TODO: add tiles to possiblePlacesOfPower based on which expansion is present
    }

    // initialize an array to keep track of if a randomized number has already been chosen or not
    let randomNumChosenArr = [];
    for (let i = 0; i < totalPlacesOfPowerToChoose; i++) {
      randomNumChosenArr.push(false);
    }

    while (totalPlacesOfPowerToChoose > 0) {
      var randomNum = Math.floor(Math.random() * Object.keys(this.state.possiblePlacesOfPower).length + 1);
      if (!(randomNumChosenArr[randomNum])) {
        console.log(`randomNum = ${randomNum}`);
        
        console.log(`totalPlacesOfPowerToChoose = ${totalPlacesOfPowerToChoose}`);
        var chosenTile = this.state.possiblePlacesOfPower[randomNum];
        console.log(`chosenTile = ${chosenTile}`);
        randomNumChosenArr[randomNum] = true;

        // randomly choose side of the tile and add to array of randomizedPlacesOfPower
        var sideOfTile = chosenTile[Math.round(Math.random())];
        this.randomizedPlacesOfPower.push(sideOfTile);
        console.log(`randomizedPlacesOfPower = ${this.randomizedPlacesOfPower}`);
        console.log('');

        totalPlacesOfPowerToChoose -= 1;
      }      
    }
    console.log('out of while loop')
    for (let i = 0; i < totalPlacesOfPowerToChoose; i++) {
      const randomNum = Math.floor(Math.random() * Object.keys(this.state.possiblePlacesOfPower).length + 1);
      if (randomNum in this.state.possiblePlacesOfPower) {

      }
      
      console.log(chosenTile)
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
                onPress={() => this.RandomizePlacesOfPower()}
              />
              {this.state.isVisible?<Text>`{this.randomizedPlacesOfPower}`</Text>:null}
            </View>
          </View>
        </View>
      </View>
    );
  }
}

// export default App;
