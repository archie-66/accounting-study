# 會計學闖關讀書站

手機也好用的讀書網站：課程、練習題、閃卡、模擬考、錯題本，可以用 Google 帳號登入保存進度。

網址：https://archie-66.github.io/accounting-study/

## 目前的課本

**會計學（三）**（技術型高中商管群・108 課綱），5 章 27 個單元，每個單元 40 題，共 1,080 題。

| 章 | 單元 |
| --- | --- |
| 1 現金及內部控制 | 現金範圍、內部控制、零用金、銀行存款調節表、現金短溢 |
| 2 應收款項 | 種類、預期信用減損、估計方法、票據利息、票據貼現、到期兌現與拒付 |
| 3 存貨 | 盤存制度、成本流程、成本與淨變現價值孰低、存貨錯誤、存貨範圍、存貨估計 |
| 4 證券投資 | 分類、買入 FV-PL、股利、期末評價與出售、交易成本與債券 |
| 5 長期營業用資產 | 取得成本、折舊方法、資本與收益支出、處分、期中取得 |

題型：選擇題、計算填空、分錄題、表格填空。計算、分錄和表格題每次出題都會換數字。

## 開啟 Google 登入（只要做一次）

登入功能用 Google 的 Firebase（免費方案就夠用）。

1. 到 https://console.firebase.google.com 用 Google 帳號登入，按「新增專案」，名稱可以叫 `accounting-study`（Google Analytics 可以關掉）。
2. 左邊選單「建構 → Authentication」→「開始使用」→「登入方式」→ 選 **Google** → 啟用 → 儲存。
3. 同一頁的「設定 → 已授權網域」→「新增網域」→ 輸入 `archie-66.github.io`。
4. 左邊選單「建構 → Firestore Database」→「建立資料庫」→ 位置選 `asia-east1`（台灣）→ 以「正式版模式」建立。
5. Firestore 的「規則」分頁，整段換成下面這些，按「發布」：

   ```
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /progress/{uid} {
         allow read, write: if request.auth != null && request.auth.uid == uid;
       }
     }
   }
   ```

   這樣每個人只能讀寫自己的進度。
6. 專案首頁按「</>」（網頁）新增應用程式，取名後會看到一段 `firebaseConfig`。把裡面的 `apiKey`、`authDomain`、`projectId`、`appId` 四個值，貼到這個 repo 的 `firebase-config.js`。
7. 存檔、推上 GitHub。等一兩分鐘，打開網站的「選擇課本」頁，就會出現「用 Google 登入」。

登入後，手機上原本的進度會和帳號裡的進度合併（經驗值取比較高的、完成的課程合在一起）。

## 加新課本

1. 在 `books/` 資料夾新增課本檔，格式照 `books/accounting-3.js`；題庫可以像 `books/accounting-3-ch1.js` 一樣分章放。
2. 在 `index.html` 的課本 `<script>` 那幾行下面加上新檔案。

也可以在網站裡按「加入新課本」，貼上課本資料（只存在自己的瀏覽器或登入的帳號）。

## 進度

沒登入時，進度存在這台裝置的瀏覽器；登入 Google 後，會同時存到帳號裡。
