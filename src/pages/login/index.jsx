import logo from '../../assets/logo.svg'
import { Input } from "../../components/Input"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import loginSchema from "../../schema/loginSchema"
import { Spacing } from "../../components/Spacing"
import { Main } from '../../components/Main'
import { Logo } from '../../components/Logo'
import { Actions, Form } from '../../components/Form'

export default function Login() {

    const {
        handleSubmit,
        control,
        formState: {
            isValid,
        }
    } = useForm({
        resolver: yupResolver(loginSchema),
        mode: 'onChange'
    })

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <Main>
            <Logo src={logo} />

            <Form onSubmit={handleSubmit(onSubmit)}>

                <Spacing $bottom={16}>
                    <Input
                        control={control}
                        name="username"
                        label="Username"
                    />
                </Spacing>

                <Spacing $bottom={36}>
                    <Input
                        control={control}
                        name="password"
                        label="Password"
                    />
                </Spacing>

                <Actions></Actions>

            </Form>
        </Main>
    )
}