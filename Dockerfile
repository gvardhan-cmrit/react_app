
FROM node:23-alpine AS builder 

WORKDIR /app 

RUN apk add --no-cache git

RUN git clone https://github.com/gvardhan-cmrit/react_app.git 

WORKDIR /app/react_app 

RUN npm install 

RUN npm run build

FROM nginx:1.27.5-alpine  AS production 

COPY --from=builder /app/react_app/dist/ /usr/share/nginx/html

EXPOSE 80 


