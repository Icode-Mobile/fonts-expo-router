import { StyleSheet, Text, View } from 'react-native';

export default function home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home recebendo fontes externas</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 60,
  },
  title: {
    fontSize: 20,
    fontFamily: 'Inter_400Regular',
  },
});
