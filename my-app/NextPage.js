import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';


const NextPage = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: 'https://www.pixel4k.com/wp-content/uploads/2018/11/spectacular-iron-man-4k_1541968331.jpg' }} // Replace with your image URL
      />
      <Text style={styles.description}>
        This is the KSP DATATHON official Mobile Application{'\n'} 
        Bro Fuck OFF {'\n'} 
        The app was developed by a team of passionate developers in their free time for fun and to showcase{'\n'}what they can do with code.
        2019/05/30 - 2019/06/14
      </Text>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  image: {
    width: 300,
    height: 500,
    marginBottom: 50,
  },
  description: {
    marginBottom: 10,
    color: '#fff',
  },
  video: {
    width: 300,
    height: 200,
  },
});

export default NextPage;
