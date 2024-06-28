FROM node:19

# Buat direktori kerja di dalam container
WORKDIR /app

# Salin file package.json dan package-lock.json
COPY package*.json ./

# Install dependensi
RUN npm install --production --verbose


# Salin semua file proyek
COPY . .

# Jalankan build TypeScript
RUN npm run build

# Expose port yang akan digunakan
EXPOSE 3000

# Jalankan aplikasi
CMD ["npm", "run", "start:prod"]

#CMD ["node", "dist/main"]