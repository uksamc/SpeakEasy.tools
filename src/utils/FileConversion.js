function encodeImageFileAsURL(file){
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
            resolve(reader.result);
        };
        reader.readAsDataURL(file);
    });
}
export {encodeImageFileAsURL};