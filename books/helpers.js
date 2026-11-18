/* 題庫小工具
   M(單元, 題目, 正確答案, 錯誤1, 錯誤2, 錯誤3, 解析)  → 選擇題（顯示時自動打亂）
   N(單元, r => ({q, a, e, unit}))                      → 計算填空（每次出題換數字）
   J(單元, r => ({q, lines:[['借','科目',金額],...], extra:[干擾科目], e}))  → 分錄填空
   T(單元, r => ({q, head:[...], rows:[[文字或數字或 {b:答案}]], e}))       → 表格填空
   r.int(最小, 最大, 間隔)、r.pick(陣列) 產生隨機數字 */
window.BOOKS = window.BOOKS || [];
window.QB = (function () {
  const F = n => Number(n).toLocaleString('en-US');
  function bank() {
    const Q = [];
    return {
      Q,
      M(u, q, a, w1, w2, w3, e) { Q.push({ u, t: 'm', q, o: [a, w1, w2, w3], a: 0, e }); },
      N(u, gen) { Q.push({ u, t: 'n', gen }); },
      J(u, gen) { Q.push({ u, t: 'j', gen }); },
      T(u, gen) { Q.push({ u, t: 't', gen }); }
    };
  }
  function attach(bookId, ci, Q) {
    const b = window.BOOKS.find(x => x.id === bookId);
    if (b && b.chapters[ci]) b.chapters[ci].questions = Q;
  }
  return { F, bank, attach };
})();
