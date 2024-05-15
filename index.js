#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// 获取当前目录
const currentDir = process.cwd();

// 文件名
const files = ['export.js', 'dmm_export.js'];

// 创建文件
files.forEach(file => {
  const filePath = path.join(currentDir, file);
  fs.writeFile(filePath, '', (err) => {
    if (err) {
      console.error(`Error creating file ${file}:`, err);
    } else {
      console.log(`File ${file} created successfully.`);
    }
  });
});
