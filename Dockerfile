# Gera o site dentro da imagem. A VPS não precisa de Node instalado no host.
FROM node:20-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

# Nginx Alpine, o mesmo tipo de imagem da stack Luditeca.
FROM nginx:1.27-alpine
COPY nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
