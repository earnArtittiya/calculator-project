import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";



const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(2),
    minWidth: 120,
  },
  notchedOutline: {
    borderWidth: 3,
    borderColor: "#4a148c !important",
  },
  paperContainer: {
    height:" 100%",
    width:"100%",
    backgroundImage: `url(${"images/17.jpg"})`
},

 
}));
export default function Calculator() {
  const classes = useStyles();
  const [operator, setOperator] = useState(1);
  const [numberInput1, setNumberInput1] = useState(0);
  const [numberInput2, setNumberInput2] = useState(0);
  const [result, setResult] = useState(0);
  const operatorText = [, "บวก", "ลบ", "คูณ", "หาร"];

  useEffect(() => {
    switch (operator) {
      case 1:
        setResult(Number(numberInput1) + Number(numberInput2));
        break;
      case 2:
        setResult(Number(numberInput1) - Number(numberInput2));
        break;
      case 3:
        setResult(Number(numberInput1) * Number(numberInput2));
        break;
      case 4:
        setResult(Number(numberInput1) / Number(numberInput2));
        break;
      default:
        console.log("เลือก operator ไม่ถูกต้อง");
        break;
    }
  }, [operator, numberInput1, numberInput2]);

  return (
    <React.Fragment>
      <Typography component="div" style={{ height: "100vh" }}>
        <Box
          className={classes.paperContainer}
          width="100%"
          height="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <form noValidate autoComplete="off">
            <TextField 
              label="Number "
              type="number"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{
                classes: {
                  notchedOutline: classes.notchedOutline,
                },
              }}
              value={numberInput1}
              onChange={(event) => {
                setNumberInput1(event.target.value);
              }}
            />
            <FormControl className={classes.formControl}>
              <InputLabel shrink id="operator-label">
                operator
              </InputLabel>
              <Select
                className={classes.margin}
                labelId="operator-label"
                value={operator}
                onChange={(event) => {
                  setOperator(event.target.value);
                }}
              >
                <MenuItem value={1}>+</MenuItem>
                <MenuItem value={2}>-</MenuItem>
                <MenuItem value={3}>x</MenuItem>
                <MenuItem value={4}>/</MenuItem>
              </Select>
            </FormControl>
            <TextField
              label="Number"
              type="number"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{
                classes: {
                  notchedOutline: classes.notchedOutline,
                },
              }}
              value={numberInput2}
              onChange={(event) => setNumberInput2(event.target.value)}
            />
            <Box>
              {numberInput1} {operatorText[operator]} {numberInput2} = {result}
            </Box>
          </form>
        </Box>
      </Typography>
    </React.Fragment>
  );
}
