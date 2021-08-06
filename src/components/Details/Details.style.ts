import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    marginHorizontal: 25,
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  label: {
    fontSize: 20,
    color: '#fff',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
  gridCard: {
    height: Dimensions.get('screen').width / 4,
    width: Dimensions.get('screen').width / 4,
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.1)',
    margin: 5,
    borderRadius: 5,
    paddingTop: 10,
  },
  cardText: {
    color: 'white',
    fontSize: 16,
  },
});
