export default function validateCheckbox(value?: string) {
    if (value === '') {
        return 'Please accept our conditions';
    }
    if (value === 'on') {
        return ' You have to accept our conditions to continue';
    }
    // All is good
    return ['good!', true,];
}
