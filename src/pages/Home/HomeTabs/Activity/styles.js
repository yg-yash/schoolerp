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
      width: '100%',
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
      margin: '0 20px 0 10px',
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
      margin: '0 10px 0 10px',
      //      borderRadius: 0,
      // display: 'flex',
      // flexDirection: 'column',
      // alignItems: 'center',
      // justifyContent: 'center',
      height: '100%',
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
      right: 50,
      position: 'absolute',
    },
    rightCard: {
      //      flex: 1,
      display: 'flex',
    },
    count: {
      fontSize: 20,
      lineHeight: 23,
    },
    subHeading: {
      fontSize: 17,
      lineHeight: 20,
    },
    smallCardRow: {},
    icon: {
      height: 50,
      width: 50,
      border: '2px solid #ff80ab',
      padding: 20,
      color: '#ff80ab',
      borderRadius: 50,
    },
    smallCardContent: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
    },
    count: {
      fontSize: 23,
      fontWeight: 'bold',
    },
    detailsText: {
      fontSize: 17,
      fontWeight: 'bold',
      textAlign: 'center',
      fontFamily: theme.palette.text.primary,
    },
  };
});

export default useStyles;
