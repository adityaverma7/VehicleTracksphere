import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Header = ({ title }) => {
  const [isSearching, setIsSearching] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchToggle = () => {
    setIsSearching(!isSearching);
  };

  return (
    <View style={styles.header}>
      <Icon name="menu" size={24} color="white" style={{ paddingTop: 18,padd:12 }} />
      {isSearching ? (
        <TextInput
          style={styles.searchInput}          
          placeholderTextColor="#859399"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      ) : (
        <Text style={styles.headerTitle}>{title}</Text>
      )}
      <Icon
        name={isSearching ? 'close' : 'magnify'}  
        size={30}
        color="white"
        style={{ paddingTop: 18, marginLeft:10 }}
        onPress={handleSearchToggle}  
      />
      <Icon name="bell-outline" size={30} color="white" style={styles.iconMargin} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#756EF3',
    padding: 30,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  headerTitle: {
    flex: 1,
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'start',
    paddingLeft: 18,
    paddingTop: 18,
  },
  iconMargin: {
    marginLeft: 15,
    paddingTop: 18
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderColor: '#FFF',
    borderWidth: 1,
    borderRadius: 12,
    marginTop:18,    
    paddingLeft: 30,    
    color: 'white',
    backgroundColor: '#FFF',
  },
});

export default Header;
