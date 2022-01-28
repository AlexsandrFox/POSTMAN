// Спарсить response body в json.
var Check = pm.response.json();

// Спарсить request.
var req = request.data;
pm.test("Check pars", function () {
    pm.expect(Check.data).to.eql(req.data);
});

let age = parseInt(Check.age)
let name_1 = Check.name
let salary_1 = Check.salary

// Вывести в консоль параметр family из response.
console.log("check_family =" ,Check.family)

// Статус код 200
pm.test("Check code 200", function () {
    pm.response.to.have.status(200);
});

// Проверить, что name в ответе равно name s request (name вбить руками.)
pm.test("Check name", function () {
    pm.expect(name_1).to.eql("Alex");
});

// Проверить, что age в ответе равно age s request (age вбить руками.)
pm.test("Check age", function () {
    pm.expect(age).to.eql(34);
});

// Проверить, что salary в ответе равно salary s request (salary вбить руками.)
pm.test("Check salary", function () {
    pm.expect(salary_1).to.eql(3500);
});

// Проверить, что name в ответе равно name s request (name забрать из request.)
pm.test("Check name2", function () {
    pm.expect(Check.name).to.eql(req.name);
});

// Проверить, что age в ответе равно age s request (age забрать из request.)
pm.test("Check age2", function () {
    pm.expect(Check.age).to.eql(req.age);
});

//  Проверить, что salary в ответе равно salary s request (salary забрать из request.)
pm.test("Check salary2", function () {
    pm.expect(Check.salary).to.be.eql(+req.salary);
});


// Проверить что u_salary_1_5_year в ответе равно salary*4 (salary забрать из request)
 pm.test("Check u_salary_1_5_year", function () {
     pm.expect(Check.family.u_salary_1_5_year).to.be.eql(+req.salary * 4);
 });



//http://162.55.220.72:5005/user_info_3
