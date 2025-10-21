# Node 20 kullan (Vite 7 için gerekli)
FROM node:20-alpine AS builder

WORKDIR /app

# Package files kopyala
COPY package*.json ./

# ÖNEMLİ: devDependencies'leri de yükle (tailwindcss, postcss için)
RUN npm ci

# Tüm source code'u kopyala
COPY . .

# Build
RUN npm run build

# Production image - Nginx ile serve et
FROM nginx:alpine

# Build output'u nginx'e kopyala
COPY --from=builder /app/dist /usr/share/nginx/html

# Nginx config (SPA routing için)
COPY <<'EOF' /etc/nginx/conf.d/default.conf
server {
    listen 80;
    server_name _;
    root /usr/share/nginx/html;
    index index.html;

    # SPA routing - tüm istekleri index.html'e yönlendir
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Static assets cache
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # CORS headers (eğer API çağrıları varsa)
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
}
EOF

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]