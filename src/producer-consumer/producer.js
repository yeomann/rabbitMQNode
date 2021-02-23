import amqp from 'amqplib';
import { QUEUE_NAME } from './constant.js';
const num = process.argv[2];
const TestJson = {
  id: num
};

setup();
async function setup() {
  try {
    const connection = await amqp.connect('amqp://localhost:5672');
    const channel = await connection.createChannel();
    // eslint-disable-next-line no-unused-vars
    const queue = await channel.assertQueue(QUEUE_NAME);
    // send something to queue
    channel.sendToQueue(QUEUE_NAME, Buffer.from(JSON.stringify(TestJson)));
    // channel.sendToQueue(QUEUE_NAME, Buffer.from('Hello world!'));
    console.log('Done writing job');
  } catch (e) {
    console.error(e);
  }
}
