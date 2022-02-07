let resp = pm.response.json();
let req = request.data;
let age = parseInt(resp.age);

pm.test("Check resp", function () {
    pm.expect(resp.data).to.eql(req.data);

});

// Статус код 200
pm.test("Check code 200", function () {
    pm.response.to.have.status(200);

});

// Проверка структуры json в ответе.
var schema = {
    "type": "object",
  "properties": {
    "age": {
      "type": "string"
    },
    "family": {
      "type": "object",
      "properties": {
        "children": {
          "type": "array",
          "items": [
            {
              "type": "array",
              "items": [
                {
                  "type": "string"
                },
                {
                  "type": "integer"
                }
              ]
            },
            {
              "type": "array",
              "items": [
                {
                  "type": "string"
                },
                {
                  "type": "integer"
                }
              ]
            }
          ]
        },
        "u_salary_1_5_year": {
          "type": "integer"
        }
      },
      "required": [
        "children",
        "u_salary_1_5_year"
      ]
    },
    "name": {
      "type": "string"
    },
    "salary": {
      "type": "integer"
    }
  },
  "required": [
    "age",
    "family",
    "name",
    "salary"
  ]
};

pm.test('Schema is valid', function () {
    pm.expect(tv4.validate(resp, schema)).to.be.true;
});

// Проверить что занчение поля name = значению переменной name из окружения
pm.test("Check environment name", function () {
    pm.expect(resp.name).to.eql(environment.name_1);
});

// Проверить что занчение поля age в ответе соответсвует отправленному в запросе значению поля age
pm.test("Check age", function () {
    pm.expect(resp.age).to.eql(req.age);
});

