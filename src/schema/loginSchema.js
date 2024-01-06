import * as yup from "yup"

const message = 'Required Field'

const loginSchema = yup.object({
    username: yup.string().min(5, 'Minimun 5 Characters').required(message),
    password: yup.string().required(message)
})

export default loginSchema