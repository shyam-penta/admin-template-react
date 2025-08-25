import { Button, TextField } from "@mui/material";
import { setAuthPageTitle } from "@store/slices/common-slices";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const SignIn = () => {
  const dispatch = useDispatch();
  const [activeStepOne, setActiveStepOne] = useState(true);
  const [formValues, setFormValues] = useState({ email: "", password: "" });

  const PROJECT_NAME = import.meta.env.VITE_PROJECT_NAME;

  useEffect(() => { dispatch(setAuthPageTitle(`Sign in to ${PROJECT_NAME}`)); }, [])

  const checkUsername = () => {
    if (formValues.email) {
      setActiveStepOne(false);
    }
  }

  return (
    <div className="auth-page sign-in">
      <form>
        {
          activeStepOne &&
          <div className="step-username">
            <TextField
              label="Email"
              variant="outlined"
              value={formValues?.email}
              onChange={(e) => setFormValues({ ...formValues, email: e.target.value })}
              fullWidth
              className="bg-transparent"
              size="small"
              sx={{
                input: { color: "#fff" },
                label: { color: "#fff" },
                "& label.Mui-focused": { color: "#fff" },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#fff" },
                  "&:hover fieldset": { borderColor: "#fff" },
                  "&.Mui-focused fieldset": { borderColor: "#fff" }
                }
              }}
            />
            <p className="help-text pt-3">Your email will be used for account-related communication only.</p>

            <div className="frm-btn d-flex justify-content-end pt-3 pb-2">
              <Button type="button" className="me-2">Create Account</Button>
              <Button type="button" variant="contained" onClick={() => checkUsername()}>Next</Button>
            </div>
          </div>
        }
        {
          !activeStepOne &&
          <div className="step-password">
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              value={formValues?.password}
              onChange={(e) => setFormValues({ ...formValues, password: e.target.value })}
              fullWidth
              className="bg-transparent"
              size="small"
              sx={{
                input: { color: "#fff" },
                label: { color: "#fff" },
                "& label.Mui-focused": { color: "#fff" },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#fff" },
                  "&:hover fieldset": { borderColor: "#fff" },
                  "&.Mui-focused fieldset": { borderColor: "#fff" }
                }
              }}
            />
          </div>
        }
      </form>
    </div>
  )
}

export default SignIn;