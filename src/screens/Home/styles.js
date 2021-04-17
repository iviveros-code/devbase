import {StyleSheet} from 'react-native';
import {theme} from '../../theme';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginHorizontal: theme.spacings.XXL,
    flex: 1,
    justifyContent: 'center',
  },
  chipContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  title: {
    fontSize: theme.spacings.XXL,
    fontWeight: '600',
    alignSelf: 'flex-start',
    marginBottom: theme.spacings.M,
  },
  subTitle: {
    alignSelf: 'flex-start',
    marginBottom: 40,
  },
});
