import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  toolBar: {
    backgroundColor: 'white',
  },
  tab: {
    color: 'black',
    display: 'flex',
    flexDirection: 'row',
    fontFamily: theme.palette.text.secondary,
  },
}));

export default useStyles;
