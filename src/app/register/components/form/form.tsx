import { Button, Stack, TextField } from "@mui/material";

export function Form() {
  return (
    <form>
      <Stack spacing={2}>
        <TextField label="Name" />
        <TextField label="Email" type="email" />
        <Button type="submit" variant="contained" color="primary" size="large">
          Register
        </Button>
      </Stack>
    </form>
  );
}
