import { useState } from "react";
import {
    Button,
    FormControlLabel,
    FormGroup,
    Switch,
    TextField,
} from "@mui/material";

function FormSignUp({ handleSubmit }) {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [prom, setProm] = useState(true);
    const [nove, setNove] = useState(true);

    // useEffect(() => {
    //     console.log("Nombre cambio: ", name);
    // }, [name]);

    const [errors, setErrors] = useState({
        name: {
            error: false,
            message: "",
        },
        lastName: {
            error: false,
            message: "",
        },
        email: {
            error: false,
            message: "",
        },
    });

    function validateFieldLength(value, minLength, errorMessage) {
        if (value.length >= minLength) {
            return {
                error: false,
                message: "",
            };
        } else {
            return {
                error: true,
                message: errorMessage,
            };
        }
    }

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                const data = {
                    name,
                    lastName,
                    email,
                    prom,
                    nove,
                };
                handleSubmit(data);
            }}
        >
            <TextField
                required
                id="name"
                label="Nombre"
                variant="outlined"
                fullWidth
                margin="normal"
                onChange={(e) => setName(e.target.value)}
                value={name}
                error={errors.name.error}
                helperText={errors.name.error ? errors.name.message : ""}
                onBlur={(e) =>
                    setErrors((prevErrors) => ({
                        ...prevErrors,
                        name: validateFieldLength(
                            e.target.value,
                            3,
                            "Deben ser al menos 3 caracteres"
                        ),
                    }))
                }
            />
            <TextField
                required
                id="lastName"
                label="Apellidos"
                variant="outlined"
                fullWidth
                margin="normal"
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
                error={errors.lastName.error}
                helperText={
                    errors.lastName.error ? errors.lastName.message : ""
                }
                onBlur={(e) =>
                    setErrors((prevErrors) => ({
                        ...prevErrors,
                        lastName: validateFieldLength(
                            e.target.value,
                            3,
                            "Deben ser al menos 3 caracteres"
                        ),
                    }))
                }
            />
            <TextField
                required
                id="email"
                label="Email"
                variant="outlined"
                fullWidth
                margin="normal"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                error={errors.email.error}
                helperText={errors.email.error ? errors.email.message : ""}
                onBlur={(e) =>
                    setErrors((prevErrors) => ({
                        ...prevErrors,
                        email: validateFieldLength(
                            e.target.value,
                            10,
                            "Deben ser al menos 10 caracteres"
                        ),
                    }))
                }
            />
            <FormGroup>
                <FormControlLabel
                    control={
                        <Switch
                            checked={prom}
                            onChange={(e) => setProm(e.target.checked)}
                        />
                    }
                    label="Promociones"
                />
                <FormControlLabel
                    control={
                        <Switch
                            checked={nove}
                            onChange={(e) => setNove(e.target.checked)}
                        />
                    }
                    label="Novedades"
                />
            </FormGroup>
            <Button variant="contained" type="submit">
                Registrarse
            </Button>
        </form>
    );
}

export default FormSignUp;
