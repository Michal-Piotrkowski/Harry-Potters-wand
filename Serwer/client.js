const WebSocket = require('ws');

const ws = new WebSocket('ws://192.168.1.10:1337');

//wysłanie danych na serwer przy podłączeniu klienta do serwera

ws.onopen = () => {
    ws.send('klient się podłączył');
}

//odebranie danych z serwera i reakcja na nie, po sekundzie

ws.onmessage = (e) => {
    console.log(e.data);
}

ws.onerror = (e) => {
    console.log(e.message);
};

ws.onclose = (e) => {
    console.log(e.code, e.reason);
};
