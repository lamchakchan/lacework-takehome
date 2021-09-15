const Amqp = require('amqplib');

(async function main() {
    const connection = await Amqp.connect(`amqps://${process.env.RMQ_USER}:${process.env.RMQ_PASSWORD}@${process.env.RMQ_HOSTNAME}/${process.env.RMQ_USER}`);
    const channel = await connection.createConfirmChannel();

    setTimeout(process.exit, 1000);

    await channel.publish('default-exchange', 'create-event', Buffer.from('test, bleh'));
})();
