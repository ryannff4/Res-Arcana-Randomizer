/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import CheckBox from '@react-native-community/checkbox';
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

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

type State = {
  hasLuxEtTenebrae: boolean;
  hasPerlaeImperii: boolean;
};

function GeneratePlacesOfPower(hasLuxEtTenebrae : boolean, hasPerlaeImperii : boolean) {
  console.log(`Press happened.\nhasLuxEtTenebrae = ${hasLuxEtTenebrae}\nhasPerlaeImperii = ${hasPerlaeImperii}`)
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [hasLuxEtTenebrae, setHasLuxEtTenebrae] = useState(false)
  const [hasPerlaeImperii, setHasPerlaeImperii] = useState(false)




  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Expansions">   
            <View style={{flexDirection:'column',flex:6}}>
              <Text>{`Lux et Tenebrae: ${hasLuxEtTenebrae}`}</Text>
              <CheckBox
                disabled={false}
                value={hasLuxEtTenebrae}
                onValueChange={(value) => setHasLuxEtTenebrae(value)}
              />
            </View>
            <View style={{flexDirection:'column',flex:6}}>
              <Text>{`Perlae Imperii: ${hasPerlaeImperii}`}</Text>
              <CheckBox
                disabled={false}
                value={hasPerlaeImperii}
                onValueChange={(value) => setHasPerlaeImperii(value)}
              />
            </View>
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            <View>
              <Button
                title="Generate Randomized Places of Power"
                onPress={() => GeneratePlacesOfPower(hasLuxEtTenebrae, hasPerlaeImperii)}
              />
            </View>
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 20,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  }
});

export default App;
