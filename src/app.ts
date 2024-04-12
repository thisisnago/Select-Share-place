const form = document.querySelector('form')!;
const addressInput = document.getElementById('address')! as HTMLInputElement;

const GOOGLE_API_KEY = 'AIzaSyADeF4LxNBvJhPh9_hV1RwOwbde6UGPByw';

function searchAddressHandler(event: Event ) {
    event.preventDefault();
    const enteredAddress = addressInput.value;

    // send this to Google's API!
}

form.addEventListener('submit', searchAddressHandler);