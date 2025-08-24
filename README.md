# Cloud-archtecting-taskE

instruction:

install nodejs and npm first (nodejs.org)
install and enable apache
```
sudo systemctl enable httpd
sudo systemctl start httpd  
```
```
cd cognito-app
npm install
npm run build | run dev
```
move app into server
```
sudo cp -r dist/* /var/www/html/
```
change redirectUri and logoutUri to domain/ip 
