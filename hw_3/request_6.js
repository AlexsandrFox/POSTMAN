let resp = pm.response.json();
let req = request.data;

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
    "Cur_Abbreviation": {
      "type": "string"
    },
    "Cur_ID": {
      "type": "integer"
    },
    "Cur_Name": {
      "type": "string"
    },
    "Cur_OfficialRate": {
      "type": "number"
    },
    "Cur_Scale": {
      "type": "integer"
    },
    "Date": {
      "type": "string"
    }
  },
  "required": [
    "Cur_Abbreviation",
    "Cur_ID",
    "Cur_Name",
    "Cur_OfficialRate",
    "Cur_Scale",
    "Date"
  ]
};

pm.test('Schema is valid', function () {
    pm.expect(tv4.validate(resp, schema)).to.be.true;
});




