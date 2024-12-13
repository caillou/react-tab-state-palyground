import { TextField } from "@mui/material";

export const Note = () => {
  return (
    <TextField
      id="filled-multiline-static"
      label="Multiline"
      multiline
      rows={4}
      defaultValue="Default Value"
      variant="filled"
    />
  );
};
