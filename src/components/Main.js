import HeaderComponent from "./header/HeaderComponent";
import BodyComponent from "./body/BodyComponent";
import { Container } from "@mui/material";

const Main = () => {
    return (
        <Container>
            <HeaderComponent />
            <BodyComponent />
        </Container>
    );
};

export default Main;
