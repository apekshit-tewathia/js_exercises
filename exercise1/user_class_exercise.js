function User(name, age) {
  this.name = name;
  this.age = age;
}

User.prototype.compare = function(other_user) {
  if (this.age > other_user.age) {
    return this.name + " is older than " + other_user.name;
  }
  if (this.age < other_user.age) {
    return other_user.name + " is older than " + this.name;
  }
  return "They have equal ages";
}

var user = new User("Apekshit", 22);
var other_user = new User("Rajneesh", 67);
alert(user.compare(other_user));

