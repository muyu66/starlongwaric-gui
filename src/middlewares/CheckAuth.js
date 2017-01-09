export default function () {
    if (!window.auth_email) {
        window.location.href = '/';
    }
}