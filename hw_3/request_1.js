let resp = pm.response.json();
var req = JSON.parse(request.data);
let salary_1_5 = resp.person.u_salary_1_5_year

pm.test("Check pars", function () {
    pm.expect(resp.data).to.eql(req.data);
});


// Статус код 200
pm.test("Check code 200", function () {
    pm.response.to.have.status(200);
});

// Проверка структуры json в ответе.
var schema = {
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "person": {
      "type": "object",
      "properties": {
        "u_age": {
          "type": "integer"
        },
        "u_name": {
          "type": "array",
          "items": [
            {
              "type": "string"
            },
            {
              "type": "integer"
            },
            {
              "type": "integer"
            }
          ]
        },
        "u_salary_1_5_year": {
          "type": "integer"
        }
      },
      "required": [
        "u_age",
        "u_name",
        "u_salary_1_5_year"
      ]
    },
    "qa_salary_after_12_months": {
      "type": "number"
    },
    "qa_salary_after_6_months": {
      "type": "integer"
    },
    "start_qa_salary": {
      "type": "integer"
    }
  },
  "required": [
    "person",
    "qa_salary_after_12_months",
    "qa_salary_after_6_months",
    "start_qa_salary"
  ]
};
pm.test('Schema is valid', function () {
    pm.expect(tv4.validate(resp, schema)).to.be.true;
});

// В ответе указаны коэффициенты умножения salary, напишите тесты по проверке правильности результата перемножения на коэффициент.
pm.test("Check 12_months", function () {
    pm.expect(resp.qa_salary_after_12_months).to.be.eql(+req.salary * 2.9);
});

pm.test("Check 6_months", function () {
    pm.expect(resp.qa_salary_after_6_months).to.be.eql(+req.salary * 2);
});

// Достать значение из поля 'u_salary_1.5_year' и передать в поле salary запроса http://162.55.220.72:5005/get_test_user
pm.environment.set("salary_1_5_ears", salary_1_5);
