// Спарсить response body в json.
let resp = pm.response.json()

// Спарсить request.
let req = pm.request.url.query.toObject();

let name_1 = resp.name
let age_1 = resp.age
let salary_1 = resp.salary

// Статус код 200
pm.test("Check code", function () {
    pm.response.to.have.status(200);
});

// Проверить, что name в ответе равно name s request (name забрать из request.)
pm.test("Check name",   function () {
    pm.expect(resp.name).to.eql("Alex");
});

// Проверить, что age в ответе равно age из request (age забрать из request.)
pm.test("Check age", function () {
    pm.expect(resp.age).to.eql(34);
});

// Вывести в консоль параметр salary из request.
console.log("salary = " ,req.salary)

// Вывести в консоль 0-й элемент параметра salary из response.
console.log("Check salary_0 = " ,resp.salary[0])

// Вывести в консоль 1-й элемент параметра salary параметр salary из response.
console.log("Check salary_1 = " ,resp.salary[1])

// Вывести в консоль 2-й элемент параметра salary параметр salary из response.
console.log("Check salary_2 = " ,resp.salary[2])

// Проверить, что 0-й элемент параметра salary равен salary из request (salary забрать из request.)
pm.test("Check salary_0", function () {
    pm.expect(resp.salary[0]).to.eql(3500);
});

// Проверить, что 1-й элемент параметра salary равен salary*2 из request (salary забрать из request.)
pm.test("Check salary_1", function () {
    pm.expect+(resp.salary[1]).to.eql+(req.salary);
});

//  Проверить, что 2-й элемент параметра salary равен salary*3 из request (salary забрать из request.)
pm.test("Check salary_2", function () {
    pm.expect+(resp.salary[2]).to.eql+(req.salary);
});


// Создать в окружении переменную name
pm.environment.set("name_1", name_1);

// Создать в окружении переменную age
pm.environment.set("age_1", age_1);

// Передать в окружение переменную salary
 pm.environment.set("salary_1", req.salary)

// Написать цикл который выведет в консоль по порядку элементы списка из параметра salary.
for (var i=0; i < salary_1.length; i++){
    console.log("salary_" + i + ": " , salary_1[i])
}

//http://162.55.220.72:5005/object_info_4
