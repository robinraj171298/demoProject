import { TextField } from '@mui/material';
import './CustomTextField.css';
import { Grid } from "@mui/material";

export const CustomTextField = (props) => {
    return (
      <>
        <div class="inputLabel">
          <label>{props.label}</label>
        </div>
        {props.id == "workspaceURL" ? (
          <Grid container>
            <Grid item>
              <div class="workspaceUrlStyle">
                <span class="workspaceUrlText">www.eden.com/</span>
              </div>
            </Grid>
            <Grid item>
              <TextField
                class="customTextField"
                InputProps={{ sx: { width: "100%" } }}
                id={props.id}
                placeholder={props.placeholder}
                value={props.workspaceName}
                onChange={(e) => props.onChange(e.target.value)}
                minLength={props.minLength}
                maxLength={props.maxLength}
              />
            </Grid>
          </Grid>
        ) : (
          <TextField
            class="customTextField"
            InputProps={{ sx: { width: "100%" } }}
            id={props.id}
            placeholder={props.placeholder}
            value={props.workspaceName}
            onChange={(e) => props.onChange(e.target.value)}
            minLength={props.minLength}
            maxLength={props.maxLength}
          />
        )}
      </>
    );
}

