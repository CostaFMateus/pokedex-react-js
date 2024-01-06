import * as yup from "yup"

const message = 'Required Field'

const registerSchema = yup.object({
    name: yup.string().required(message),
    username: yup.string().required(message).min(5, 'Minimun 5 Characters'),
    password: yup.string().required(message).min(6, 'Minimun 5 Characters'),
    confirmPassword: yup.string().required(message).oneOf([yup.ref('password'), null], 'Password must match')

})

export default registerSchema