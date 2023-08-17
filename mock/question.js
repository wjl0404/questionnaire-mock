const Mock = require("mockjs");
const Random = Mock.Random;
const getComponentList = require("./data/getComponentList");
const getQuestionList = require("./data/getQuestionList");
module.exports = [
  {
    // get a single questionnaire information
    url: "/api/question/:id",
    method: "get",
    response(ctx) {
      return {
        errno: 0,
        data: {
          id: Random.id(),
          title: Random.ctitle(),
          desc: "this is a description",
          css: "",
          js: "",
          isDeleted: false,
          isPublished: true,
          componentList: getComponentList(),
        },
      };
    },
  },
  {
    // create a new questionnaire
    url: "/api/question",
    method: "post",
    response() {
      return {
        errno: 0,
        data: {
          id: Random.id(),
        },
      };
    },
  },
  {
    // create a new questionnaire
    url: "/api/question",
    method: "get",
    response(ctx) {
      const { url = "", query = {} } = ctx;

      const isDeleted = url.indexOf("isDeleted=true") >= 0;
      const isStar = url.indexOf("isStar=true") >= 0;
      const pageSize = parseInt(query.pageSize) || 10;
      return {
        errno: 0,
        data: {
          list: getQuestionList({ len: pageSize, isDeleted, isStar }),
          total: 100,
        },
      };
    },
  },
  // modify
  {
    url: "/api/question/:id",
    method: "patch",
    response() {
      return {
        errno: 0,
      };
    },
  },
  {
    url: "/api/question/duplicate/:id",
    method: "post",
    response() {
      return {
        errno: 0,
        data: {
          id: Random.id(),
        },
      };
    },
  },
  {
    url: "/api/question",
    method: "delete",
    response() {
      return {
        errno: 0,
      };
    },
  },
];
