import React, { useContext } from 'react';
import { ScrollView, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
// import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { AppContext } from '../context/AppConetxt';

import ProductCard from '../components/ProductCard'
import Banner from '../components/Banner';

export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
  const { products } = useContext(AppContext);

  const bannerUrl = 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/f8675c102693197.5f4d80649d1ce.jpg'


  return (
    <View style={styles.container}>
      {!products && <Text>No products were found!</Text>}
      <Banner url={bannerUrl} />
      {products &&
        <View style={styles.productContainer}>
          <FlatList
            data={products}
            keyExtractor={(item: any) => item.id}
            renderItem={({ item, index }) =>
              <>
                {products[(index + 1)]?.image ? <Banner url={products[(index + 1)]?.image} /> : null}
                <ProductCard url={item?.image} >
                  {/* <Image
                    key={index}
                    source={{ uri: item?.image }}
                    style={styles.productImage}
                  /> */}
                  <Text style={styles.productTitle}>{item?.title}</Text>
                  <Text style={styles.productText}>{item?.description}</Text>
                </ProductCard>
              </>
            }
          />
        </View>
      }
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 50,
    paddingBottom: 20,
    backgroundColor: 'black'
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  productTitle: {
    textAlign: "center",
    fontSize: 12,
    fontWeight: "bold"
  },
  productText: {
    textAlign: "center",
    fontSize: 12,
  },
  productImage: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    borderRadius: 10
  },
  productContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  }
});
