# Cloud-archtecting-taskE

## Instruction

### For production deployment

Install nodejs and npm first (nodejs.org)
Install and enable apache:
```
sudo yum install httpd -y
sudo systemctl enable httpd
sudo systemctl start httpd  
```
Install dependencies:
```
cd cognito-app
npm install
npm run build
```
Move app into server
```
sudo cp -r dist/* /var/www/html/
```
Must change redirectUri and logoutUri to domain/ip with https (default is set to http://localhost:5173) 

### For local testing

Install nodejs and npm first (nodejs.org)
Install dependencies:
```
cd cognito-app
npm install
npm run dev
```
Access at localhost:5173
