/*
 * @Descripttion: Sustainable
 * @version: 1.0.0
 * @Author: Kenny
 * @Date: 2023-07-17 11:12:53
 * @LastEditors: ~
 * @LastEditTime: 2025-12-17 10:24:23
 */
[
  [1, { title: "三七粉", ellipsis: "ellipsis" }, 10],
  [2, { title: "汤臣倍健维生素C咀嚼片", ellipsis: "ellipsis" }, 1],
  [3, { title: "维生素E软胶囊", ellipsis: "ellipsis" }, 1],
  [4, { title: "褪黑素片（牛奶味）彩盒装（90片）", ellipsis: "ellipsis" }, 1],
  [5, { title: "618-商品1", ellipsis: "ellipsis" }, 1],
  [6, { title: "999抗病毒颗粒一盒20袋-10克一袋", ellipsis: "ellipsis" }, 1],
  [7, { title: "玻璃酸钠滴眼液", ellipsis: "ellipsis" }, 1],
  [8, { title: "感冒灵1", ellipsis: "ellipsis" }, 1],
  [9, { title: "感冒灵", ellipsis: "ellipsis" }, 1],
  [10, { title: "达格列净片(安达唐)", ellipsis: "ellipsis" }, 1],
  [11, { title: "黄芪", ellipsis: "ellipsis" }, 1],
  [12, { title: "玻璃酸钠", ellipsis: "ellipsis" }, 1],
];

//类型
const props = defineProps({
  // 布尔值（默认 false）
  isActive: {
    type: Boolean,
    default: false,
  },

  // 字符串（默认 "default"）
  title: {
    type: String,
    default: "default",
  },

  // 数字（默认 0）
  count: {
    type: Number,
    default: 0,
  },
  // 数组（默认空数组）
  tags: {
    type: Array,
    default: () => [], // 默认值必须是函数返回
  },

  // 对象（默认空对象）
  user: {
    type: Object,
    default: () => ({ name: "John", age: 30 }), // 默认值必须是函数返回
  },

  // 复杂对象（带验证）
  config: {
    type: Object,
    required: true,
    validator: (value) => {
      return "apiUrl" in value && "timeout" in value; // 必须包含 apiUrl 和 timeout
    },
  },

  // 多种类型（String 或 Number）
  id: {
    type: [String, Number],
    default: "default-id",
  },

  // Symbol（默认 Symbol('id')）
  id: {
    type: Symbol,
    default: Symbol("id"),
  },

  // BigInt（默认 0n）
  bigNumber: {
    type: BigInt,
    default: 0n,
  },

  // 函数（默认空函数）
  onClick: {
    type: Function,
    default: () => console.log("Clicked!"),
  },

  // 带参数的函数
  onUpdate: {
    type: Function,
    validator: (fn) => typeof fn === "function", // 确保是函数
  },

  // 必传字符串
  requiredTitle: {
    type: String,
    required: true, // 父组件必须传递
  },
});
