# 组成部分
  1. 文档声明
  2. 属性列表   
    * version:版本号（required）1.0
    * encoding:编码方式 (当前文档使用的字符集 默认ISO-8859-1)
    * standalone:是否独立 （yes 不依赖其他文件 no 依赖其他文件）
  3. 指令
    <!-- <?xml-stylesheet type='text/css' href='a.css' ?> -->
  4. 属性   
    * id 属性值唯一
  5. 文本   
    * CDATA区:再该区域内的文本会被原样展示 （<![CDATA[]]>）
# 约束
  1. 概述
    * 框架解析xml，开发者编写xml，xml作为媒介
    * 说明文档：规定xml文档的书写规则（约束文档）
    * 约束文档一般由框架来写
    * 作为框架的使用者
      1.可以读懂xml
      2.能够在xml中引入约束文档 
  2. 分类
    * DTD:一种简单的约束技术
      1. 引入dtd 文档到xml文档中
        * 将约束规则定义在xml文档中
        * 将约束规则定义在外部dtd文件中
          1. 本地 <!DOCTYPE 根标签名 SYSTEM  "dtd文件的位置URL">
          2. 网络 <!DOCTYPE 根标签名 PUBLIC "dtd文件名称" "dtd文件的位置URL">
    * Schema：一种复杂的约束技术