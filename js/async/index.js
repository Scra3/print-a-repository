const request = async () => {
    const response = await fetch('https://api.com/values/1');
    const json = await response.json();
    console.log(json);
}

request();
