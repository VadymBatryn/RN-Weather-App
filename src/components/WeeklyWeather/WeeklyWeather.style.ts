import {StyleSheet, Dimensions} from 'react-native';

const screenHeight = Dimensions.get('screen').height;

export default StyleSheet.create({
  weatherDetail: {
    height: screenHeight / 2.6,
    backgroundColor: 'rgba(255,255,255,0.2)',
    margin: 20,
    borderRadius: 20,
  },
  listLabel: {
    fontSize: 20,
    color: '#fff',
    margin: 20,
  },
  list: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
});
