const Amqp = require('amqplib');

(async function main() {
    const connection = await Amqp.connect(`amqps://${process.env.RMQ_USER}:${process.env.RMQ_PASSWORD}@${process.env.RMQ_HOSTNAME}/${process.env.RMQ_USER}`);
    const channel = await connection.createConfirmChannel();

    setTimeout(process.exit, 1500);

    await channel.consume('queue1', (msg) => {
        console.log(msg);
        channel.ack(msg);
    });
})();
