# lt-weapp-components

## 安装

npm:
```
npm install lt-weapp-components --save
```
yarn:
```
yarn add lt-weapp-components --save
```

## 使用

1. 在小程序开发工具栏选择**工具-->构建npm**,构建成功后，会在项目中生成`miniprogram_npm`目录，里面包含了我们安装的`npm`包

2. 在小程序开发工具本地设置中勾选**使用npm模块**

3. 引入模块：
````json
{
	"usingComponents": {
		"lt-icon":"/miniprogram_npm/lt-weapp-components/lt-icon/lt-icon"
	}
}

````

