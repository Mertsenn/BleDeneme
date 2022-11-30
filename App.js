import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { BleManager } from 'react-native-ble-plx';
import ScanButton from './components/ScanButton';



const _BleManager= new BleManager();

const startScan = () => {
  _BleManager.startDeviceScan(Null, {
      allowDuplicates: false,
  },
      async (error, device) => {
          
          if (error) {
              console.log('error');
              _BleManager.stopDeviceScan();
              
          }
          console.log(device.localName, device.name);
          if (device.localName == 'Test' || device.name == 'Test') {
              setDevices([...devices, device]);
              _BleManager.stopDeviceScan();
          }
      },);
};

const connectDevice = device => {
  _BleManager.stopDeviceScan();
  _BleManager.connectToDevice(device.id).then(async device => {
      await device.discoverAllServicesAndCharacteristics();
      _BleManager.stopDeviceScan();
      setDisplaText(`Device connected\n with ${device.name}`);
      setConnectedDevice(device);
      setDevices([]);
      device.services().then(async service => {
          for (const ser of service) {
              ser.characteristics().then(characteristic => {
                  getCharacteristics([...characteristics, characteristic]);
              });
          }
      });
  });
};
const disconnectDevice = () => {
  connectedDevice.cancelConnection();
};

export default function App() {
  return (
    <View style={styles.container}>
      <ScanButton/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
