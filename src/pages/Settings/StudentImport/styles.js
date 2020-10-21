import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(3),
  },
  card: {
    //width: '30%',
  },
  cardHeader: {
    backgroundColor: theme.palette.primary.main,
    height: 20,
  },
  cardHeaderTitle: {
    color: 'white',
  },
  uploadBtn: {
    marginRight: 10,
    height: 45,
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
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
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
    backgroundColor: theme.palette.primary.main,
  },
  smallCard: {
    flex: 1,
    margin: '0 10px 0 10px',
    borderRadius: 0,
  },
  rightCard: {
    flex: 3,
    margin: '0 10px 0 10px',
    borderRadius: 0,
  },
  headingText: {
    color: 'white',
    fontSize: 18,
  },
  item: {
    margin: '10px 0',
    fontSize: 15,
  },
}));

export default useStyles;
