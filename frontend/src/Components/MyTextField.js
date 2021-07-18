import TextField from "@material-ui/core/TextField";

function MyTextField(props){
    return (
        <TextField
            variant="outlined"
            color="secondary"
            margin="normal"
            required
            fullWidth
            id={props.id}
            label={props.label}
            name={props.myname}
            type={props.type}
            autoComplete="off"
            autoFocus
            onChange={props.event}
            value={props.name}
          />
    );
}

export default MyTextField;