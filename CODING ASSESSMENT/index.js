function resolveAfter10Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            
            resolve('resolved');
        }, 1000);
    })
}

async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter10Seconds();
    console.log(result);
}