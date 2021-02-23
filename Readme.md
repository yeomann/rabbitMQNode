# RabbitMQNode

RabbitMQ test with Node Es6

## Spin Docker RabbitMQ

```docker run --name myRabbitmq -p 5672:5672 -d rabbitmq```

## Usage

1 - Make sure node is greater than 13 so import can work

2 - ```npm run producer 89``` // 89 or any number

3 - ```npm run consumer```

### Note on Node

Install latest
```nvm install node```
and use latest, at this time, it is v15.10.0 (npm v7.5.3)
```nvm use node```
