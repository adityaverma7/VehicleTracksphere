import React, { useState, useRef } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
import vehicleDetails from './vehicleData.json';
import Header from '../Header';
import { Images } from '../Images';

const vehicles = vehicleDetails;

const getStatusColor = (status) => {
  switch (status) {
    case 'Running': return '#66C122';
    case 'Idle': return '#FFB35A';
    case 'Halt': return '#FF3B30';
    case 'Offline': return 'black';
    default: return 'gray';
  }
};

const TraceScreen = () => {
  const flatListRef = useRef(null);
  const [selectedFilter, setSelectedFilter] = useState('Show All');
  const [isFilterModalVisible, setFilterModalVisible] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  const filteredVehicles = selectedFilter === 'Show All'
    ? vehicles
    : vehicles.filter(vehicle => vehicle.status === selectedFilter);

  const toggleVehicleSelection = (item) => {
    setSelectedVehicle(selectedVehicle && selectedVehicle.id === item.id ? null : item);    
  };

  const toggleDetails = () => {
    setShowDetails(prevState => !prevState);
  };

  const VehicleInfo = ({ item }) => (
    <View style={styles.vehicleItem}>
      <View style={[styles.statusIndicator, { backgroundColor: getStatusColor(item.status), height: '80%' }]} />
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
  );

  const VehicleDetails = ({ item }) => (
    <View>
      <View style={styles.vehicleItem}>
        <View style={styles.expanded}>
          <Text style={styles.detailValue}>{item.dieselLevel}</Text>
          <Text style={styles.detailValue}>Ltrs</Text>
          <Text style={styles.detailLabel}>Diesel</Text>
        </View>
        <View style={styles.expanded}>
          <Text style={styles.detailValue}>{item.adblueLevel}</Text>
          <Text style={styles.detailValue}>Ltrs</Text>
          <Text style={styles.detailLabel}>Adblue</Text>
        </View>
        <View style={styles.expanded}>
          <View style={styles.iconTextContainer}>
            <Image source={Images.drivingWheel} style={styles.image} />
            <Text style={styles.iconText}>{item.kilometerDriven}</Text>
          </View>
          <View style={styles.iconTextContainer}>
            <Image source={Images.hourglass} style={styles.image} />
            <Text style={styles.iconText}>{item.hours}</Text>
          </View>
          <View style={styles.iconTextContainer}>
            <Image source={Images.speed} style={styles.image} />
            <Text style={styles.iconText}>{item.mileage}</Text>
          </View>
        </View>

      </View>
      <View style={styles.Row}>
        <View style={styles.Column}>
          <View style={[styles.detailRow, { paddingLeft: 0 }]}>
            <Text style={styles.detailLabel}>
              Location: <Text style={styles.locationText}>{item.location}</Text>
            </Text>
          </View>

          <View style={[styles.detailRow, { paddingLeft: 0 }]}>
            <Text style={styles.detailLabel}>Last Updated: {item.lastUpdated}</Text>
          </View>
        </View>
        <View style={styles.newTest}>
          <Text style={styles.urlPurpleText}>Need Help?</Text>
        
        <TouchableOpacity style={styles.detailsButton} onPress={toggleDetails}>
          <Text style={styles.detailsButtonText}>{showDetails ?  'Less' : 'Details'}</Text>
        </TouchableOpacity>     

        </View>
      </View>
    </View>
  );
  

  const MoreDetails = () => {
    const dataRows = [
      { label: 'Distance to service', data: ['Data', 'Data'] },
      { label: 'Hours to service', data: ['Data', 'Data'] },
      { label: 'Trip A Fuel Efficiency', data: ['Data', 'Data'] },
      { label: 'Trip B Fuel Efficiency', data: ['Data', 'Data'] },
      { label: 'Engine Temperature', data: ['Data', 'Data'] },
      { label: 'Outside Temperature', data: ['Data', 'Data'] },
    ];
  
    return (
      <View style={styles.containerTable}>
        <View style={styles.divider}></View>
        {dataRows.map((row, index) => (
          <View style={styles.rowTable} key={index}>
            <Text style={styles.smallText}>{row.label}</Text>
            {row.data.map((item, idx) => (
              <Text
                key={idx}
                style={[styles.smallText, { color: "#32ADE6" }]}
              >
                {item}
              </Text>
            ))}
          </View>
        ))}
        <View style={styles.divider}></View>        
      </View>
    );
  };
  

  const renderVehicleItem = ({ item }) => (
    <TouchableOpacity onPress={() => {
      toggleVehicleSelection(item); 
      toggleDetails();  
    }}>
      <View style={[
        styles.expanded,
        selectedVehicle && selectedVehicle.id === item.id && { borderColor: '#756EF3', borderWidth: 2 }
      ]}
      >
        <VehicleInfo item={item} />
        {selectedVehicle && selectedVehicle.id === item.id && <VehicleDetails item={item} />}
        {showDetails && selectedVehicle && selectedVehicle.id === item.id && <MoreDetails item={item} />}
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Header title="Tracking" />
      <View style={styles.statusSummary}>
        {['Running', 'Idle', 'Halt', 'Offline'].map(status => (
          <TouchableOpacity key={status} onPress={() => setSelectedFilter(status)}>
            <View style={styles.statusItem}>
              <Text style={[styles.count, { color: getStatusColor(status) }]}>
                {vehicles.filter(vehicle => vehicle.status === status).length}
              </Text>
              <Text style={styles.statusTextBlack}>{status}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder={selectedVehicle ? selectedVehicle.number : "Search vehicle here"}
          placeholderTextColor={selectedVehicle ? "black" : "#859399"}
        />
        {['chevron-down', 'filter-outline', 'arrow-up'].map((icon, index) => (
          <TouchableOpacity
            key={icon}
            style={styles.iconContainer}
            onPress={() => index === 1 ? setFilterModalVisible(true) : flatListRef.current?.scrollToOffset({ animated: true, offset: 0 })}
          >
            <Icon name={icon} size={20} color="#859399" />
          </TouchableOpacity>
        ))}
      </View>
      <FlatList
        ref={flatListRef}
        data={selectedVehicle ? [selectedVehicle] : filteredVehicles}
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
                <Text style={[styles.modalOptionText, { color: getStatusColor(status) }]}>{status}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default TraceScreen;
