interface Consts {
    [key:string]: any; // Add index signature
}
const consts: Consts = {
    post: {
        success: { status: 'Successfully Created' },
        error: { status: 'The creation failed. Please try again' }
    },
    get: {
        error: { status: 'Intenal server error' }
    }
};
export default { consts };