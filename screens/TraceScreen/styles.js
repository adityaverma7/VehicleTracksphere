import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#F2F2F2' },
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
      paddingTop: 18,
    },
    statusSummary: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 16,
      marginVertical: 16,
      marginHorizontal: 17,
      backgroundColor: '#FFF',
      borderRadius: 12,
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
      textAlign: 'center',
    },
    searchContainer: {
      borderColor: '#859399',
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: 16,
      marginHorizontal: 17,
      marginBottom: 16,
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
      paddingBottom: 16,
    },
    vehicleItem: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#FFF',
      marginHorizontal: 16,
      marginBottom: 16,
      padding: 12,
      borderRadius: 12,
    },
    statusIndicator: {
      width: 4,
      height: '100%',
      marginLeft: 20,
      marginRight: 14,
    },
    vehicleInfo: {
      flex: 1,
    },
    vehicleNumber: {
      fontSize: 22,
      fontWeight: '600',
    },
    vehicleId: {
      fontSize: 14,
      color: '#888',
    },
    vehicleStatus: {
      color: "#888",
      flexDirection: 'column',
      height: 65,
      width: 72,
      alignItems: 'flex-end',
      alignItems: 'center',
    },
    statusBox: {
      height: 65,
      width: 72,
      borderRadius: 10,
      marginBottom: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    statusText: {
      borderRadius: 8,
      fontSize: 12,
      textAlign: 'center',
      marginBottom: 4,
      color: "white",
      fontWeight: '700',
    },
    vehicleDetails: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    batteryText: {
      marginLeft: 4,
      color: '#888',
    },
    modalContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' },
    modalContent: { width: 200, backgroundColor: 'white', borderRadius: 8, padding: 10 },
    modalOption: { paddingVertical: 10, alignItems: 'center' },
    modalOptionText: { fontSize: 16 },
    imageIconContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 80,  
        paddingRight:10
      },
      imageContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 50,  
        paddingTop:20,
        paddingRight:8
      },
      image: {
        width: 20,  
        height: 20,
        marginBottom: 5,
      },
      iconTextContainer: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      iconText: {
        fontSize: 10,
        textAlign: 'center',
        paddingLeft: 10
      },

  });

  export default styles;
  