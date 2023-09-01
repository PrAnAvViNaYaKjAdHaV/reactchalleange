
import { Container, Main, MainDetials } from "./homedetails.style"
import InputSection from "../Input_section/inputsection.component"
export default function HomeDetails() {
    return (
        <Container>
            <Main>
                <MainDetials>
                    <h1 className="first">Enter you home details and</h1>
                    <h1 className="second">Get an instant offer</h1>
                    <p>within 24 hours</p>
                </MainDetials>
                <InputSection width={56} />
            </Main>
        </Container>
    )
}
