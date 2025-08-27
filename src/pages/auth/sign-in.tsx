import { Button, TextField } from "@mui/material";
import { setAuthPageTitle } from "@store/slices/common-slices";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { start, finish } from "@store/slices/progressSlice";
import { toast } from "react-toastify";
import AvatarBox from "@components/avatar-box";
import { login } from "@store/slices/authSlice";

const SignIn = () => {
  const dispatch = useDispatch();
  const [activeStepOne, setActiveStepOne] = useState(true);
  const [userInfo, setUserInfo] = useState(null as null | { firstName: string; lastName: string; email: string; img: string; });
  const [formValues, setFormValues] = useState({ email: "", password: "" });

  const { visible: progressVisible } = useSelector((state: any) => state.progress);

  const PROJECT_NAME = import.meta.env.VITE_PROJECT_NAME;

  useEffect(() => { dispatch(setAuthPageTitle(`Sign in to ${PROJECT_NAME}`)); }, []);

  const userSignIn = () => {
    dispatch(start());
    if (activeStepOne) {
      if (
        formValues?.email?.trim().length > 0 &&
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email)
      ) {
        if (formValues?.email?.trim() !== "admin@example.com") {
          toast.error("Email not register with us.");
          dispatch(finish());
          return;
        }
        setTimeout(() => {
          setUserInfo({
            firstName: "Sayan",
            lastName: "Maji",
            email: "admin@example.com",
            img: "/img/avatar/avatar-1.jpg",
          });
          dispatch(finish());
          setActiveStepOne(false);
        }, 2000);
      } else {
        toast.error("Please enter a valid email address.");
        dispatch(finish());
      }
    } else {
      if (formValues?.password?.trim().length > 0 && formValues?.password == "12345") {
        setTimeout(() => {
          dispatch(login({ email: formValues.email, password: formValues.password }));
          toast.success("Login successful!");
          dispatch(finish());
        }, 2000);
      } else {
        toast.error("Please enter a valid password.");
        dispatch(finish());
      }
    }


  }

  return (
    <div className="auth-page sign-in">
      <form onSubmit={(e) => { e.preventDefault(); userSignIn(); }}>
        {
          activeStepOne &&
          <div className="step-username">
            <TextField
              label="Email"
              variant="outlined"
              value={formValues?.email}
              onChange={(e) => setFormValues({ ...formValues, email: e.target.value })}
              placeholder="e.g. admin@example.com"
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
              <Button type="button" className="me-2" disabled={progressVisible}>Create Account</Button>
              <Button type="submit" variant="contained" disabled={progressVisible}>Next</Button>
            </div>
          </div>
        }
        {
          !activeStepOne &&
          <div className="step-password">
            <div className="logged-info cursor-pointer" onClick={() => {
              setUserInfo(null);
              setActiveStepOne(true);
            }}>
              <AvatarBox imageUrl={userInfo?.img} />
              <h5>{`${userInfo?.email}`}</h5>
            </div>
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
            <div className="frm-btn d-flex justify-content-between pt-3 pb-2">
              <Button type="button" className="me-2" disabled={progressVisible}>Forgot Password?</Button>
              <Button type="submit" variant="contained" disabled={progressVisible}>Sign In</Button>
            </div>
          </div>
        }
      </form>
    </div>
  )
}

export default SignIn;