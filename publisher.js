const BunnyBus = require('bunnybus');
const bunnyBus = new BunnyBus({
    username: process.env.RMQ_USER,
    password: process.env.RMQ_PASSWORD,
    hostname: process.env.RMQ_HOSTNAME,
    vhost: '/hajauxqt'
});


(async function main() {
    //publish to the above subscription
    console.log('here');
    try{
        await bunnyBus.publish({ event : 'create-event', comment : 'hello world!' });
    }
    catch(e) {
        console.log(e);
    }
    
})();
