var styles = (theme) => ({
  appBar: {
    background: 'white !important',
    minHeight: 100,
    zIndex: theme.zIndex.drawer + 1
  },
  body:{
    background: '#3f94b5b5 !important'
  },
  typography:{
    color: '#84ABF8 !important',
    fontSize: 50,
    fontWeight: 'bold',
    marginTop: 5
  },
  subTitle:{
    color: '#84ABF8 !important',
    fontSize: 50,
    fontWeight: 'bold',
    marginTop: 5,
    width: 350,
    marginLeft: 200
  },
  sideText:{
    marginTop: 350
  },
  sideTitle:{
    color: '#84ABF8 !important',
    fontSize: 35,
    fontWeight: 'bold',
    width: 500
  },
  link:{
    textDecoration: 'none'
  },
  secondoryImg:{
    marginTop: 100,
    marginLeft: 100,
    maxWidth: 600
  },
  logo:{
    marginTop: 20,
    height: 50
  },
  pageBackground:{
    background: "linear-gradient(45deg, #9013FE 15%, #50E3C2 90%)",
    height: 1000
  },
  button:{
    background: '#84ABF8 !important',
    color: 'white !important',
    marginTop: 15,
    marginRight: 20,
    width: 180,
    height: 60,
    fontSize: 22
  },
  button1:{
    background: '#84ABF8 !important',
    color: 'white !important',
    marginTop: 15,
    marginRight: 20,
    width:300,
    height: 60,
    fontSize: 20,
    textTransform: 'none'
  },
  buttonContainer:{
    marginTop: 300,
    marginLeft: -180
  },
  inValidText:{
    marginTop: 450,
    marginLeft: -350,
    color: 'white'
  },
  registerCard:{
    background: 'white !important',
    marginLeft: '25%',
    marginRight: '25%',
    marginTop: '25%'
  },
  root: {
    minWidth: "100%",
    minHeight: "90vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  card: {
    background: 'black !important',
    minWidth: 700,
    minHeight: "80vh",
    display: "flex",
    alignItems: "center"
  },
  cardContent: {
    color: 'white !important',
    marginTop: -460,
    marginInlineStart: 270,
    fontWeight: 'bold',
    fontSize: 30
  },
  textfield: {
    background: 'white !important',
    width: 226
  },
  textfield1: {
    width: 470,
    background: 'white !important'
  },
  textfieldContainer:{
    marginLeft: -300,
    marginTop: -250,
    display: 'flex'
  },
  textfieldContainer1:{
    marginLeft: 20
  },
  textfieldContainer2:{
    marginLeft: -475
  },
  textfieldContainer3:{
    marginTop: 20
  },
  drawer: {
    width: 240,
    flexShrink: 0
  },
  drawerPaper: {
    width: 240,
    top: 100,
    background: '#84ABF8 !important'
  },
  drawerContainer: {
    overflow: 'auto'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  menuItem: {
    height: 100
  },
  menuItemText:{
    fontWeight: 'bold'
  },
  newsPage:{
  marginTop: 150,
  marginLeft: 130
  }
});


export default styles;
