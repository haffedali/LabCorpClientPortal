import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
  },
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: theme.BACKGROUND_001,
    maxWidth: '100vw'
  },
  logoContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "1vw"
  },
  logInContainer: {
    display: "flex",
    justifyContent: "center",
    width: "30vw",
    backgroundColor: theme.BACKGROUND_000,
  },
  childToCenter: {
    display: 'flex',
    justifyContent: 'center'
  },
  grid: {},
  logInInput: {
    margin: "3vw",
    marginTop: 0
  },
  logInButton: {
    backgroundColor: theme.PRIMARY,
  },
  signUpButton: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '20px',
    '& > button': {
      color: `${theme.PRIMARY} !important`
    }
  },
  authError: {
    display: 'flex',
    justifyContent: 'center',
    color: theme.ERROR,
    minHeight: '3vw',
    paddingTop: '10px'
  },
}));