import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  item: {
    marginVertical: 10,
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#999',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  itemText: {
    fontSize: 18,
    color: '#fff',
  },
  temperaturesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '20%',
  },
});
