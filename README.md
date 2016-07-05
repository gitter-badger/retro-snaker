# Retro Snaker

> 第一步：切换到我们的主分支：`feature/ycc-retro-snaker`分支

    git checkout feature/ycc-retro-snaker

> 第二步：获去主分支的最新代码

    git pull 

> 第三步：切换到自己的分支。如：feature/ycc-caiyawen-snaker

    git checkout feature/ycc-caiyawen-snaker

> 第四步：将主分支合并到自己的分支

    git merge feature/ycc-retro-snaker

> 第五步：安装依赖

    npm install

> 第六步：webpack打包

    webpack

# 组织代码说明；
    
    RestroSnaker----
        |--assets               //存放所有静态原始资源
        |   |--img              //存放图片
        |   |--js               // all js files
        |   |   |--app.js       
        |   |   |--view.js
        |   |   |--controller.js
        |   |   |--model.js
        |   |
        |   |--less
        |       |--mail.less
        |       |--index.less
        |   
        |--dist
        |   |--bundles
        |   |   |--app.bundle.js    // the final bundle of the app
        |   |
        |   |--css
        |       |--main.css         // the style file of the app
        |   
        |--node_modules
        |--app.js
        |--index.html
        |--package.json
        |--webpack.config.js
        


> 重点说明

- 属于视觉层的脚本写在`view.js`里面，属于控制层的脚本写在`controller.js`里面，属于数据模型层的脚本写在`model.js`里面；
- 样式禁止写在`mail.less`里面，`mail.less`只作为所有less文件的总的入口；
- 在代码中添加必要的注视，方便团队成员分析代码；
- 所有修改写必要的修改文档，迭代文档；

> 重大修改迭代文档

- 2016年07月04日  完成整体架构，完成格子生成  陈海蛟
- 2016年07月05日  完成底层数据结构，完成失败检测，完成键盘控制转向  陈海蛟
- ...

> Talk is cheap , show me the code --Linus Torvalds
