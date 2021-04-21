import {StyleSheet} from 'react-native';
import {theme} from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: theme.spacings.XXL,
    paddingHorizontal: theme.spacings.M,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 0.5,
    borderColor: theme.colors.green,
  },
  login: {
    marginLeft: 50,
    fontSize: theme.spacings.XXXL,
  },
  containerFollowers: {
    flex: 1,
  },
  title: {
    textAlign: 'center',
    color: theme.colors.grey_dark,
    fontSize: theme.spacings.XL,
    fontWeight: 'bold',
  },
  renderItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
    paddingVertical: theme.spacings.M,
  },
  renderText: {
    lineHeight: theme.spacings.XXL,
    fontSize: theme.spacings.XL,
  },
  renderAvatar: {
    width: 20,
    height: 20,
    borderRadius: 50,
  },
});
