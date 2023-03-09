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

const Circle = ({color}) => {
  return <View
    style={{
      width: 8,
      height: 8,
      margin: 2,
      padding: 9,
      borderRadius: 10,
      backgroundColor: color,
      justifyContent: 'flex-end',
      alignItems: 'center'
    }}
  />;
}

const colorArray = ['#F5BA25','#1B83F0'] // gold, blue in that order

function GenerateFlatList({ chosenPlacesofPower }) {

  return <FlatList
    data={chosenPlacesofPower}
    renderItem={({ item }) =>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <Text>{item.name}</Text>
        <Circle color={colorArray[item.colorIndex]}/> 
      </View>
    }
  />;
}

export default class App extends Component {
  state = {
    numberOfPlayers: 2,
    hasLuxEtTenebrae: false,
    hasPerlaeImperii: false,
    isVisible: false,
    radioButtonData: [
      {
        id: '2', // acts as primary key, should be unique and non-empty string
        label: '2',
        value: '2',
        onPress: () => this.setState({ numberOfPlayers: 2 })
      },
      {
        id: '3', // acts as primary key, should be unique and non-empty string
        label: '3',
        value: '3',
        onPress: () => this.setState({ numberOfPlayers: 3 })
      },
      {
        id: '4', // acts as primary key, should be unique and non-empty string
        label: '4',
        value: '4',
        onPress: () => this.setState({ numberOfPlayers: 4 })
      },
      {
        id: '5', // acts as primary key, should be unique and non-empty string
        label: '5',
        value: '5',
        onPress: () => this.setState({ numberOfPlayers: 5 })
      }
    ],
    possiblePlacesOfPower
      : [['Catacombs of the Dead', 'Sacrificial Pit'],
      ['Coral Castle', 'Sunken Reef'],
      ['Dwarven Mines', 'Cursed Forge'],
      [`Alchemist's Tower`, 'Sacred Grove'],
      [`Sorceror's Bestiary`, `Dragon's Lair`]
      ]
  };

  chosenPlacesofPower = []

  OnPressRadioButton = radioButtonData => this.setState({ radioButtonData });

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
      console.log(`totalPlacesOfPowerToChoose = ${totalPlacesOfPowerToChoose}`)
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
    } else {
      this.ChoosePoPTileFaces(totalPlacesOfPowerToChoose);
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

    // randomly pick an unchosen place of power tile until the needed number has been chosen
    while (totalPlacesOfPowerToChoose > 0) {
      var randomNum = Math.floor(Math.random() * this.state.possiblePlacesOfPower.length);
      if (!(randomNumChosenArr[randomNum])) {
        console.log(`randomNum = ${randomNum}`);

        console.log(`totalPlacesOfPowerToChoose = ${totalPlacesOfPowerToChoose}`);
        var chosenTile = this.state.possiblePlacesOfPower[randomNum];
        console.log(`chosenTile = ${chosenTile}`);
        randomNumChosenArr[randomNum] = true;

        // randomly choose one side of the PoP tile and add to array of chosenPlacesofPower
        var numSideOfTile = Math.round(Math.random()); // let numSideOfTile also match the color on the face, i.e. 0 = gold, 1 = blue
        var sideOfTileName = chosenTile[numSideOfTile];
        var chosenPoP = {name : sideOfTileName, colorIndex : numSideOfTile};
        this.chosenPlacesofPower.push(chosenPoP);
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
            <Text>Number of Players</Text>
            <RadioGroup
              radioButtons={this.state.radioButtonData}
              onPress={this.OnPressRadioButton}
              layout='row'
            />
          </View>
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