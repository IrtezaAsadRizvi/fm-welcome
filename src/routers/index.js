// ===========================
// Authentication Page
// ===========================
import Default from '../components/authPath/default.vue'
import SignIn from '../components/authPath/signIn.vue'
import SignUp from '../components/authPath/signUp.vue'
import SingUpSuccess from '../components/authPath/signUpSuccess.vue'
import ResendActivation from '../components/authPath/resend-activation.vue'
import ActivePhone from '../components/authPath/active-phone.vue'

export const routes = [
    // ===========================
    // Authentication Routes
    // ===========================
    {path: '/', component: Default},
    {path: '/signIn', component: SignIn},
    {path: '/signup', component: SignUp},
    {path: '/signup/success', component: SingUpSuccess},
    {path: '/resend/activation', component: ResendActivation},
    {path: '/active/phone', component: ActivePhone},
];