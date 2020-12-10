# mall-admin-app

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### 每日优鲜接口说明

- [每日优鲜b端接口appkey注册地址](https://mallapi.duyiedu.com/login/#/register)

- [每日优鲜b端接口appkey查询地址](https://mallapi.duyiedu.com/login/#/login)


# 每日优鲜接口文档

## 实体说明

### Product 实体

| 字段       |     类型      | 备注                             |
| :--------- | :-----------: | -------------------------------- |
| title      |    String     | 商品标题                         |
| desc       |    String     | 商品描述                         |
| category   |    Number     | 商品类目                         |
| c_items    | Array<String> | 商品子类目                       |
| tags       | Array<String> | 商品标签                         |
| price      |    Number     | 商品价格                         |
| price_off  |    Number     | 商品折扣价                       |
| unit       |    String     | 商品单位                         |
| status     |      Int      | 商品上架状态 0 是下架 ，1 是上架 |
| images     |  Array<Url>   | 商品图片                         |
| inventory  |      Int      | 商品库存量                       |
| sale       |      Int      | 商品销量                         |
| \_id       |    String     | 唯一确定商品的 id 值             |
| updateTime |    String     | 更新时间                         |

### Category 实体

| 字段    |     类型      | 备注                  |
| :------ | :-----------: | --------------------- |
| name    |    String     | 商品类目名称          |
| id      |    Number     | 商品类目 id           |
| c_items | Array<String> | 商品类目下的子类目    |
| \_id    |    String     | 商品类目对应的唯一 id |

## 接口文档

域名： https://mallapi.duyiedu.com/

### 用户登录

url: /passport/login

method: post

请求参数：

| 字段     |  类型  | 是否必须 | 备注     |
| :------- | :----: | :------: | -------- |
| email    | String |   必须   | 登录邮箱 |
| password | String |   必须   | 登录密码 |

### 用户注册

url: /passport/logon

method: post

请求参数：

| 字段     |  类型  | 是否必须 | 备注                                                             |
| :------- | :----: | :------: | ---------------------------------------------------------------- |
| email    | String |   必须   | 用户邮箱                                                         |
| password | String |   必须   | 用户密码                                                         |
| code     | String |   必须   | 验证码                                                           |
| username | String |   必须   | 用户名                                                           |
| role     | String |  非必须  | 用户角色 (可选值 customer： 代表普通用户， admin:代表管理员用户) |

### 找回密码

url: /passport/findBack

method: post

请求参数：

| 字段     |  类型  | 是否必须 | 备注                                                             |
| :------- | :----: | :------: | ---------------------------------------------------------------- |
| email    | String |   必须   | 用户邮箱                                                         |
| password | String |   必须   | 用户密码                                                         |
| code     | String |   必须   | 验证码                                                           |

### 修改用户信息
url: /passport/changeUserInfo

method: put

请求参数：

| 字段     |  类型  | 是否必须 | 备注                                                             |
| :------- | :----: | :------: | ---------------------------------------------------------------- |
| email    | String |   必须   | 用户邮箱                                                         |
| password | String |   必须   | 用户密码                                                         |
| newPassword | String |   非必须   | 新的用户密码                                                         |
| code     | String |   必须   | 验证码                                                           |
| username | String |   必须   | 用户名                                                           |
| role     | String |  非必须  | 用户角色 (可选值 customer： 代表普通用户， admin:代表管理员用户) |

### 获取验证码
url: /passport/getCode

method: post

请求参数：

| 字段     |  类型  | 是否必须 | 备注                                                             |
| :------- | :----: | :------: | ---------------------------------------------------------------- |
| email    | String |   必须   | 用户邮箱                                                         |


### 查询产品列表

url: /products/all

method: get

请求参数：

| 字段       |  类型  | 是否必须 | 备注                               |
| :--------- | :----: | :------: | ---------------------------------- |
| appkey     | String |   必须   | 用户访问接口时所必须携带的身份凭证 |
| page       | Number |  非必须  | 获取产品的页码                     |
| size       | Number |  非必须  | 获取产品每一页的条数               |
| searchWord | String |  非必须  | 检索产品的关键词                   |
| category   | Number | 非必须   | 检索产品的类目|

响应数据：
| 字段 | 类型 | 是否必须 | 备注 |
|:-------| :-------: | :-------: |-------|
| data | List<Product> | 必须 | 返回的数据 |
| msg | String | 响应描述信息|
|status | String | 响应状态 success 代表成功 fail 代表失败 |

### 查询类目列表信息

url: /category/all

method: get

请求参数：

| 字段   |  类型  | 是否必须 | 备注                               |
| :----- | :----: | :------: | ---------------------------------- |
| appkey | String |   必须   | 用户访问接口时所必须携带的身份凭证 |
| page   | Number |  非必须  | 获取产品类目的页码                 |
| size   | Number |  非必须  | 获取产品类目每一页的条数           |

响应数据：
| 字段 | 类型 | 是否必须 | 备注 |
|:-------| :-------: | :-------: |-------|
| data | List<Category> | 必须 | 返回的数据 |
| msg | String | 响应描述信息|
|status | String | 响应状态 success 代表成功 fail 代表失败 |

### 新增产品接口

url: /products/add

method: post

请求参数：

| 字段      |     类型      | 是否必须 | 备注                               |
| :-------- | :-----------: | :------: | ---------------------------------- |
| appkey    |    String     |   必须   | 用户访问接口时所必须携带的身份凭证 |
| title     |    String     |   必须   | 商品标题                           |
| desc      |    String     |  非必须  | 商品描述                           |
| category  |    Number     |   必须   | 商品类目                           |
| c_items   | Array<String> |  非必须  | 商品子类目                         |
| tags      | Array<String> |   必须   | 商品标签                           |
| price     |    Number     |   必须   | 商品价格                           |
| price_off |    Number     |   必须   | 商品折扣价                         |
| unit      |    String     |   必须   | 商品单位                           |
| status    |      Int      |   必须   | 商品上架状态 0 是下架 ，1 是上架   |
| images    |  Array<Url>   |   必须   | 商品图片                           |
| inventory |      Int      |   必须   | 商品库存量                         |

响应数据：
| 字段 | 类型 | 是否必须 | 备注 |
|:-------| :-------: | :-------: |-------|
| data | Object | 必须 | 返回的数据 |
| msg | String | 响应描述信息|
|status | String | 响应状态 success 代表成功 fail 代表失败 |

### 上传图片接口

url: /upload/images

method: POST

请求参数：
| 字段 | 类型 | 是否必须 | 备注 |
|:-------| :-------: | :-------: |-------|
| appkey | String | 必须 | 用户访问接口时所必须携带的身份凭证 |
| avatar | Binary | 必须 | 上传的文件 |

响应数据：
| 字段 | 类型 | 是否必须 | 备注 |
|:-------| :-------: | :-------: |-------|
| data | Object | 必须 | 返回上传到服务器的路径信息 |
| msg | String | 响应描述信息|
|status | String | 响应状态 success 代表成功 fail 代表失败 |

### 编辑产品接口

url: /products/edit

method: PUT

请求参数：
| 字段 | 类型 | 是否必须 | 备注 |
|:-------| :-------: | :-------: |-------|
| appkey | String | 必须 | 用户访问接口时所必须携带的身份凭证 |
| title | String | 必须 | 商品标题 |
| desc | String | 非必须 | 商品描述 |
| category | Number | 必须 | 商品类目 |
|c_items | Array<String> | 非必须 | 商品子类目 |
|tags | Array<String>| 必须 | 商品标签|
| price | Number | 必须 | 商品价格 |
|price_off | Number | 必须 | 商品折扣价 |
| unit | String | 必须 | 商品单位 |
| status | Int | 必须 | 商品上架状态 0 是下架 ，1 是上架|
| images | Array<Url> | 必须 | 商品图片|
| inventory | Int | 必须 | 商品库存量 |
| sale | Int | 必须 | 商品销量 |
| \_id | String | 必须 | 唯一确定商品的 id 值 |

响应数据：
| 字段 | 类型 | 是否必须 | 备注 |
|:-------| :-------: | :-------: |-------|
| data | Object | 必须 | 返回的数据 |
| msg | String | 响应描述信息|
|status | String | 响应状态 success 代表成功 fail 代表失败 |


### 查询商品详情

url: /products/:id

method: get

请求参数：
| 字段 | 类型 | 是否必须 | 备注 |
|:-------| :-------: | :-------: |-------|
| appkey | String | 必须 | 用户访问接口时所必须携带的身份凭证 |

响应数据：
| 字段 | 类型 | 是否必须 | 备注 |
|:-------| :-------: | :-------: |-------|
| data | Object<Product> | 必须 | 返回的数据 |
| msg | String | 响应描述信息|
|status | String | 响应状态 success 代表成功 fail 代表失败 |

### 删除商品

url: /products/:id

method: delete

请求参数：
| 字段 | 类型 | 是否必须 | 备注 |
|:-------| :-------: | :-------: |-------|
| appkey | String | 必须 | 用户访问接口时所必须携带的身份凭证 |

响应数据：
| 字段 | 类型 | 是否必须 | 备注 |
|:-------| :-------: | :-------: |-------|
| data | Object | 必须 | 返回的数据 |
| msg | String | 响应描述信息|
|status | String | 响应状态 success 代表成功 fail 代表失败 |


### 商品类目新增

url: /category/add

method: GET

请求参数：
| 字段 | 类型 | 是否必须 | 备注 |
|:-------| :-------: | :-------: |-------|
| appkey | String | 必须 | 用户访问接口时所必须携带的身份凭证 |
| id | String | 必须 | 商品类目 id |
|name | String | 必须| 商品类目名称|
|c_items | Array<String> | 必须 | 商品子类目 |

响应数据：
| 字段 | 类型 | 是否必须 | 备注 |
|:-------| :-------: | :-------: |-------|
| data | Object<Category> | 必须 | 返回的数据 |
| msg | String | 响应描述信息|
|status | String | 响应状态 success 代表成功 fail 代表失败 |

### 商品类目编辑

url: /category/edit

method: PUT

请求参数：
| 字段 | 类型 | 是否必须 | 备注 |
|:-------| :-------: | :-------: |-------|
| appkey | String | 必须 | 用户访问接口时所必须携带的身份凭证 |
| id | String | 必须 | 商品类目 id |
|name | String | 必须| 商品类目名称|
|c_items | Array<String> | 必须 | 商品子类目 |

请求参数：
| 字段 | 类型 | 是否必须 | 备注 |
|:-------| :-------: | :-------: |-------|
| appkey | String | 必须 | 用户访问接口时所必须携带的身份凭证 |

响应数据：

| 字段     |  类型  | 是否必须 | 备注                                                             |
| :------- | :----: | :------: | ---------------------------------------------------------------- |
| status    | String |   必须   | 处理状态（success为成功, fail为失败）                                                         |
| data | Object |   必须   | 返回数据                                                         |
| msg     | String |   必须   | 返回提示信息  
### 商品类目删除

url: /category/:id

method: delete

请求参数：
| 字段 | 类型 | 是否必须 | 备注 |
|:-------| :-------: | :-------: |-------|
| appkey | String | 必须 | 用户访问接口时所必须携带的身份凭证 |

响应数据：

| 字段     |  类型  | 是否必须 | 备注                                                             |
| :------- | :----: | :------: | ---------------------------------------------------------------- |
| status    | String |   必须   | 处理状态（success为成功, fail为失败）                                                         |
| data | Object |   必须   | 返回数据                                                         |
| msg     | String |   必须   | 返回提示信息                                                           |

## 上传图片

url: /upload/images

method: POST

请求参数：
| 字段 | 类型 | 是否必须 | 备注 |
|:-------| :-------: | :-------: |-------|
| appkey | String | 必须 | 用户访问接口时所必须携带的身份凭证 |
| avatar | FileBanary | 必须 | 图片数据 |


响应参数：
| 字段 | 类型 | 是否必须 | 备注 |
|:-------| :-------: | :-------: |-------|
| status | String | 必须 | 响应状态 |
| msg | String | 必须 | 响应信息 |
| data | Object | 必须 | 响应提交到远端之后的图片信息 |

响应数据例子：
{
    status: 'success',
    msg: '成功',
    data: {
        name: filename,
        status: 'done',
        url: result.url,
        thumbUrl: result.url,
    },
}