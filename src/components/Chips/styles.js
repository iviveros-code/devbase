import {StyleSheet} from 'react-native';
import {theme} from '../../theme';

export const styles = StyleSheet.create({
  container: select => ({
    backgroundColor: select ? theme.colors.blue_dark : theme.colors.blue,
    height: 30,
    width: 90,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: theme.spacings.XXS,
    margin: theme.spacings.S,
    textDecorationLine: 'underline',
    shadowColor: select ? theme.colors.black : null,
    shadowOffset: select
      ? {
          width: 5,
          height: 3,
        }
      : null,
    shadowOpacity: select ? 0.37 : null,
    shadowRadius: select ? 7.49 : null,
    elevation: select ? 12 : null,
  }),
  chipTitle: {
    color: 'white',
    fontSize: theme.spacings.XL,
    fontWeight: '400',
  },
});
