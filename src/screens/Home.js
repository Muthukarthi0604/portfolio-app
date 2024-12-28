import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, Animated, ScrollView, Image } from 'react-native';

const Home = () => {
 
  const fadeAnim = new Animated.Value(0); 

  useEffect(() => {
    
    Animated.timing(fadeAnim, {
      toValue: 1, 
      duration: 1500, 
      useNativeDriver: true, 
    }).start(); 
  }, []); 

  const openLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView style={styles.container}>
      <Animated.View style={[styles.header, { opacity: fadeAnim }]}>
        <Text style={styles.title}>M.Muthu Karthi</Text>
        <Text style={styles.title}>Full-Stack Developer</Text>
        <Text style={styles.title}>Portfolio</Text>
      </Animated.View>

      <View style={styles.section}>
     
        <Image
          source={require('../../assets/images/me.jpg')} 
          style={styles.profileImage}
        />
        <Text style={styles.sectionTitle}>About Me</Text>
        <Text style={styles.text}>
          Hello! I'm a passionate Full-Stack Developer with experience in building web and mobile applications.
          I specialize in JavaScript,Bootstrap, React, Node.js, Express, and databases like MongoDB and SQL.
        </Text>
      </View>

      <View style={styles.section}>


        <Text style={styles.sectionTitle}>Skills</Text>
        <Text style={styles.text}>- Frontend: React, React Native, HTML, CSS, JavaScript,Bootstrap</Text>
        <Text style={styles.text}>- Backend: Node.js, Express, RESTful APIs</Text>
        <Text style={styles.text}>- Databases: MongoDB</Text>
        <Text style={styles.text}>- Tools: GitHub</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contact</Text>
        <TouchableOpacity style={styles.contactButton} onPress={() => openLink('mailto:muthukarthikadev06@gmail.com')}>
          <Text style={styles.contactText}>muthukarthikadev06@gmail.com</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.contactButton} onPress={() => openLink('https://www.linkedin.com/in/muthu-karthi-m-a31024236/')}>
          <Text style={styles.contactText}>LinkedIn</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.contactButton} onPress={() => openLink('tel:+917339105282')}>
          <Text style={styles.contactText}>Phone: +91 7339105282</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f4f7f6',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 40,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#333',
    fontFamily: 'Roboto', 
    marginBottom: 5,
  },
  section: {
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 10,
    color: '#333',
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: '#666',
  },
  profileImage: {
    width: 120, 
    height: 120, 
    borderRadius: 60, 
    alignSelf: 'center', 
    marginBottom: 20, 
  },
  contactButton: {
    backgroundColor: '#007bff',
    padding: 12,
    marginVertical: 8,
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
  },
  contactText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  footer: {
    alignItems: 'center',
    marginTop: 20,
  },
  footerText: {
    fontSize: 14,
    color: '#888',
  },
});

export default Home;
