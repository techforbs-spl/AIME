mkdir -p server
cat > server/Dockerfile <<'EOF'
# server/Dockerfile
FROM node:18-alpine

WORKDIR /app

# copy package files and install production deps first (small layer)
COPY package*.json ./
RUN npm ci --only=production

# copy full source (we'll install dev deps for build)
COPY . .

# install dev deps, build typescript, then prune dev deps
RUN npm install --include=dev --no-audit --no-fund && npm run build && npm prune --production

ENV PORT=${PORT:-3000}
EXPOSE 3000

CMD ["node", "dist/index.js"]
EOF
