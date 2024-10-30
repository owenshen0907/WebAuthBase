# 使用官方的 Node.js 运行时作为基础镜像
FROM node:16-alpine

LABEL authors="owen"

# 设置工作目录
WORKDIR /app

# 安装应用程序的依赖（利用 Docker 缓存）
COPY package*.json ./
RUN npm install

# 复制应用程序源代码
COPY . .

# 暴露端口 3000
EXPOSE 3030

# 启动应用程序
CMD ["npm", "start"]