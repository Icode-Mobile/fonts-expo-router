import { useRouter } from 'expo-router';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Page() {
  const { push } = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Fontes Personalizada</Text>
        <Text style={styles.subtitle}>Expo Router com Expo Font</Text>
        <Button
          title='Ir para Home'
          color={'#61afc7'}
          onPress={() => push('/home')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    maxWidth: 960,
    marginHorizontal: 'auto',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    fontFamily: 'Inter_600SemiBold',
  },
  subtitle: {
    fontSize: 26,
    color: '#38434D',
    fontFamily: 'Inter_300Light',
  },
});
