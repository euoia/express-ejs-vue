module.exports = function(req, res, next) {
  const startTime = Date.now();
  req.resolved_ip =
    req.headers["x-forwarded-for"] || req.connection.remoteAddress;
  console.log(`<-- ${req.method} ${req.path} ${req.resolved_ip}`);
  next();

  res.on("finish", function() {
    const ms = Date.now() - startTime;
    console.log(`--> ${this.statusCode} ${ms}ms`);
  });
};
