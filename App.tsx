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
    isVisible: false
  }
  // const isDarkMode = useColorScheme() === 'dark';

  // const [hasLuxEtTenebrae, setHasLuxEtTenebrae] = useState(false)
  // const [hasPerlaeImperii, setHasPerlaeImperii] = useState(false)
  // const [numberOfPlayers, setNumberOfPlayers] = useState(2)

  GeneratePlacesOfPower() {
    console.log(`Press happened.\nhasLuxEtTenebrae = ${this.state.hasLuxEtTenebrae}\nhasPerlaeImperii = ${this.state.hasPerlaeImperii}\nCount of players: ${this.state.numberOfPlayers}`);
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
                onValueChange={(value) => this.setState({hasLuxEtTenebrae: value})}
                // onPress={() => this.setState({hasLuxEtTenebrae: !this.state.hasLuxEtTenebrae})}
            />
            </View>
            <View>
              <Text>{`Perlae Imperii: ${this.state.hasPerlaeImperii}`}</Text>
              <CheckBox
                disabled={false}
                value={this.state.hasPerlaeImperii}
                // onValueChange={(value) => this.setState(hasPerlaeImperii: value)}
            />
            </View>
          </View>
          <View>
            <View>
              <Button
                title="Generate Randomized Places of Power"
                onPress={() => this.GeneratePlacesOfPower()}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

// export default App;
