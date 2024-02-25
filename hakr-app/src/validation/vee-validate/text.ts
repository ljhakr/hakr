export default function validateText(value?: string) {
    if (!value) {
        return 'This field is required';
    }
    if (value.length < 3) {
        return 'Your name has not enough characters';
    }
    // All is good
    return ['good!', true,];
}
