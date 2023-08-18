const req = {
  comment: "Very good",
  userId: 123,
};

// console.log(req);
const result = JSON.stringify(req);
// console.log(result);

const res = {
  res_code: 200,
  comment_posted: "very good",
  approved: true,
};

const res_ser = JSON.stringify(res);
console.log(JSON.parse(res_ser));
