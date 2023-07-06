// generate questionnaire data list
const Mock = require("mockjs");
const Random = Mock.Random;

function getQuestionList(option = {}) {
  const { isDeleted = false, isStar = false, len = 10 } = option;
  const list = [];
  for (let i = 0; i < len; i++) {
    list.push({
      _id: Random.id(),
      title: Random.ctitle(),
      isPublished: Random.boolean(),
      isStar: isStar ? true : Random.boolean(),
      answerCount: Random.natural(50, 100),
      createdAt: Random.datetime(),
      isDeleted,
    });
  }
  return list;
}
module.exports = getQuestionList;
