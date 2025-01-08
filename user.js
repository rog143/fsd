
var user1 = {
first_name: "John",
last_name: "Smith",
age: "38",
department: "Software",
user:"john123",
psw:"12jh23"
};
var user2 = {
first_name: "Rohan",    
last_name: "Roy",
age: "40",
department: "Software",
user:"rohan456",
psw:"12rh78"
};
var users=new Array(user1,user2)
exports.log_check=function(user,psw){
for (let value of users) {
if(user==value["user"] && psw==value["psw"])
return true;
}
return false;
}