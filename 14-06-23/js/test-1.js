const login = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Benvenuta Costanza');
    }, 3000);
});

const onButtonClick = () => {
    console.log('Mostro LOADER');
    login()
        .then((response) => {
            console.log(response)
            console.log('Nascondo LOADER');
        })
}



document
    .getElementById('button')
    .addEventListener('click', (event) => {
        event.preventDefault();

        onButtonClick();
    });

