'use strict'

const taskMonth = document.getElementById('taskmonth');     // 実施月
const taskStatus = document.getElementById('taskstatus');   // 進捗
const taskTitle = document.getElementById('tasktitle');     // タイトル
const taskDetail = document.getElementById('taskdetail');   // 概要
const submitButton = document.getElementById('submit');     // 登録ボタン
const taskListTbody = document.getElementById('tasklist');  // タスクリスト

// タスクを管理する配列
// { month: 実施月, status: 進捗, title: タイトル, detail: 概要 }
const tasks = []

// 登録ボタンのクリックイベント
submitButton.onclick = function() {
    const task = {
        month: taskMonth.value,    // 実施月
        status: taskStatus.value,  // 進捗
        title: taskTitle.value,    // タイトル
        detail: taskDetail.value   // 概要
    }

    addTask(task);
}

// タスクを登録する関数
function addTask(task) {
    tasks.push(task);

    displayTaskList();
}

// タスクを削除する関数
function deleteTask(deleteIndex) {
    tasks.splice(deleteIndex, 1);

    displayTaskList();
}

function displayTaskList() {
    // テーブル本体を空にする
    taskListTbody.innerText = "";
    for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];
        const taskTr = document.createElement('tr');

        // 実施月
        const monthTd = document.createElement('td');
        monthTd.innerText = task.month;
        taskTr.appendChild(monthTd);

        // 進捗
        const statusTd = document.createElement('td');
        statusTd.innerText = task.status;
        taskTr.appendChild(statusTd);

        // タイトル
        const titleTd = document.createElement('td');
        titleTd.innerText = task.title;
        taskTr.appendChild(titleTd);

        // 概要
        const detailTd = document.createElement('td');
        detailTd.innerText = task.detail;
        taskTr.appendChild(detailTd);

        // 削除ボタン
        const deleteTd = document.createElement('td');
        const deleteButton = document.createElement('button');
        deleteButton.innerText = '削除';
        // 削除ボタンのクリックイベント
        deleteButton.onclick = function() {
            deleteTask(i);
        }
        deleteTd.appendChild(deleteButton);
        taskTr.appendChild(deleteTd);

        // tr を tbody に追加
        taskListTbody.appendChild(taskTr);
    }
}

// サンプルデータを追加する関数
function addSample() {
    const task = {
        month: '例)2021-07',
        status: '済',
        title: 'A社経営統合プロジェクト',
        detail: '経営統合に伴う業務プロセス統合プロジェクト。\nプロジェクトリーダー（メンバー4人）として担当。\nQDC目標いずれも達成。CS評価で5をいただいた。'
      }
      
      addTask(task);
}

addSample();