import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
  return {
    container: {
      padding: theme.spacing(2),
    },
    cardHeader: {
      backgroundColor: theme.palette.primary.main,
      height: 20,
    },
    cardHeaderTitle: {
      fontSize: 20,
      color: 'white',
    },
    uploadBtn: {
      marginRight: 10,
      height: 25,
    },
    btnRow: {
      marginTop: 10,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    submitBtn: {
      margin: '25px 0 0 0',
    },
    itemContainer: {
      marginTop: 40,
    },
    itemCard: {
      padding: theme.spacing(2),
    },
    orangeItem: {
      backgroundColor: '#ffecb3',
      padding: theme.spacing(2),
      borderLeft: '4px solid orange',
    },
    studentBtn: {
      color: '#3f51b5',
      marginLeft: 26,
    },
    topCard: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    row: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      flex: 1,
    },
    infoicon: {
      marginRight: 5,
      color: 'orange',
    },
    itemRow: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 20,
    },
    heading: {
      backgroundColor: '#f5f5f5',
    },
    smallCard: {
      // border: '1px solid #999999',
      flex: 1,
      margin: '0 10px 0 10px',
      borderRadius: 0,
    },
    rightCard: {
      // border: '1px solid #999999',
      flex: 3,
      margin: '0 10px 0 10px',
      borderRadius: 0,
    },
    text: {
      fontSize: 15,
    },
    inputContainer: {
      width: '95%',
      padding: 10,
    },
    textFieldInput: {
      width: '100%',
      height: 40,
    },
    textField: {
      width: '100%',
      marginTop: 5,
    },
    column: {
      margin: 10,
    },
    card: {
      height: '100%',
      width: '100%',
    },
    required: {
      color: 'red',
    },
    select: {
      width: '100%',
      height: 40,
    },
    itemHeading: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    list: {
      maxHeight: 300,
      overflow: 'auto',
      marginTop: 10,
    },
    saveBtn: {
      margin: '10px 0 10px 20px',
    },
  };
});

export default useStyles;
