// Спарсить response body в json.
let resp = pm.response.json()

// Спарсить request.
var req = request.data;
let resp_person = resp.person

// ***Написать цикл который выведет в консоль по порядку элементы списка из параметра person
_.each(resp_person, function (val, ind){
    console.log (" person '"+ ind +"': ", val)
})

// Статус код 200
pm.test("Check code 200", function () {
    pm.response.to.have.status(200);
});

// Спарсить request.
pm.test("Check pars", function () {
    pm.expect(resp.data).to.eql(req.data);
});

// Проверить, что json response имеет параметр start_qa_salary
pm.test("Check start_qa_salary", function () {
    pm.expect(resp).to.have.property("start_qa_salary");
});

//  Проверить, что json response имеет параметр qa_salary_after_6_months
pm.test("Check qa_salary_after_6_months", function () {
    pm.expect(resp).to.have.property("qa_salary_after_6_months");
});

// Проверить, что json response имеет параметр qa_salary_after_12_months
pm.test("Check qa_salary_after_12_months", function () {
    pm.expect(resp).to.have.property("qa_salary_after_12_months");
});

//  Проверить, что json response имеет параметр qa_salary_after_1.5_year
pm.test("Check qa_salary_after_1.5_year", function () {
    pm.expect(resp).to.have.property("qa_salary_after_1.5_year");
});

// Проверить, что json response имеет параметр qa_salary_after_3.5_years
pm.test("Checkqa qa_salary_after_3.5_years", function () {
    pm.expect(resp).to.have.property("qa_salary_after_3.5_years");
});

// Проверить, что json response имеет параметр person
pm.test("Check persons", function () {
    pm.expect(resp).to.have.property("person");
});

// Проверить, что параметр start_qa_salary равен salary из request (salary забрать из request.)
pm.test("Check qa_salary", function () {
    pm.expect(resp.start_qa_salary).to.eql(3500);
});

// Проверить, что параметр qa_salary_after_6_months равен salary*2 из request (salary забрать из request.)
pm.test("Check 6_months", function () {
    pm.expect(resp.qa_salary_after_6_months).to.be.eql(+req.salary * 2);
});

// Проверить, что параметр qa_salary_after_12_months равен salary*2.7 из request (salary забрать из request.)
pm.test("Check 12_months", function () {
    pm.expect(resp.qa_salary_after_12_months).to.be.eql(+req.salary * 2.7);
});

// Проверить, что параметр qa_salary_after_1.5_year равен salary*3.3 из request (salary забрать из request.)
pm.test("Check 1.5_year", function () {
    pm.expect(resp["qa_salary_after_1.5_year"]).to.be.eql(+req.salary * 3.3);
});

// Проверить, что параметр qa_salary_after_3.5_years равен salary*3.8 из request (salary забрать из request.)
pm.test("Check 3.5_years", function () {
    pm.expect(resp["qa_salary_after_3.5_years"]).to.be.eql(+req.salary * 3.8);
});

// Проверить, что в параметре person, 1-й элемент из u_name равен salary из request (salary забрать из request.)
pm.test("Check name_salary", function () {
    pm.expect(resp.person.u_name[1]).to.eql(Number(req.salary));
});

// Проверить, что что параметр u_age равен age из request (age забрать из request.)
pm.test("Check age", function () {
    pm.expect(resp.person.u_age).to.eql(Number(req.age));
});

// Проверить, что параметр u_salary_5_years равен salary*4.2 из request (salary забрать из request.)
pm.test("Check 5_yearss", function () {
    pm.expect(resp.person.u_salary_5_years).to.be.eql(+req.salary * 4.2);
});


//http://162.55.220.72:5005/user_info_2
