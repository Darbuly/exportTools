const XLSX = require('xlsx');

// 读取Excel文件
const workbook = XLSX.readFile('?');

// 选择第一个工作表
const sheet_name = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheet_name];

// 将工作表转换为JSON格式
const json_data = XLSX.utils.sheet_to_json(worksheet);

// 输出JSON数据
console.log(JSON.stringify(json_data, null, 2));
