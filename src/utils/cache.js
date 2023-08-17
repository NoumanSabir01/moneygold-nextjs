// cache.js
const LRUCache = require("lru-cache");

// Create a cache instance with a maximum of 100 entries and a maximum age of 1 hour
const cache = new LRUCache({
  max: 100,
  maxAge: 60 * 60 * 1000, // 1 hour
});

module.exports = cache;
