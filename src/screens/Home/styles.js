import {StyleSheet} from 'react-native';
import {theme} from '../../theme';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginHorizontal: theme.spacings.XXL,
    flex: 1,
    paddingVertical: 50,
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
  btnContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  btn: {
    width: 200,
    height: 40,
    backgroundColor: theme.colors.green,
    borderWidth: 0.5,
    borderColor: theme.colors.grey,
    borderRadius: theme.spacings.XXS,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
