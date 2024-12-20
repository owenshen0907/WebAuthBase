# 使用官方的 Node.js 运行时作为基础镜像
FROM node:20.18-alpine AS build

LABEL authors="owen"

# 设置工作目录
WORKDIR /app

# 安装 pnpm
RUN npm install -g pnpm

# 设置 pnpm 使用国内源
RUN pnpm config set registry https://registry.npmmirror.com

# 安装应用程序的依赖（利用 Docker 缓存）
COPY package*.json ./

RUN pnpm install

# 复制应用程序源代码
COPY . .

# 接受构建参数
ARG REACT_APP_API_BASE_URL
ARG REACT_APP_REDIRECT_URL
ARG PORT=3030
ARG NODE_ENV=production

# 设置环境变量
ENV REACT_APP_API_BASE_URL=${REACT_APP_API_BASE_URL}
ENV REACT_APP_REDIRECT_URL=${REACT_APP_REDIRECT_URL}
ENV PORT=${PORT}
ENV NODE_ENV=${NODE_ENV}

# 暴露端口 3000
EXPOSE 3030

# 启动应用程序
CMD ["pnpm", "start"]