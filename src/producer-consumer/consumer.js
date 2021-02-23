import amqp from 'amqplib';
import { QUEUE_NAME } from './constant.js';

setup();
async function setup() {
  try {
    const connection = await amqp.connect('amqp://localhost:5672');
    const channel = await connection.createChannel();
    channel.consume(QUEUE_NAME, (message) => {
      console.log('Recieved Job as', message.content.toString());
      channel.ackAll();
      // if (msg.id == 99) channel.ack(message);
    });
  } catch (e) {
    console.error(e);
  }
}
