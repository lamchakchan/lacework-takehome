# lacework-takehome

## Trigger
The Github Actions has two jobs that can be invoked with the **Run Workflow** button.

* [Publish Workflow](https://github.com/lamchakchan/lacework-takehome/actions/workflows/publish.yml)
* [Subscribe Workflow](https://github.com/lamchakchan/lacework-takehome/actions/workflows/subscribe.yml)

## Secrets
The secrets are stored within the repository secret management.  The following items have been stored.

* `RMQ_HOSTNAME`
* `RMQ_USER`
* `RMQ_SECRET`

## Behavior
The `publisher.js` file will fire an event to the RabbitMQ server.  The `subscribe.js` file will consume any event off of the RabbitMQ server and print out to `stdio`.  The RabbitMQ server is setup with an exchange and a queue.  The queue name is `queue1` and the exchange is `default-exchange`.  The exchange is configured with topic distribution where the queue subscribes any topic with the name `create-event` off of it.  
