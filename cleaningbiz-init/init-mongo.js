// init-mongo.js
db = db.getSiblingDB('cleaningbiz');

db.createUser({
  user: "cleaningbizAdmin",
  pwd: "your-secure-password",
  roles: [
    { role: "readWrite", db: "cleaningbiz" },
    { role: "dbAdmin", db: "cleaningbiz" }
  ]
});

print("User 'cleaningbizAdmin' created successfully!");
