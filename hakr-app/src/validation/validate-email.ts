export default function validateEmail(email: string[]){
    return email.length >= 4 && email.length > 0;
}
