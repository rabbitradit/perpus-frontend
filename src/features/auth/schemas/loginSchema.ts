import * as Yup from 'yup';

export const loginSchema = Yup.object().shape({
    username: Yup.string().required('Username field required').min(1).max(45),
    password: Yup.string().required('Password field required').min(1).max(45)
})