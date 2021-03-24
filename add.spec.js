
const redis = require("redis");
const { promisify } = require("util");
const client = redis.createClient();
const getAsync = promisify(client.get).bind(client);
const setAsync = promisify(client.set).bind(client);
client.on("error", function(error) {
  console.error(error);
});
 
client.set("key", "value", redis.print);
client.get("key", redis.print);

test('adds 1 + 2 to equal 3', () => {
    expect(1+2).toBe(3);
});

test('redis get and set ', async () => {
    await setAsync('key', 'value')
    const val = await getAsync('key')
    expect(val).toBe('value');
    client.end(true)
});