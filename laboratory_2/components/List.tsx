import { StyleSheet, Image,  View, FlatList, Text, StatusBar, ImageSourcePropType } from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const DATA = [
  {
    language: 'JavaScript',
    text: 'Мой опыт изучения составляет 2 года 3 месяца',
    logo: require('@/assets/images//JavaScript-logo.png'),
  },
  {
    language: 'Python',
    text:'Мой опыт изучения составляет 3 месяца',
    logo: require('@/assets/images/Python-logo-notext.png'),
  },
  {
    language: 'Java',
    text: 'Мой опыт изучения составляет 1 месяц',
    logo: require('@/assets/images/Java_logo.png'),
  },
];
  
type ItemProps = {
  language: string,
  text: string,
  logo: ImageSourcePropType,
};
  
const Item = ({language, text, logo}: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.language}>{language}</Text>
    <Text style={styles.text}>{text}</Text>
    <Image style={styles.logo} source={logo} />
  </View>
);

export default function List() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <FlatList
           data={DATA}
          renderItem={({item}) => <Item language={item.language} text={item.text} logo={item.logo} />}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  marginTop: StatusBar.currentHeight || 0,
},

item: {
  backgroundColor: '#B182B1',
  padding: 20,
  marginVertical: 8,
  marginHorizontal: 16,
},
language: {
  fontSize: 32,
},
text: {
  fontSize: 14,
},
logo: {
  width: 50,
  height: 50,
},
});
