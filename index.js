#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// 模板文件路径
const templates = {
  'export.js': 'export_tmp.js',
  'dmm_export.js': 'dmm_export_tmp.js'
};
// 获取当前目录
const currentDir = process.cwd();

// 读取并生成文件
Object.entries(templates).forEach(([targetFile, templateFile]) => {
  const templateFilePath = path.join(__dirname, templateFile);
  fs.readFile(templateFilePath, 'utf8', (err, templateContent) => {
    if (err) {
      console.error(`Error reading template file ${templateFile}:`, err);
      return;
    }

    // 根据模板文件名和目标文件名设置导入路径
    const importPath = path.relative(currentDir, templateFilePath);

    // 替换模板中的导入路径
    const replacedContent = templateContent.replace(/{{importPath}}/g, importPath);

    // 写入目标文件
    const filePath = path.join(currentDir, targetFile);
    fs.writeFile(filePath, replacedContent, (err) => {
      if (err) {
        console.error(`Error creating file ${targetFile}:`, err);
      } else {
        console.log(`File ${targetFile} created successfully.`);
      }
    });
  });
});