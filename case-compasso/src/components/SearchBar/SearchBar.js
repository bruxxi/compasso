import useForm from "../../hooks/useForm";
import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { InputBase } from "@material-ui/core";
import {
  createStyles,
  fade,
  Theme,
  makeStyles,
} from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import { GlobalStateContext } from "../../global/GlobalStateContext";
import { SearchContainer } from "./styled";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    search: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
        width: "auto",
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    inputRoot: {
      color: "inherit",
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("m")]: {
        width: "18ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  })
);

const SearchBar = (props) => {
  const history = useHistory();
  const [form, onChange, cleanFields] = useForm({ username: "" });
  // const { isLoading, setIsLoading, setUserName, userName } = useContext(GlobalStateContext);

  const onSubmitForm = (event) => {
    // setIsLoading(true);
    event.preventDefault();
    // setUserName(form.username)
    // console.log(`context onsubmit username`,userName)
    // console.log(`submit `, form )
    history.push(form.username);
    cleanFields()
  };
  const classes = useStyles();

  return (
    <SearchContainer>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <form onSubmit={onSubmitForm}>
          <InputBase
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            name={"username"}
            value={form.username}
            onChange={onChange}
            placeholder={"Digite o nome do usuário GitHub"}
          />
          <Button variant="contained" onClick={onSubmitForm} type={"submit"}>
            Pesquisar
          </Button>
        </form>
      </div>
    </SearchContainer>
  );
};
export default SearchBar;
