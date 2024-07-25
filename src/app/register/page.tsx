import { Container, Stack, Typography } from "@mui/material";
import { Form } from "./components/form/form";

export default function RegisterPage() {
  return (
    <Container>
      <Stack spacing={2}>
        <Typography variant="h1">Register</Typography>
        <Form />
      </Stack>
    </Container>
  );
}
