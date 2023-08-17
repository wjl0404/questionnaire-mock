const Mock = require("mockjs");
const Random = Mock.Random;
function getComponentList() {
  return [
    {
      // Info
      fe_id: "c1",
      type: "questionInfo",
      title: "问卷信息",
      props: { title: "问卷标题", desc: "问卷描述..." },
      isHidden: false,
      isLocked: false,
    },
    {
      // title
      fe_id: "c2",
      type: "questionTitle",
      title: "标题",
      props: { text: "这是问卷标题", level: 1, isCenter: false },
      isHidden: false,
      isLocked: false,
    },
    {
      // input
      fe_id: "c3",
      type: "questionInput",
      title: "输入框1",
      props: {
        title: "输入框",
        placeholder: "输入...",
      },
      isHidden: false,
      isLocked: false,
    },
    {
      // input
      fe_id: "c4",
      type: "questionInput",
      title: "输入框2",
      props: {
        title: "输入框2",
        placeholder: "输入2...",
      },
      isHidden: false,
      isLocked: false,
    },
    {
      // textarea
      fe_id: "c5",
      type: "questionTextarea",
      title: "多行输入框",
      props: {
        title: "多行输入框",
        placeholder: "输入...",
      },
      isHidden: false,
      isLocked: false,
    },
    {
      // paragraph
      fe_id: "c6",
      title: "段落",
      type: "questionParagraph",
      props: {
        text: "这是一个段落",
        isCenter: true,
      },
      isHidden: false,
      isLocked: false,
    },
    {
      // radio
      fe_id: "c7",
      title: "选择",
      type: "questionRadio",
      props: {
        title: "问题",
        isVertical: false,
        options: [
          { value: "item1", text: "选项1" },
          { value: "item2", text: "选项2" },
          { value: "item3", text: "选项3" },
        ],
        value: "",
      },
      isHidden: false,
      isLocked: false,
    },
    {
      // checkbox
      fe_id: "c8",
      title: "多选",
      type: "questionCheckbox",
      props: {
        title: "多选",
        isVertical: false,
        list: [
          { value: "item1", text: "选项1", checked: true },
          { value: "item2", text: "选项2", checked: true },
        ],
      },
      isHidden: false,
      isLocked: false,
    },
  ];
}

module.exports = getComponentList;
