import React from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const vehicles = [
  { id: '1', number: 'KA02HG1786', status: 'Running', speed: '20 kmph', voltage: '12.5V', statusColor: 'green' },
  { id: '2', number: 'KA02HG1547', status: 'Idle', idleTime: '20 mins', voltage: '12.5V', statusColor: 'orange' },
  { id: '3', number: 'KA02HG1287', status: 'Running', speed: '20 kmph', voltage: '12.5V', statusColor: 'green' },
  { id: '4', number: 'KA02HG1327', status: 'Halt', idleTime: '20 mins', voltage: '12.5V', statusColor: 'red' },
  { id: '5', number: 'KA02HG1345', status: 'Idle', idleTime: '20 mins', voltage: '12.5V', statusColor: 'orange' },
];

export default function TraceScreen() {
  const renderVehicleItem = ({ item }) => (
    <View style={styles.vehicleItem}>
      <View style={[styles.statusIndicator, { backgroundColor: item.statusColor }]} />
      <View style={styles.vehicleInfo}>
        <Text style={styles.vehicleNumber}>{item.number}</Text>
        <Text style={styles.vehicleId}>MAT788052P7C06674</Text>
      </View>
      <View style={styles.vehicleStatus}>
        <Text >
          {item.status} 
        </Text>
        <Text >
          {item.speed || item.idleTime}
        </Text>        
      </View>
    </View>
  );
 
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
      <Icon name="menu" size={24} color="white" style={{ paddingTop: 18 }} />
        <Text style={styles.headerTitle}>Tracksphere</Text>
        <Icon name="magnify" size={30} color="white" style={{ paddingTop: 18 }}/>
        <Icon name="bell-outline" size={24} color="white" style={styles.iconMargin} />
      </View>

      {/* Status Summary */}
      <View style={styles.statusSummary}>
        <View style={styles.statusItem}>
          <Text style={[styles.count, { color: 'green' }]}>10</Text>
          <Text style={styles.statusTextBlack}>Running</Text>
        </View>
        <View style={styles.statusItem}>
          <Text style={[styles.count, { color: 'orange' }]}>5</Text>
          <Text style={styles.statusTextBlack}>Idle</Text>
        </View>
        <View style={styles.statusItem}>
          <Text style={[styles.count, { color: 'red' }]}>3</Text>
          <Text style={styles.statusTextBlack}>Stopped</Text>
        </View>
        <View style={styles.statusItem}>
          <Text style={[styles.count, { color: 'black' }]}>2</Text>
          <Text style={styles.statusTextBlack}>Offline</Text>
        </View>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search vehicle here"
        placeholderTextColor="#859399"
      />
      <TouchableOpacity style={styles.iconContainer}>
        <Icon name="chevron-down" size={20} color="#859399" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer}>
        <Icon name="filter-variant" size={20} color="#859399" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer}>
        <Icon name="arrow-up" size={20} color="#859399" />
      </TouchableOpacity>
    </View>

      {/* Vehicle List */}
      <FlatList 
        data={vehicles}
        keyExtractor={(item) => item.id}
        renderItem={renderVehicleItem}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F5F5' },
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
    marginLeft: 16,
    paddingTop: 18
  },
  statusSummary: { 
    
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    padding: 16,    
    marginVertical:16,
    marginHorizontal: 17, 
    backgroundColor: '#FFF',borderRadius: 12,
  },
  statusItem: {
    alignItems: 'center',
  },
  count: {
    fontSize: 24,
    fontWeight: '600',
  },
  statusTextBlack: { 
    color: '#859399', 
    fontSize: 14,     
    textAlign: 'center' 
  },
  searchContainer: {
    borderColor:'#859399',
    flexDirection: 'row',
    alignItems: 'center',    
    borderRadius: 16,    
    marginHorizontal: 17,
    marginBottom:16,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 12,
    backgroundColor: '#FFF',
    color: '#333',
  },
  iconContainer: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 12,
    marginLeft: 4,
  },
  listContainer: { 
    paddingBottom: 16 
  },
  vehicleItem: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: '#FFF', 
    marginHorizontal: 16, 
    marginBottom: 16, 
    padding: 12, 
    borderRadius: 12 
  },
  statusIndicator: { 
    width: 4, 
    height: '100%', 
    marginLeft: 20 ,
    marginRight: 14
  },
  vehicleInfo: { 
    flex: 1 
  },
  vehicleNumber: { 
    fontSize: 22, 
    fontWeight: '600' 
  },
  vehicleId: { 
    fontSize: 14,
    color: '#888' 
  },
  vehicleStatus: {    
    color:"#888",
    flexDirection: 'column', 
    height:56,
    width:72,
    alignItems: 'flex-end' 
  },
  statusText: {
      
    paddingVertical: 20, 
    borderRadius: 8, 
    fontSize: 12, 
    textAlign: 'center', 
    marginBottom: 4 
  },
  vehicleDetails: { 
    flexDirection: 'row', 
    alignItems: 'center' 
  },
  batteryText: { 
    marginLeft: 4, 
    color: '#888' 
  },
});

