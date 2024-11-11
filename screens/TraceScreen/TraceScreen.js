import React, { useState ,useRef } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
import vehicleDetails from './vehicleData.json';
import Header from '../Header';
import { Images } from '../Images'; 

const countStatus = (status) => {
  return vehicles.filter(vehicle => vehicle.status === status).length;
};

const getStatusColor = (status) => {
  switch (status) {
    case 'Running':
      return '#66C122';
    case 'Idle':
      return '#FFB35A';
    case 'Halt':
      return '#FF3B30';
    case 'Offline':
      return 'black';
    default:
      return 'gray';
  }
};

const vehicles = vehicleDetails;

export default function TraceScreen() {

  const flatListRef = useRef(null);   
  const [selectedFilter, setSelectedFilter] = useState('Show All');
  const [isFilterModalVisible, setFilterModalVisible] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  const scrollToTop = () => {
    if (flatListRef.current) {
      flatListRef.current.scrollToOffset({ animated: true, offset: 0 });
    }
  };
  const filteredVehicles = selectedFilter === 'Show All'
    ? vehicles
    : vehicles.filter(vehicle => vehicle.status === selectedFilter);

  const renderVehicleItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => setSelectedVehicle(item)}      
    >
    <View style={[styles.vehicleItem ,selectedVehicle && selectedVehicle.id === item.id && { borderColor: '#756EF3', borderWidth: 2 }]}>
      <View style={[styles.statusIndicator, { backgroundColor: getStatusColor(item.status) }]} />
      <View style={styles.vehicleInfo}>
        <Text style={styles.vehicleNumber}>{item.number}</Text>
        <Text style={styles.vehicleId}>{item.vehicleId}</Text>
      </View>
      <View style={styles.imageIconContainer}>
      <View style={styles.imageContainer}>
        <Image source={Images.blueBattery} style={styles.image} />
        <Image source={Images.runnigFuel} style={styles.image} />
      </View>
      <View style={styles.iconTextContainer}>
        <Image source={Images.eCharge} style={styles.image} />
        <Text style={styles.iconText}>{item.voltage}</Text>
      </View>
    </View>
      <View style={styles.vehicleStatus}>
        <View style={[styles.statusBox, { backgroundColor: getStatusColor(item.status) }]}>
          <Text style={styles.statusText}>{item.status}</Text>
          <Text style={styles.statusText}>{item.speed || item.idleTime}</Text>
        </View>

      </View>
    </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>      
      <Header title="Tracking" />
      
      <View style={styles.statusSummary}>
        <TouchableOpacity onPress={() => setSelectedFilter("Running")}>
        <View style={styles.statusItem}>
          <Text style={[styles.count, { color: 'green' }]}>{countStatus('Running')}</Text>
          <Text style={styles.statusTextBlack}>Running</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedFilter("Idle")}>
        <View style={styles.statusItem}>
          <Text style={[styles.count, { color: 'orange' }]}>{countStatus('Idle')}</Text>
          <Text style={styles.statusTextBlack}>Idle</Text>
        </View>        
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedFilter("Halt")}>
        <View style={styles.statusItem}>
          <Text style={[styles.count, { color: 'red' }]}>{countStatus('Halt')}</Text>
          <Text style={styles.statusTextBlack}>Stopped</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedFilter("Offline")}>
        <View style={styles.statusItem}>
          <Text style={[styles.count, { color: 'black' }]}>{countStatus('Offline')}</Text>
          <Text style={styles.statusTextBlack}>Offline</Text>
        </View>
         </TouchableOpacity>
      </View>
      
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search vehicle here"
          placeholderTextColor="#859399"
        />
        <TouchableOpacity style={styles.iconContainer}>
          <Icon name="chevron-down" size={20} color="#859399" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer} onPress={() => setFilterModalVisible(true)}>
          <Icon name="filter-outline" size={20} color="#859399" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer}  onPress={scrollToTop}>
          <Icon name="arrow-up" size={20} color="#859399" />
        </TouchableOpacity>
      </View>


      <FlatList
        ref = {flatListRef}
        data={filteredVehicles}
        keyExtractor={(item) => item.id}
        renderItem={renderVehicleItem}
        contentContainerStyle={styles.listContainer}
      />
      <Modal
        visible={isFilterModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setFilterModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {['Show All', 'Running', 'Idle', 'Halt', 'Offline'].map(status => (
              <TouchableOpacity
                key={status}
                onPress={() => {
                  setSelectedFilter(status);
                  setFilterModalVisible(false);
                }}
                style={styles.modalOption}
              >
                <Text style={[styles.modalOptionText, { color: getStatusColor(status) }]}>
                  {status}
                </Text>

              </TouchableOpacity>
            ))}
          </View>
        </View>
      </Modal>
    </View>
  );
}

