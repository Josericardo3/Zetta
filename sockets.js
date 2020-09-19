module.exports = io => {
    const arduino = io
        .of('/arduino')
        .on('connection', client => {
            client.on('sTotalPay', (data) => {
                arduino.emit('cTotalPay', data);
            })
            client.on('sInfoHouse', (data) => {
                arduino.emit('cInfoHouse', data);
            })
            client.on('sLocation', (data) => {
                arduino.emit('cLocation', data);
            })
        })
}