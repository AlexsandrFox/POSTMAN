let resp = pm.response.json();
let req = request.data;

pm.test("Check par-*s", function () {
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
      "type": "integer"
    },
    "daily_food": {
      "type": "number"
    },
    "daily_sleep": {
      "type": "number"
    },
    "name": {
      "type": "string"
    }
  },
  "required": [
    "age",
    "daily_food",
    "daily_sleep",
    "name"
  ]
};
pm.test('Schema is valid', function () {
    pm.expect(tv4.validate(resp, schema)).to.be.true;
});

// В ответе указаны коэффициенты умножения weight, напишите тесты по проверке правильности результата перемножения на коэффициент.
pm.test("Check daily_food", function () {
    pm.expect(+resp.daily_food).to.be.eql(+req.weight * 0.012);
});

pm.test("Check daily_sleep", function () {
    pm.expect(+resp.daily_sleep).to.be.eql(+req.weight * 2.5);

});

