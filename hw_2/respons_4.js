// Спарсить response body в json.
var CheckOut = pm.response.json();

// Спарсить request.
let req = pm.request.url.query.toObject();

// Вывести в консоль параметр family из response.
let age = parseInt(CheckOut.age);
console.log("check_family =" ,CheckOut.family)

// Статус код 200
pm.test("Check code 200", function () {
    pm.response.to.have.status(200);
});

//  Проверить, что name в ответе равно name s request (name забрать из request.)
pm.test("Check name2", function () {
    pm.expect(CheckOut.name).to.eql(req.name);
});

// Проверить, что age в ответе равно age s request (age забрать из request.)
pm.test("Check age", function () {
    pm.expect(CheckOut.age).to.eql(req.age);
});

// Проверить, что salary в ответе равно salary s request (salary забрать из request.)
pm.test("Check salary", function () {
    pm.expect(CheckOut.salary).to.be.eql(+req.salary);
});

// Проверить, что у параметра dog есть параметры name.
pm.test("Check Dog", function () {
    pm.expect(CheckOut.family.pets.dog).to.have.property("name");
});

// Проверить, что у параметра dog есть параметры age.
pm.test("Check Dog age", function () {
    pm.expect(CheckOut.family.pets.dog).to.have.property("age");
});

// Проверить, что параметр name имеет значение Luky.
pm.test("Check Dog name", function () {
    pm.expect(CheckOut.family.pets.dog.name).to.eql("Luky");
});

// Проверить, что параметр age имеет значение 4.
pm.test("Check Dog old", function () {
    pm.expect(CheckOut.family.pets.dog.age).to.eql(4);
});

//http://162.55.220.72:5005/object_info_3

