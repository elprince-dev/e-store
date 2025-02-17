import Swal from 'sweetalert2'

export const addedToCartAlert = () => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Product added to cart",
                    showConfirmButton: false,
                    timer: 1500
                });
            }

export const alreadyInCartAlert = () => {
                Swal.fire({
                    title: "Product already in cart",
                    // text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: false,
                    confirmButtonColor: "#3085d6",
                    confirmButtonText: "OK"
                })
            }
