let resp = pm.response.json();
let req = request.data;

pm.test("Check resp", function () {
    pm.expect(resp.data).to.eql(req.data);

});

// Можете взять любой объект из присланного списка, используйте js random.
var rand = Math.floor(Math.random() * resp.length);
var rValue = resp[rand];
console.log(rValue)

pm.environment.set("Cur_ID", rValue.Cur_ID)
