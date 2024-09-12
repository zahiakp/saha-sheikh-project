import Swal from "sweetalert2";

export const showMessage = (msg = '', type = '') => {
    const toast: any = Swal.mixin({
        toast: true,
        position: 'bottom',
        showConfirmButton: false,
        timer: 3000,
        customClass: {
            popup: 'toast-custom',
        },
    });
    toast.fire({
        icon: type,
        title: msg,
        padding: '13px 20px',
    });
};
const styles = `
.toast-custom {
    background: #2B3F5C !important; /* Dark background color */
    border-radius: 12px; /* Increased border radius */
    color: white; /* White text color */
    margin-bottom:40px;
}
`;
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
