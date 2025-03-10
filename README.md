# 📚 午餐零廚餘互動漫畫

## 📌 專案介紹
本專案是一個遊戲化的互動式學習工具，讓學生透過選擇不同的選項來推進故事情節，最終產出一個與 SDGs 目標相關的漫畫。

此專案聚焦於 **SDG 12 負責任的消費與生產**，特別是 **減少食物浪費**。學生在遊戲過程中將透過 **選擇故事選項** 來學習如何以負責任的方式處理食物，並且能夠 **一鍵複製生成圖片的指令**，用於 Stable Diffusion 來產生符合故事內容的圖像。

## 🎯 特色與功能

### 1️⃣ 結合 SDGs 教材
- 以 **SDG 12 目標** 為主題，教導學生如何減少食物浪費。
- 每個選項都對應一個真實可行的環保行動，例如：
  - 計畫用餐 (**Planning the meal**)
  - 適當儲存食物 (**Preserving the food right**)
  - 利用剩菜 (**Using leftovers**)

### 2️⃣ AI 生成漫畫
- 學生在遊戲中做出的選擇，將影響漫畫內容。
- 每個場景提供對應的 **Stable Diffusion 文字描述**，讓學生能夠 **一鍵複製** 指令到 Stable Diffusion，生成漫畫場景圖片。

### 3️⃣ 遊戲化學習
- 考慮到 **學生打字較慢**，遊戲採用 **選擇題方式**，讓學生點擊選項來進行學習，而非手動輸入內容。
- 選擇的內容會影響故事發展，讓學生更有參與感。

### 4️⃣ Stable Diffusion 指令複製
- 學生選擇選項後，可 **直接點擊按鈕，自動複製** 生成圖片的文字描述 (**Prompt**)。
- 這些指令可直接 **貼上 Stable Diffusion**，讓學生生成屬於自己的漫畫圖片。

---

## 👹 使用方式

### 🔹 **開始遊戲**
1. 進入首頁，點擊 **「開始製作」**。
2. 進入第一幕，選擇要學習的 **減少食物浪費行動**。
3. 根據選擇的內容，進入下一幕，繼續影響故事走向。

### 🔹 **遊戲畫面**
- 每一幕有 **一個選擇題**，點擊選項後，畫面中央的文本會更新為選擇的內容。
- 點擊 **「複製指令」** 按鈕，即可獲取 Stable Diffusion 生成圖片的指令。

### 🔹 **生成 AI 圖片**
1. 點擊 **「複製指令」**。
2. 打開 **Stable Diffusion**，將指令 **貼上 Prompt 欄位**。
3. 點擊 **「生成圖片」**，即可獲得對應的漫畫場景！

---

## 🛠️ 技術架構

### **前端技術**
- **React.js** 作為前端框架
- **React Router** 負責頁面導覽
- **Bootstrap** 提供 UI 樣式
- **CSS** 設計互動效果

### **遊戲流程**
- `Start.js` (遊戲開始頁面)
- `Game1.js - Game4.js` (遊戲各幕)
- 透過 `onClick` 事件 讓學生點擊選項來改變劇情。
- 提供 **Stable Diffusion 指令複製功能**。

---

## 🎮 遊戲範例

### **第一幕**
學生選擇 **「Planning the meal」**，Stable Diffusion 會生成：
```text
a man is thinking what to eat at lunch
```

### **第二幕**
學生選擇 **「have leftover food」**，Stable Diffusion 會生成：
```text
a plate with leftover food on it
```

### **第三幕**
學生選擇 **「donate it to food bank」**，Stable Diffusion 會生成：
```text
a man is donating food
```

### **第四幕**
最終畫面：「**My lunch, zero food waste**」，Stable Diffusion 會生成：
```text
a man is smiling to the front and giving a victory pose
```

---

## 📄 結論
這個專案透過 **SDGs 教育、AI 生成漫畫、遊戲化學習**，讓學生可以輕鬆理解 **食物浪費議題**，並透過 Stable Diffusion 讓學習變得 **更有趣、更具互動性**。

這不只是一次學習活動，更是一種 **寓教於樂的新方式！** 🚀🎨
