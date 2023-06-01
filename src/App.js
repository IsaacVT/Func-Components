import "./App.css";
import { Container, Typography } from "@mui/material";
import FormSignUp from "./components/FormSingUp";

function App() {
    const handleSubmit = (data) => {
        console.log("Recibiendo información:", data);
    };

    return (
        <Container component="section" maxWidth="sm">
            <Typography variant="h3" align="center" component="h3">
                Formulario Registro
            </Typography>
            <FormSignUp handleSubmit={handleSubmit} />
        </Container>
    );
}

export default App;
