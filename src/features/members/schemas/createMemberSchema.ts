import * as Yup from 'yup'

export const createMemberSchema = Yup.object().shape({
    first_name: Yup.string().required('First name field required').min(3, 'Minimum character is 3').max(45, 'Maximum character is 45'),
    last_name: Yup.string().required('Last name field required').min(3, 'Minimum character is 3').max(45, 'Maximum character is 45'),
    email: Yup.string().required('Email field required').email('Input must be filled with "@"').min(3, 'Minimum character is 3').max(45, 'Maximum character is 45'),
    phone_number: Yup.string().required('Phone number field required').min(3, 'Minimum character is 3').max(45, 'Maximum character is 45'),
    address: Yup.string().required('Address field required').min(3, 'Minimum character is 3').max(45, 'Maximum character is 45'),
    id_card_number: Yup.string().required('ID card number field required').min(3, 'Minimum character is 3').max(45, 'Maximum character is 45')
})