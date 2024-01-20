import { Header } from "../Header";
import { Main } from "../Main";
import { AppSection } from "./styles";

export const AppLayout = ({
    children,
}) => {
    return (
        <AppSection>
            <Header />

            <Main>{ children }</Main>
        </AppSection>
    )
}