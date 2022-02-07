let resp = pm.response.json();
let req = request.data;


console.log ("Salary = " ,resp.salary)
console.log ("req_selery = " ,req.salary)

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
    "name": {
      "type": "string"
    },
    "salary": {
      "type": "array",
      "items": [
        {
          "type": "integer"
        },
        {
          "type": "string"
        },
        {
          "type": "string"
        }
      ]
    }
  },
  "required": [
    "age",
    "name",
    "salary"
  ]
};
pm.test('Schema is valid', function () {
    pm.expect(tv4.validate(resp, schema)).to.be.true;
});

// В ответе указаны коэффициенты умножения salary, напишите тесты по проверке правильности результата перемножения на коэффициент.
pm.test("Check 6_months", function () {
    pm.expect(+resp.salary[1]).to.be.eql(+req.salary * 2);
});

pm.test("Check 12_months", function () {
    pm.expect(+resp.salary[2]).to.be.eql(+req.salary * 3);
});

// проверить, что 2-й элемент массива salary больше 1-го и 0-го
pm.test("Check array_0", function () { 
    pm.expect(Number(resp.salary[2])).to.greaterThan(Number(resp.salary[0])); 
});

 pm.test("Check array_1", function () { 
    pm.expect(Number(resp.salary[2])).to.be.greaterThan(Number(resp.salary[1])); 
});
