import {Dimensions, StyleSheet} from 'react-native';

const screenHeight = Dimensions.get('screen').height;

export default StyleSheet.create({
  todayData: {
    borderRadius: 20,
    padding: 20,
    margin: 20,
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.1)',
  },
  dayInfoContainer: {
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cityName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  weatherTypeText: {
    fontSize: 16,
    color: '#fff',
  },
  dayInfoTextRight: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'right',
    alignSelf: 'flex-end',
  },
  weatherInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 40,
  },
  temperature: {
    fontSize: screenHeight / 10 - 10,
    color: '#fff',
  },
  icon: {
    height: 55,
    width: 55,
    tintColor: '#fff',
  },
});
