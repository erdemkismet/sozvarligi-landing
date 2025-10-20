# Docker Deployment - Sözvarlığı Landing

## 🐳 Docker Container Yapısı

Bu proje **landing** isimli bir Docker container olarak çalıştırılmak üzere yapılandırılmıştır.

### Özellikler
- **Multi-stage build** ile optimize edilmiş image boyutu (~20MB)
- **Nginx Alpine** ile yüksek performanslı statik dosya sunumu
- **Gzip compression** aktif
- **Security headers** eklenmiş
- **Cache optimization** yapılmış

## 🚀 Hızlı Başlangıç

### Docker Compose ile Çalıştırma

```bash
# Container'ı build et ve çalıştır
docker-compose up -d

# Container'ı durdur
docker-compose down

# Logları görüntüle
docker-compose logs -f landing
```

### Docker ile Manuel Çalıştırma

```bash
# Image'ı build et
docker build -t sozvarligi-landing:latest .

# Container'ı çalıştır
docker run -d \
  --name landing \
  -p 8080:80 \
  --restart unless-stopped \
  sozvarligi-landing:latest
```

### Kolay Script Kullanımı

```bash
# Tüm işlemleri yap (build + run)
./docker-run.sh all

# Sadece build
./docker-run.sh build

# Sadece çalıştır
./docker-run.sh run

# Durdur
./docker-run.sh stop

# Logları göster
./docker-run.sh logs
```

## 📁 Dosya Yapısı

```
├── Dockerfile          # Multi-stage Docker build
├── docker-compose.yml  # Docker Compose konfigürasyonu
├── nginx.conf         # Nginx web server konfigürasyonu
├── .dockerignore      # Docker build'de hariç tutulacak dosyalar
└── docker-run.sh      # Yardımcı script
```

## 🔧 Konfigürasyon

### Port Değiştirme
`docker-compose.yml` dosyasında:
```yaml
ports:
  - "3000:80"  # Sol taraf host portu, sağ taraf container portu
```

### Container İsmi
Container ismi **landing** olarak sabitlenmiştir. `docker-compose.yml` içinde:
```yaml
container_name: landing
```

## 🌐 Erişim

Container çalıştıktan sonra:
- **Lokal**: http://localhost:8080
- **Network**: http://[IP_ADRESINIZ]:8080

## 📊 Container Bilgileri

```bash
# Container durumu
docker ps | grep landing

# Container istatistikleri
docker stats landing

# Container içine giriş
docker exec -it landing sh
```

## 🔒 Güvenlik

Nginx konfigürasyonunda şu güvenlik başlıkları eklenmiştir:
- X-Frame-Options
- X-Content-Type-Options
- X-XSS-Protection

## 📈 Performans

- **Gzip Compression**: Tüm text tabanlı dosyalar sıkıştırılır
- **Cache Headers**: Statik dosyalar 1 yıl cache'lenir
- **Multi-stage Build**: Final image sadece ~20MB

## 🚢 Production Deployment

### Cloud Platformları

**AWS ECS / Fargate:**
```bash
docker tag sozvarligi-landing:latest [ECR_URI]:latest
docker push [ECR_URI]:latest
```

**Google Cloud Run:**
```bash
docker tag sozvarligi-landing:latest gcr.io/[PROJECT_ID]/landing:latest
docker push gcr.io/[PROJECT_ID]/landing:latest
```

**Azure Container Instances:**
```bash
docker tag sozvarligi-landing:latest [ACR_NAME].azurecr.io/landing:latest
docker push [ACR_NAME].azurecr.io/landing:latest
```

## ⚠️ Notlar

1. Docker Desktop'un yüklü ve çalışır durumda olması gerekir
2. Port 8080'in boş olduğundan emin olun
3. Production'da SSL/TLS reverse proxy kullanın (Traefik, Nginx Proxy Manager vb.)