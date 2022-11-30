import { StyleSheet, Text, View, } from 'react-native';
import { TouchableOpacity } from 'react-native';


export default function ScanButton() {
  return (
    <View>
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={{ textAlign: 'center', paddingTop: 20 }}>Press</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({

  buttonContainer: {
    borderWidth: 5,
    borderColor: "purple",
    borderRadius: 10,
    backgroundColor: "yellow",
    fontSize: 40,
    width: 150,
    height: 70,
    alignSelf: "center"


  }
});