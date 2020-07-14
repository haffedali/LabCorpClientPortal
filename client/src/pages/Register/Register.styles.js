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

  // Temp
  msLabel: {
    display: 'block',
    ':not(:first-child)': {
      marginTop: '0.75rem'
    }
  },
  msLabelText: {
    display: 'block',
    fontSize: '0.9rem',
    marginBottom: '0.25rem',
  },
  msSignUpButton: {
    display: 'inline-block',
    marginTop: '0.5rem',
  },
  msOrSignUp: {
    fontSize: '0.9rem',
  },
  msTextInput: props => ({
    border: `1px solid ${props => props.theme.veryLightGrey}`,
    boxSizing: 'border-box',
    display: 'block',
    fontSize: '0.9rem',
    padding: '0.25rem',
    width: '100%'
  })


}));