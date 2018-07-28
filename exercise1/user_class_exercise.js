function User(name, age) {
  this.name = name;
  this.age = age;
}

User.prototype.compare = function(user2) {
  if (this.age > user2.age) {
    return this.name + " is older than " + user2.name;
  }
  if (this.age < user2.age) {
    return user2.name + " is older than " + this.name;
  }
  return "They have equal ages";
}

var user1 = new User("Apekshit", 22);
var user2 = new User("Rajneesh", 67);
alert(user1.compare(user2));