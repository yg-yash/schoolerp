import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
  return {
    container: {
      padding: theme.spacing(3),
    },

    cardHeader: {
      backgroundColor: theme.palette.primary.main,
      height: 20,
    },
    cardHeaderTitle: {
      fontSize: 18,
      color: 'white',
      textAlign: 'center',
    },
    card: {
      height: '100%',
      width: '100%',
    },

    userCard: {
      padding: 10,
      display: 'flex',
      justifyContent: 'center',
    },
    avatar: {
      height: 130,
      width: 130,
    },
    detailsRow: {
      display: 'flex',
      margin: '10px 0 10px 50px',
      alignItems: 'center',
    },
    details: {
      marginLeft: 10,
      fontFamily: theme.typography.fontFamily,
      fontSize: 15,
    },
    icon: {
      height: 20,
      width: 20,
    },
    viewBtn: {
      right: -100,
    },
  };
});

export default useStyles;
