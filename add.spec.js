
const redis = require("redis");
const client = redis.createClient();
const { promisify } = require("util");
const getAsync = promisify(client.get).bind(client);
const setAsync = promisify(client.set).bind(client);

client.on("error", function(error) {
  console.error(error);
});
 



test('adds 1 + 2 to equal 3', async () => {
    expect(1+2).toBe(3);
    const val = await setAsync("key", "value");
    const _val = await getAsync("key");
    expect(_val).toBe("value");
    client.end(true)
});